const initialState = {
  isAuthenticated: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isAuthenticated: true
      };

    case "LOG_OUT":
      return {
        ...state,
        isAuthenticated: false
      };

    default: {
      return state;
    }
  }
};

export default reducer;
