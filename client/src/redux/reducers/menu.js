const initialState = {
  items: [],
  isLoaded: false,
};

const menu = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MENU":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    default:
      return state;
  }
};

export default menu;
