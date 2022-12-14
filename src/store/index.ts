import { applyMiddleware, combineReducers } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './Reducers';


export const store = createStore(rootReducer, applyMiddleware(thunk))