export const NAVIGATION_STEPS = {
  TOKEN_SETUP: {
    idx: 1,
    title: 'Token Setup',
    description: 'Select the futures for your own version of the DAY token',
    className: 'step_token-setup',
    iconClassName: 'step-icons_token-setup',
    propertyKeys: ['tokenName', 'symbol'],
    nextUrl: '/step-2',
  },
  TIMEMINT_SETUP: {
    idx: 2,
    title: 'Timemint Setup',
    description: 'Setup minting and halving rate your contract will apply',
    className: 'step_timemint-setup',
    iconClassName: 'step-icons_timemint-setup',
    propertyKeys: ['minMintingPower', 'maxMintingPower', 'halvingCycle', 'mintingPeriod'],
    nextUrl: '/step-3',
  },
  CONTRACT_SETUP: {
    idx: 3,
    title: 'Contract Setup',
    description: 'Choose the specifics of your smart contract',
    className: 'step_contract-setup',
    iconClassName: 'step-icons_contract-setup',
    propertyKeys: ['maxAddresses', 'startingId', 'totalMintingId',
      'teamLockPeriod', 'postDeploymentMaxIds', 'minimumBalance'],
    nextUrl: '/step-4',
  },
  PUBLISH: {
    idx: 4,
    title: 'Publish',
    description: 'Check your contract\'s data and proceed with the deployment',
    className: 'step_publish',
    iconClassName: 'step-icons_publish',
    propertyKeys: ['tokenName', 'symbol',
      'minMintingPower', 'maxMintingPower', 'halvingCycle', 'mintingPeriod',
      'maxAddresses', 'startingId', 'totalMintingId',
      'teamLockPeriod', 'postDeploymentMaxIds', 'minimumBalance'],
    nextUrl: '/step-5',
    prevUrl: '/step-3',
  },
  WATCH: {
    idx: 5,
    title: 'Watch Page',
    description: 'Watch your deployed contract details and also assign TimeMints',
    className: 'step_watch',
    iconClassName: 'step-icons_watch',
    propertyKeys: ['receiverAddress','tokens','weiAmount','timemintId','teamMember','isTest'],
    prevUrl: '/step-4',
  },
};

