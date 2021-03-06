import Web3 from 'web3/index';
import ethers from 'ethers';
import Bb from 'bluebird';
import { action, observable, runInAction } from 'mobx';

import dayTokenABI from './abi/dayTokenABI';
import deployerABI from './abi/deployerABI';
import dayFaucetABI from './abi/dayFaucetABI';

import web3Config from './lib/web3Utils.js'

let instance = null;
let TOKEN_CONTRACT_ADDRESS,
DEPLOYER_ADDRESS,
FAUCET_ADDRESS,
MIN_FEE;

export default class Web3Service {
  initialized = false;
  web3 = null;
  tokenInstance = null;
  deployerInstance = null;
  @observable connectedToMetaMask = null;
  @observable accounts = null;
  @observable netId = null;
  @observable network = 'Rinkeby';

  constructor(props) {
    Object.assign(this, props);
  }

  @action
  async init() {
    if (!this.initialized) {
      await this.connect();
      this.initialized = true;
      return true;
    } else {
      return false;
    }
  }

  @action
  async connect() {
    let { web3 } = this;
    if (!web3) {
      if (typeof window.web3 !== 'undefined') {
        web3 = new Web3(window.web3.currentProvider);
        this.connectedToMetaMask = true;
      } else {
        web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        this.connectedToMetaMask = false;
      }
      window.web3 = web3;
      this.web3 = web3;
    }
    if(!this.connectedToMetaMask || !this.web3.isConnected() )//Do not proceed if not connected to metamask
      return;

    this.accounts = web3.eth.accounts;
    web3.eth.defaultAccount = this.accounts[0];
    console.log('accounts', this.accounts);
    const netId =
      await Bb.fromCallback(callback => web3.version.getNetwork(callback));
    runInAction(() => {
      this.netId = netId;
      let network;
      if(netId == 1)
        this.network = 'Mainnet';
      else if(netId == 3)
        this.network = 'Ropsten'
      else if(netId == 4)
        this.network = 'Rinkeby';
      else
        this.network = 'Private'
    });
    console.log('netId', this.netId,this.network);

    TOKEN_CONTRACT_ADDRESS = web3Config[this.network].TOKEN_CONTRACT_ADDRESS;
    DEPLOYER_ADDRESS = web3Config[this.network].DEPLOYER_ADDRESS;
    FAUCET_ADDRESS = web3Config[this.network].FAUCET_ADDRESS;
    MIN_FEE = Number(web3Config[this.network].MIN_FEE);

    this.tokenInstance = web3.eth.contract(dayTokenABI).at(TOKEN_CONTRACT_ADDRESS);
    this.deployerInstance = web3.eth.contract(deployerABI).at(DEPLOYER_ADDRESS);
    //this.deployerInstance = await Bb.fromCallback(callback => web3.eth.contract(deployerABI).at(DEPLOYER_ADDRESS
    //,callback) );
    this.faucetInstance = web3.eth.contract(dayFaucetABI).at(FAUCET_ADDRESS);
  }

  async approveFee() {
    const result =  await Bb.fromCallback((callback) => {
      this.tokenInstance.approve(DEPLOYER_ADDRESS, MIN_FEE, callback);
    });
    return result;
  }

  async deploy(contractData) {
      let {web3,deployerInstance} = this;

      let transactionOptions = {
        gasPrice : (await this.fetchGasPrice()).plus(web3.toWei(2,'gwei')),
      }

      const hash = await Bb.fromCallback((callback)=>{
        deployerInstance.createCustomDayToken(
        contractData.tokenName,
        contractData.symbol,
        contractData.maxAddresses,
        contractData.startingId,
        contractData.totalMintingId,
        contractData.postDeploymentMaxIds,
        this.convertMiningPower(contractData.minMintingPower),
        this.convertMiningPower(contractData.maxMintingPower),
        contractData.halvingCycle,
        contractData.minimumBalance,
        contractData.mintingPeriod,
        contractData.teamLockPeriod,
        transactionOptions,
        callback
      )
    });
    return hash;
  }

  async requestFromFaucet(){
    const tokenBalance = (await Bb.fromCallback( callback => this.faucetInstance.getTokensBalance.call(callback) )).valueOf();
    const waitTime = (await Bb.fromCallback( callback => this.faucetInstance.waitTime.call(callback) )).valueOf();
    const lastRequest = (await Bb.fromCallback( callback => this.faucetInstance.lastRequest.call(this.accounts[0],callback) )).valueOf();
    const now = Math.floor(new Date().getTime()/1000);

    if(tokenBalance < MIN_FEE)
      return {status:-1}

    if( (now - lastRequest) < waitTime)
      return {status:0,data: waitTime - (now - lastRequest) }

    const faucetTxn = await Bb.fromCallback( callback => this.faucetInstance.useFaucet(callback) );
    return {status:1 ,data: faucetTxn };
  }

