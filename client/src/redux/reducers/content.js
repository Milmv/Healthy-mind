const initialState = {
    items: [],
    isLoaded: false,
  };
  
  const content = (state = initialState, action) => {
    switch (action.type) {
      case "SET_CONTENT":
        return {
          ...state,
          items: action.payload,
          isLoaded: true,
        };
  
      default:
        return state;
    }
  };
  
  export default content;