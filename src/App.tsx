import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error from './components/Error'
import Header from './components/Header'
import PostList from './components/PostList'
import UserList from './components/UserList'


const App = () => {


  return (
    <div>
      <Header />
      <Routes>
      <Route path='/users' element={<UserList />}/>
      <Route path='/posts' element={<PostList />} />
      <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  )
}

export default App