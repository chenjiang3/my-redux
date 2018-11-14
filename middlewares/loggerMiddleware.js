export const loggerMiddleware = (store) => {
  return (next) => {
    return (action) => {
      console.log('this state', store.getState());
      console.log('action', action);
      next(action);
      console.log('next state', store.getState(), '\n');
    }
  };
};