  async acceptTokenOwnership ( contract ){
    const { web3 } = this;
    const childContract = web3.eth.contract(dayTokenABI).at(contract);
    const txn = await Bb.fromCallback( callback => childContract.acceptOwnership(callback) );
    return txn;
  }

  async releaseTokens(contract){
    const releasetime = Math.round((new Date()).getTime() / 1000);
    const childContract = web3.eth.contract(dayTokenABI).at(contract);
    const released = await Bb.fromCallback( callback => childContract.releaseToken(releasetime, callback) );
    return released;
  }

  async allocateTeamTimemints (data){
    const childContract = web3.eth.contract(dayTokenABI).at(data.contract);
    const allocateTeam = await Bb.fromCallback( callback => childContract.addTeamTimeMints(
      data.receiverAddress,
      data.timemintId,
      data.tokens,
      data.isTest,
      callback
    ) );
    return allocateTeam;
  }

  async allocateNormalTimeMints (data){
    const childContract = web3.eth.contract(dayTokenABI).at(data.contract);
    const allocateNormal = await Bb.fromCallback( callback => childContract.allocateNormalTimeMints(
      data.receiverAddress,
      0,
      data.timemintId,
      data.tokens,
      data.weiAmount,
      callback
    ) );
    return allocateNormal;
  }

  async postAllocateAuctionTimeMints (data){
    const childContract = web3.eth.contract(dayTokenABI).at(data.contract);
    const postAllocate = await Bb.fromCallback( callback => childContract.postAllocateAuctionTimeMints(
      data.receiverAddress,
      0,
      data.timemintId,
      callback
    ) );
    return postAllocate;
  }

  convertMiningPower = (value,reverse) => {
    if(reverse)
      return (value*100)/1e+18;
    return (value/100)*1e+18;
  }

  async fetchGasPrice(){
    const result = await Bb.fromCallback( callback =>
      web3.eth.getGasPrice(callback)
    );
    return result;
  }

  async checkTokenOwnership( contract ){
    const { web3 } = this;
    const childContract = web3.eth.contract(dayTokenABI).at(contract);
    const owner = await Bb.fromCallback( callback => childContract.owner.call(callback));
    const newOwner = await Bb.fromCallback( callback => childContract.newOwner.call(callback));
    if(owner == web3.eth.defaultAccount)
      return owner
    else if( owner != web3.eth.defaultAccount && newOwner == web3.eth.defaultAccount)
      return true;
    else
      return false;
  }

  async checkBalance() {
    const result = await Bb.fromCallback((callback) => {
      this.tokenInstance.balanceOf.call(this.accounts[0], callback);
    });
    return result.valueOf() >= MIN_FEE;
  }

  async checkAllowance() {
    const result = await Bb.fromCallback((callback) => {
      this.tokenInstance.allowance.call(this.accounts[0], DEPLOYER_ADDRESS, callback);
    });
    return result.valueOf() >= MIN_FEE;
  }

  async trackTransaction(hash){
    //let {deployerInstance,trackTransaction} = this;
    let receipt;
    var that = this;

    if(!(receipt = await this.fetchReceipt(hash)) ){
      let Promises = new Promise((resolve, reject) => {
          setTimeout( async function(){
            resolve(await that.trackTransaction(hash) );
          },2000);
        })
      return  Promises;
    }
    else{
      return receipt;
    }
  }

  async fetchReceipt(hash){
    let {web3} = this;
    let receipt =  await Bb.fromCallback( callback=>
      web3.eth.getTransactionReceipt(hash, callback) );
      return receipt;
  }

  async fetchConfirmations(transaction){
    const mined = await this.trackTransaction(transaction);
    const block = await this.fetchBlockNumber();
    const that = this;
    if(!mined.blockNumber ){
      let Promises = new Promise((resolve, reject) => {
          setTimeout( async function(){
            resolve(await that.fetchConfirmations(transaction) );
          },2000);
        })
      return  Promises;
    }
    else{
      return (block - mined.blockNumber);
    }
  }

  async fetchBlockNumber(){
    const{web3} = this;
    const block = await Bb.fromCallback( callback =>
      web3.eth.getBlockNumber(callback));
    return block;
  }

