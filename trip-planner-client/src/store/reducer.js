const initialState = {
  isAuthenticated: false,
  tripsCounter: 0
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

    case "INCREMENT_TRIP_COUNTER":
      return {
        ...state,
        tripsCounter: state.tripsCounter + 1
      };

    case "DECREMENT_TRIP_COUNTER":
      return {
        ...state,
        tripsCounter: state.tripsCounter - 1
      };

    default: {
      return state;
    }
  }
};

export default reducer;
