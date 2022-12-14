import { FC } from "react"
import { Link } from "react-router-dom"

const Header: FC = () => {
  return (
    <div >
      <Link to='/users'>Пользователи</Link> 
      <Link to='/posts'>Посты</Link>
    </div>
  )
}

export default Header