  async fetchNewChild(hash){
    const{web3} = this;
    const receipt = await this.fetchReceipt(hash);
      let foundLog;
      if(!receipt.logs || typeof receipt.logs !== 'object' || receipt.logs.length < 1)
        return false;
      receipt.logs.forEach(function(l){
        if(l.address.toLowerCase() === DEPLOYER_ADDRESS.toLowerCase() )
          if(l.topics[0] == web3.sha3("LogChildCreated(address,address)") )
          foundLog = l.data;
      })
      if(!foundLog)
        return false;
       let result = ethers.Interface.decodeParams(['address','address'],foundLog);
       console.log('New Contract', result[1] )
       return result[1];
  }

  async fetchCreationHash(contract){
    const{web3} = this;
    let foundLog = null,
    DEPLOYER_FIRST_BLOCK = web3Config[this.network].DEPLOYER_FIRST_BLOCK;
    const filterConfig = {
        //topics: [web3.sha3("LogChildCreated(address,address)")],
        fromBlock:DEPLOYER_FIRST_BLOCK,
        toBlock:'latest',
    }

    const created = await Bb.fromCallback( callback =>this.deployerInstance.LogChildCreated({},filterConfig).get(callback) );
    created.forEach(log =>{
      if(log.args.child.toLowerCase() == contract.toLowerCase())
        foundLog = log.transactionHash;
    })
    return foundLog;
  }

  async fetchTeamAllocationHistory( contract, deployedBlock ){
    const{web3} = this;
    const childContract = web3.eth.contract(dayTokenABI).at(contract);
    const filterConfig = {
        //topics: [web3.sha3("LogChildCreated(address,address)")],
        fromBlock: deployedBlock,
        toBlock:'latest',
    }
    let allocLogs = await Bb.fromCallback( callback => childContract.TeamAddressAdded({},filterConfig).get(callback) );
    allocLogs = this.parseAllocationLog(allocLogs);
    return allocLogs;
  }

  async fetchNormalAllocationHistory( contract, deployedBlock ){
    const{web3} = this;
    const childContract = web3.eth.contract(dayTokenABI).at(contract);
    const filterConfig = {
        //topics: [web3.sha3("LogChildCreated(address,address)")],
        fromBlock: deployedBlock,
        toBlock:'latest',
    }
    let allocLogs = await Bb.fromCallback( callback => childContract.Invested({},filterConfig).get(callback) );
    allocLogs = this.parseAllocationLog(allocLogs);
    return allocLogs;
  }

  async fetchPostICOAllocationHistory( contract, deployedBlock ){
    const{web3} = this;
    const childContract = web3.eth.contract(dayTokenABI).at(contract);
    const filterConfig = {
        //topics: [web3.sha3("LogChildCreated(address,address)")],
        fromBlock: deployedBlock,
        toBlock:'latest',
    }
    let allocLogs = await Bb.fromCallback( callback => childContract.PostInvested({},filterConfig).get(callback) );
    allocLogs = this.parseAllocationLog(allocLogs);
    return allocLogs;
  }

  parseAllocationLog = logs => {
    let found = [];
    logs.map( l => {
      for( let m in l.args){
        if(typeof l.args[m].valueOf !== 'undefined')
          l.args[m] = l.args[m].valueOf();
        switch(true){
          case (m == 'investor' || m == 'teamAddress'):
            l.args.receiver = l.args[m];
            delete(l.args[m]);
            break;
          case m == 'id':
            l.args.contributorId = l.args[m];
            delete(l.args[m]);
            break;
        }
      }

      found.push(Object.assign(
        {},
        l.args,
        {transactionHash:l.transactionHash,
          blockNumber: l.blockNumber}
      ) )
    });
    return found;
  }

  async prepareWatch(hash){
    const{web3} = this;
    let contract,transaction;
      if(web3.isAddress(hash)){
          contract = hash;
        transaction = await this.fetchCreationHash(hash);
      }
      else{
        contract = await this.fetchNewChild(hash);
        if(contract)
          transaction = hash;
      }
    return{
      newContract:contract,
      transactionHash:transaction
    };
  }

  async isTokensReleased(contract){
    const{ web3 } = this;
    const childContract = web3.eth.contract(dayTokenABI).at(contract);
    const releaseState = await Bb.fromCallback( callback => childContract.released.call(callback) );
    return releaseState;
  }

  async isTokensOwned(contract){
    const{ web3 } = this;
    const childContract = web3.eth.contract(dayTokenABI).at(contract);
    const owner = await Bb.fromCallback( callback => childContract.owner.call(callback) );
    return owner.toLowerCase() === web3.eth.defaultAccount.toLowerCase();
  }

