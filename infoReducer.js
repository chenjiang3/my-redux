let initState = {
  name: '',
  description: '',
};

export default function InfoReducer(state, action) {
  if (!state) {
    return initState;
  }

  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name,
      };
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: action.description,
      };
    default:
      return state;
  }
}