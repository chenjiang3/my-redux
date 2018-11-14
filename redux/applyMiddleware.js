const applyMiddleware = (...middlewares) => {
  return (oldCreateStore) => {
    return (reducer, initState) => {
      const store = oldCreateStore(reducer, initState);
      const simpleStore = { getState: store.getState };
      const chain = middlewares.map(middleware => middleware(simpleStore));
      let dispatch = store.dispatch;
      chain.reverse().map(middleware => {
        dispatch = middleware(dispatch);
      });
      store.dispatch = dispatch;
      return store;
    }
  }
};

export default applyMiddleware;