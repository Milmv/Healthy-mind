const initialState = {
    items: null,
    isLoaded: false,
  };

  const logo = (state = initialState, action) => {
    switch (action.type) {
      case "SET_LOGO":
        return {
          ...state,
          items: action.payload,
          isLoaded: true,
        };
  
      default:
        return state;
    }
  };

  export default logo;