import { IUser } from './IUser';
export interface UserState {
  users: IUser[],
  loading: boolean,
  error: string | null
}

export enum UserActionType {
  FETCH_USERS= 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}
interface FetchUserAction {
  type: UserActionType.FETCH_USERS

}
interface FetchUserSuccessAction {
  type: UserActionType.FETCH_USERS_SUCCESS
  payload: any[]
}
interface FetchUserErrorAction {
  type: UserActionType.FETCH_USERS_ERROR
  payload: string  
}
export type UserAction = FetchUserAction | FetchUserErrorAction | FetchUserSuccessAction