  async getAllocationHistory( contract ){
    const{ web3 } = this;
    let fromBlock = (await this.fetchBlockNumber()) - 0x2710; //set default fromBlock to 10000 blocks ago
    const DEPLOYER_FIRST_BLOCK = web3Config[this.network].DEPLOYER_FIRST_BLOCK;
    fromBlock = fromBlock > DEPLOYER_FIRST_BLOCK?fromBlock:DEPLOYER_FIRST_BLOCK;
    const watchPrep = await this.prepareWatch( contract );
    if(watchPrep.transactionHash){
      const receipt = await this.fetchReceipt( watchPrep.transactionHash);
      if(receipt)
        fromBlock = receipt.blockNumber;
    }

    const found = {
      team: await this.fetchTeamAllocationHistory(contract,fromBlock),
      normal: await this.fetchNormalAllocationHistory(contract,fromBlock),
      postico: await this.fetchPostICOAllocationHistory(contract,fromBlock)
    }

    let allocations = [];
    for (let f in found){
      found[f].forEach( a => allocations.push( Object.assign(a,{type:f})) );
    }
    return allocations.sort(function(a, b){
      return a.blockNumber-b.blockNumber
    });
  }

  async getContractData(contract){
    const childContract = web3.eth.contract(dayTokenABI).at(contract);
    const data = {
      address: contract,
      tokenName: (await Bb.fromCallback( callback => childContract.name.call(callback) )).valueOf(),
      symbol: (await Bb.fromCallback( callback => childContract.symbol.call(callback) )).valueOf(),
      totalSupply: (await Bb.fromCallback( callback => childContract.totalSupply.call(callback) )).valueOf(),
      decimal: (await Bb.fromCallback( callback => childContract.decimals.call(callback) )).valueOf(),
      mintingPeriod: (await Bb.fromCallback( callback => childContract.DayInSecs.call(callback) )).valueOf(),
      totalDays: (await Bb.fromCallback( callback => childContract.getDayCount.call(callback) )).valueOf(),
      halvingCycle: (await Bb.fromCallback( callback => childContract.halvingCycle.call(callback) )).valueOf(),
      dayTokenActivated: (await Bb.fromCallback( callback => childContract.isDayTokenActivated.call(callback) )).valueOf().toString(),
      maxAddresses: (await Bb.fromCallback( callback => childContract.maxAddresses.call(callback) )).valueOf(),
      firstContributorId : (await Bb.fromCallback( callback => childContract.firstContributorId.call(callback) )).valueOf(),
      firstPostIcoContributorId: (await Bb.fromCallback( callback => childContract.firstPostIcoContributorId.call(callback) )).valueOf(),
      firstTeamContributorId: (await Bb.fromCallback( callback => childContract.firstTeamContributorId.call(callback) )).valueOf(),
      minMintingPower: this.convertMiningPower( (await Bb.fromCallback( callback => childContract.minMintingPower.call(callback) )).valueOf(), true ),
      maxMintingPower: this.convertMiningPower( (await Bb.fromCallback( callback => childContract.maxMintingPower.call(callback) )).valueOf(), true),
      initialBlockTimestamp:(await Bb.fromCallback( callback => childContract.initialBlockTimestamp.call(callback) )).valueOf(),
      teamLockPeriodInSec: (await Bb.fromCallback( callback => childContract.teamLockPeriodInSec.call(callback) )).valueOf(),
      totalNormalContributorIds: (await Bb.fromCallback( callback => childContract.totalNormalContributorIds.call(callback) )).valueOf(),
      totalNormalContributorIdsAllocated: (await Bb.fromCallback( callback => childContract.totalNormalContributorIdsAllocated.call(callback) )).valueOf(),
      totalTeamContributorIds: (await Bb.fromCallback( callback => childContract.totalTeamContributorIds.call(callback) )).valueOf(),
      totalTeamContributorIdsAllocated: (await Bb.fromCallback( callback => childContract.totalTeamContributorIdsAllocated.call(callback) )).valueOf(),
      totalPostIcoContributorIds: (await Bb.fromCallback( callback => childContract.totalPostIcoContributorIds.call(callback) )).valueOf(),
      totalPostIcoContributorIdsAllocated : (await Bb.fromCallback( callback => childContract.totalPostIcoContributorIdsAllocated .call(callback) )).valueOf(),
      isReleased : (await Bb.fromCallback( callback => childContract.released.call(callback) )).valueOf(),
    }
    return data;
  }

  async getDeploymentData(transaction){
    let { web3 } = this;
    const data ={
      creationCode: (await Bb.fromCallback( callback => web3.eth.getTransaction(transaction, callback))).input ,
      abi: JSON.stringify( dayTokenABI ),
    }
    return data;
  }

}

export function initWeb3Service(isServer, source) {
  if (isServer) {
    return new Web3Service(source);
  } else {
    if (instance === null) {
      instance = new Web3Service(source);
    }
    return instance;
  }
}
