const initialState = {
    Height: null,
    Weight: null,
  };
  
  const params = (state = initialState, action) => {
    if (action.type === 'SET_HEIGHT') {
      return {
        ...state,
        Height: action.payload,
      };
    }
    if (action.type === 'SET_WEIGHT') {
      return {
        ...state,
        Weight: action.payload,
      };
    }
    return state;
  };
  
  export default params;