import { type } from 'os';
import axios from 'axios';
import { Dispatch } from 'redux';
import { UserAction, UserActionType } from './../../types/users';
const url = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = () => {
  return async function (dispatch: Dispatch<UserAction>){
    try{
      dispatch({type: UserActionType.FETCH_USERS})
      const response = await axios.get(url)
      dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: response.data})
    }
    catch(e){
      dispatch({type: UserActionType.FETCH_USERS_ERROR, 
                payload: 'Ошибка при загрузке пользователей'
              })
    }
  }
}