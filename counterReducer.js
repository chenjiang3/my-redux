let initState = {
  count: 0,
};

function counterReducer(state, action) {
  if (!state) {
    return initState;
  }

  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DESCREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

export default counterReducer;