export default function createStore(reducer, initState, rewriteCreateStoreFunc) {
  if (typeof initState === 'function') {
    rewriteCreateStoreFunc = initState;
    initState = undefined;
  }

  if (rewriteCreateStoreFunc) {
    const newCreateStore = rewriteCreateStoreFunc(createStore);
    return newCreateStore(reducer, initState);
  }

  let state = initState;
  let listeners = [];

  const replaceReducer = (nextReducer) => {
    reducer = nextReducer;
    dispatch({ type: Symbol() });
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
      console.log('listeners = ', listeners);
    }
  };

  const dispatch = (action) => {
    state = reducer(state, action);

    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  };

  const getState = () => state;

  dispatch({ type: Symbol() });

  return {
    subscribe,
    replaceReducer,
    dispatch,
    getState,
  }
}
