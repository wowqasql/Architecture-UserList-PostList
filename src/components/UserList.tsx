import React, {FC, useEffect} from 'react'
import { useActions } from '../hooks/useAction'
import { useTypedSelector } from '../hooks/useTypedSelector'
import List from '../List'
import { IUser } from '../types/IUser'
import UserItem from './UserItem'





const UserList: FC = () => {

  const {users, error, loading} = useTypedSelector(state => state.user)
  const {fetchUsers} = useActions()
  
  useEffect(() => {
    fetchUsers()
  },[])
  if(loading){
    return <h1>Загрузка...</h1>
  }
  if(error){
    return <h1>Ошибка...</h1>
  }
  return (
    <div>
      <List items={users} itemRender={(user: IUser) => <UserItem key={user.id} user={user} />} />
    </div>
  )
}

export default UserList