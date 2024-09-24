import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Staff = () => {
  return (
    <div>
        <Navbar/>
        <div className='main-display'>

      <Sidebar/>
      <Outlet/>
        </div>
    </div>
  )
}

export default Staff
