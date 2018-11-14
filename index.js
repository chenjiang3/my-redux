import {createStore, applyMiddleware } from './redux';
import combineReducers from './redux/combineReducers';
import counterReducer from "./counterReducer";
import InfoReducer from "./infoReducer";
import {loggerMiddleware} from "./middlewares/loggerMiddleware";
import {exceptionMiddleware} from "./middlewares/exceptionMiddleware";
import {timeMiddleware} from "./middlewares/timeMiddleware";

const reducer = combineReducers({
  counter: counterReducer,
  info: InfoReducer,
});

let initState = {
  counter: {
    count: 0,
  },
  info: {
    name: 'chenjiang',
    description: '我是一个假的前端',
  }
};

const rewriteCreateStoreFunc = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware);
const store = createStore(reducer, initState, rewriteCreateStoreFunc);
// const store = createStore(reducer, rewriteCreateStoreFunc);

const unSubscribe = store.subscribe(() => {
  let state = store.getState();
  console.log('-----', state.counter.count, state.info.name, state.info.description);
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'SET_NAME',
  name: '陈江'
});

unSubscribe();


