import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Screens/Login'
import './App.css'
import Dashboard from './Screens/Dashboard'
import SignUp from './Screens/SignUp'

const App = () => {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </div>
  )
}

export default App
