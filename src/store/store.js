import {createStore, combineReducers, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import todoReducer from './reducer.js';

let reducers = combineReducers({
  todos: todoReducer,
});

const store = () => createStore(reducers);

export default store;

//1:53:18