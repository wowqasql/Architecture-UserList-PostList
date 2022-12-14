import { postReducer } from './postReducer';
import { combineReducers } from 'redux';
import { userReducer } from './userReduser';


export const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer
})

export type RootState = ReturnType<typeof rootReducer>