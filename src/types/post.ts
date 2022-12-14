import { IPost } from './IPost';
export interface PostState {
  posts: IPost[]
  loading: boolean
  error: string | null
  page: number
  limit: number
}

export enum PostActionTypes {
  FETCH_POST = 'FETCH_POST',
  FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
  FETCH_POST_ERROR = 'FETCH_POST_ERROR',
  SET_POST_PAGE = 'SET_POST_PAGE'
}

interface FetchPostAction {
  type: PostActionTypes.FETCH_POST
}
interface FetchPostSuccessAction {
  type: PostActionTypes.FETCH_POST_SUCCESS,
  payload: any[]
}
interface FetchPostErrorAction {
  type: PostActionTypes.FETCH_POST_ERROR
  payload: string
}
interface FetchPostPageAction {
  type: PostActionTypes.SET_POST_PAGE
  payload: number
}

export type PostAction = FetchPostAction | FetchPostSuccessAction | FetchPostErrorAction | FetchPostPageAction