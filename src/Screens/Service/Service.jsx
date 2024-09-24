import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Service = () => {
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

export default Service
