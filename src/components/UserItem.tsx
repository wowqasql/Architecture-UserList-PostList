import React from 'react'
import { IUser } from '../types/IUser'
import { FC } from 'react'

interface UserItemProps {
  user: IUser
}

const UserItem: FC<UserItemProps> = ({user}) => {
  return (
    <div>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
      <p>{user.address.street}</p>
      <p>{user.address.zipcode}</p>
    </div>
  )
}

export default UserItem