let initialState = {
  loading: "",
  userAddress: "",
  connectionType: "",
  chainId: "",
  busdBalance: "0",
  busdApproved: false,
  validTickets: [],
  pendingRewards: "0",
  entries: "0",
  jackpot: "0",
  smallJackpot: "0",
  totalPayout: "0",
};

let commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        loading: false,
        userAddress: action.payload.userAddress,
        connectionType: action.payload.connectionType,
      };
    case "UPDATE_CHAIN":
      return {
        ...state,
        chainId: action.payload.chainId,
      };
    case "UPDATE_USER_BALANCE":
      return {
        ...state,
        busdBalance: action.payload.busdBalance,
        validTickets: action.payload.validTickets,
        pendingRewards: action.payload.pendingRewards,
        busdApproved: action.payload.busdApproved,
      };
    case "UPDATE_CONTRACT_INFO":
      return {
        ...state,
        entries: action.payload.entries,
        jackpot: action.payload.jackpot,
        smallJackpot: action.payload.smallJackpot,
        totalPayout: action.payload.totalPayout,
      };
    default: {
      return state;
    }
  }
};

export default commonReducer;
