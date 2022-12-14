import React, {FC, useEffect} from 'react'
import { useActions } from '../hooks/useAction'
import { useTypedSelector } from '../hooks/useTypedSelector'
import List from '../List'
import { IPost } from '../types/IPost'

import PostItem from './PostItem'

const PostList:FC = () => {
  const posts = useTypedSelector(state => state.post)
  const {fetchPosts} = useActions()

  useEffect(() => {
    fetchPosts(posts.page, posts.limit)
  },[])

  if(posts.loading){
    return <h1>Загрузка...</h1>
  }
  if(posts.error){
    return <h1>Ошибка...</h1>
  }

  return (
    <div>
      <List items={posts.posts} itemRender={(post: IPost) => <PostItem key={post.id} post={post} />} />
    </div>
  )
}

export default PostList