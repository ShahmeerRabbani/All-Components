import React from 'react'
import InputField from '../Components/Input/InputField'
import ButtonField from '../Components/Buttons/ButtonField'
import Navbar from '../Components/Navbar/Navbar'
import StickyHeadTable from '../Components/Table/Table'
import { useSelector } from 'react-redux'
import Radiobtn from '../Components/Radiobtn/Radiobtn'
import IconBtn from '../Components/Icons/IconBtn'
import ProCard from '../Components/ProductCards/ProCard'
import Sidebar from '../Components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {


  return (
    <div>
      <Navbar/>
      <Sidebar/>
    </div>
  )
}

export default Dashboard
