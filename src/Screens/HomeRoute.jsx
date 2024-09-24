import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const HomeRoute = () => {
  return (
    localStorage.getItem('userID') ? <Outlet/> : <Navigate to={'/'}/>
    && !localStorage.getItem('staffID') ? <Outlet/> : <Navigate to ={'/'}/>
  )
}

export default HomeRoute