export const PROPERTIES = [
  {
    name: 'tokenName',
    title: 'Token name',
    description: 'The NAME of your token, as shown on the block explorer',
    errorMessage: 'Please enter a valid token name',
    validator: value => typeof value === 'string' && value.length > 0 && value.length < 30,
  },
  {
    name: 'symbol',
    title: 'Symbol',
    description: 'The token TICKER, as shown on the block explorer',
    errorMessage: 'Please enter a valid symbol',
    validator: value => typeof value === 'string' && value.length > 0 && value.length < 30,
  },
  {
    name: 'minMintingPower',
    title: 'Minimum minting power',
    description: 'The lowest possible minting rate for TimeMints ( Percentage % )',
    errorMessage: 'Please enter a valid Minimum minting power',
    validator: value => new RegExp('^\\d+\\.?\\d*$').test(value) && value.length > 0 && value.length < 30,
  },
  {
    name: 'maxMintingPower',
    title: 'Max minting power',
    description: 'The highest possible minting rate for TimeMints ( Percentage % )',
    errorMessage: 'Please enter a valid Max minting power',
    validator: value => new RegExp('^\\d+\\.?\\d*$').test(value) && Number(value) > 0 && value.length > 0 && value.length < 30,
  },
  {
    name: 'halvingCycle',
    title: 'Halving cycle in Days',
    description: 'The period in days between the halvings of the minting power',
    errorMessage: 'Please enter a valid Halving cycle',
    validator: value => new RegExp('^\\d+$').test(value) && Number(value) > 0 && value.length > 0 && value.length < 30,
  },
  {
    name: 'mintingPeriod',
    title: 'Minting period in sec',
    description: 'Number of Seconds for TimeMints to mint, Equivalent of a Day to minters',
    errorMessage: 'Please enter a valid Minting period in sec',
    validator: value => new RegExp('^\\d+$').test(value) && Number(value) > 0 && value.length > 0 && value.length < 30,
  },
  {
    name: 'maxAddresses',
    title: 'Max addresses',
    description: 'The maximum possible number of TimeMints ( Team TimeMints + Investor TimeMints)',
    errorMessage: 'Please enter a valid Max addresses',
    validator: value => new RegExp('^\\d+$').test(value) && Number(value) > 1 && value.length > 0 && value.length < 30,
  },
  {
    name: 'startingId',
    title: 'Starting Id for Team minting addresses',
    description: 'The ID of the first Team TimeMint (Only Team TimeMints)',
    errorMessage: 'Please enter a valid Starting Id',
    validator: value => new RegExp('^\\d+$').test(value) && value.length > 0 && value.length < 30,
  },
  {
    name: 'totalMintingId',
    title: 'Number of team minting Addresses',
    description: 'The total number of all Team TimeMints ( Only Team TimeMints )',
    errorMessage: 'Please enter a valid Total team\'s minting Id',
    validator: value => new RegExp('^\\d+$').test(value) && value.length > 0 && value.length < 30,
  },
  {
    name: 'teamLockPeriod',
    title: 'Team lock period in seconds',
    description: 'Number of Seconds required by Team TimeMints to wait before Minted Tokens can be withdrawn or Transfered ',
    errorMessage: 'Please enter a valid Team lock period',
    validator: value => new RegExp('^\\d+$').test(value) && value.length > 0 && value.length < 30,
  },
  {
    name: 'postDeploymentMaxIds',
    title: 'Post Release Max Addresses',
    description: 'Total number of allowed Post-release TimeMints allocation',
    errorMessage: 'Please enter a valid Post Release Max IDs',
    validator: value => new RegExp('^\\d+$').test(value) && value.length > 0 && value.length < 30,
  },
  {
    name: 'minimumBalance',
    title: 'Min balance to transfer a TimeMint',
    description: 'Minimum number of minted tokens that can be transferred by TimeMints ( WEI )',
    errorMessage: 'Please enter a valid Minimum balance',
    validator: value => new RegExp('^\\d+$').test(value) && Number(value) > 0 && value.length > 0 && value.length < 30,
  },
  {
    name: 'receiverAddress',
    title: 'Receiver\'s Address',
    description: 'Ethereum Adress of TimeMint receiver',
    errorMessage: 'Please enter a valid Receiver\'s Address',
    validator: (value,web3) => web3.isAddress(value),
  },
  {
    name: 'tokens',
    title: 'Number of Tokens',
    description: 'Number of TimeMint tokens to be awarded ( ETH )',
    errorMessage: 'Please enter a valid Token amount',
    validator: value => new RegExp('^\\d+\\.?\\d*$').test(value)&& Number(value) > 0  && value.length > 0 && value.length < 30,
  },
  {
    name: 'weiAmount',
    title: 'ETH Value',
    description: 'Equivalent value of TimeMint Tokens  in ETH',
    errorMessage: 'Please enter a valid ETH Value',
    validator: value => new RegExp('^\\d+\\.?\\d*$').test(value)  && value.length > 0 && value.length < 30,
  },
  {
    name: 'timemintId',
    title: 'Timemint Id',
    description: 'Timemint Id to be awarded to the Receiver',
    errorMessage: 'Please enter a valid Timemint ID',
    validator: value => new RegExp('^\\d+$').test(value) && value.length > 0 && value.length < 30,
  },
  {
    name: 'teamMember',
    title: 'Is this a team member ?',
    description: 'Is the TimeMint receiver a team member?',
    errorMessage: 'Please indicate Team member',
    validator: value => (!value || value === true),
  },
  {
    name: 'isTest',
    title: 'Is this a test ?',
    description: 'Is the TimeMint allocation a test?',
    errorMessage: 'Please indicate Test',
    validator: value => (!value || value === true),
  },
];

export const NETWORK_MESSAGES = {
  '1': 'You are connected to Mainnet',
  '2': 'You are connected to deprecated Mordern Testnet',
  '3': 'You are connected to the Ropsten Testnet',
  '4': 'You are connected to the Rinkeby Testnet',
  default: 'You are connected to an unknown network',
};

export const CONTRACT_LABELS = {
  address: 'Contract Address',
  tokenName: 'Token Name',
  symbol: 'Symbol',
  totalSupply: 'Total supply',
  decimal: 'Decimals',
  mintingPeriod: 'Minting Period (secs)',
  totalDays: 'Total Days',
  halvingCycle: 'Halving Cycle',
  dayTokenActivated: 'Tokens Activated',
  maxAddresses: 'Max Addresses',
  firstContributorId : 'First Contributor',
  firstPostIcoContributorId: 'First Post-Release TimeMint',
  firstTeamContributorId: 'First Team TimeMint',
  minMintingPower: 'Min Minting Power ( % )',
  maxMintingPower: 'Max Minting Power ( % )',
  initialBlockTimestamp: 'Initial Block Timestamp',
  teamLockPeriodInSec: 'Team Lock Period (secs)',
  totalNormalContributorIds: 'Total Normal Contributors',
  totalNormalContributorIdsAllocated: 'Total Normal Contributors Allocated',
  totalTeamContributorIds: 'Total Team TimeMints Addresses',
  totalTeamContributorIdsAllocated: 'Total Team TimeMints Allocated',
  totalPostIcoContributorIds: 'Total Post-Release TimeMints Addresses',
  totalPostIcoContributorIdsAllocated : 'Total Post-Release TimeMints Allocated'
}
