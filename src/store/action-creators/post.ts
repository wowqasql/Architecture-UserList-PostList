import { PostAction, PostActionTypes } from './../../types/post';
import { Dispatch } from 'redux';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = (page = 1, limit = 10) => {
  return async function (dispatch:Dispatch<PostAction>){
    try{
      dispatch({type:PostActionTypes.FETCH_POST })
      const response = await axios.get(url, {params:{_page: page,_limit: limit} })
      dispatch({type: PostActionTypes.FETCH_POST_SUCCESS, payload: response.data})
    }
    catch(e){
      dispatch({type: PostActionTypes.FETCH_POST_ERROR, payload: 'Ошибка при загрузке постов'})
    }
  }
}


export const setPostPage = (page: number,): PostAction => {
  return {type: PostActionTypes.SET_POST_PAGE, payload: page}
}