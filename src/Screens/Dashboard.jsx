import React from 'react'
import InputField from '../Components/Input/InputField'
import ButtonField from '../Components/Buttons/ButtonField'
import Navbar from '../Components/Navbar/Navbar'
import StickyHeadTable from '../Components/Table/Table'

const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <h1>Dashboard</h1>
      <InputField/>
      <ButtonField/>
      <StickyHeadTable/>
    </div>
  )
}

export default Dashboard
