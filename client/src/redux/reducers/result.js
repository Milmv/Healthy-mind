const initialState = {
  
  obj: [],
  isLoaded: false,
};

const result = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESULT":
      return {
        ...state,
        isLoaded: true,
        obj: action.payload,
      };

    default:
      return state;
  }
};

export default result;
