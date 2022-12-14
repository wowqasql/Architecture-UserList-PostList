import { FC } from "react"
import { IPost } from "../types/IPost"

interface PostItemProps {
  post: IPost
}

const PostItem:FC<PostItemProps> = ({post}) => {
  return(
    <div>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  )
}

export default PostItem