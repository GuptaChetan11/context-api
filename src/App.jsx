import React from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <div className='text-4xl bg-gray-500 text-black' >React Project with ContextAPI</div>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
