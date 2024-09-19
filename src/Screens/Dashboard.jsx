import React from 'react'
import InputField from '../Components/Input/InputField'
import ButtonField from '../Components/Buttons/ButtonField'
import Navbar from '../Components/Navbar/Navbar'
import StickyHeadTable from '../Components/Table/Table'
import { useSelector } from 'react-redux'
import Radiobtn from '../Components/Radiobtn/Radiobtn'
import IconBtn from '../Components/Icons/IconBtn'
import ProCard from '../Components/ProductCards/ProCard'

const Dashboard = () => {
  
  const {counter} = useSelector(state => state.counterReducer)

  console.log(counter)

  return (
    <div>
      <Navbar/>
      <h1>Dashboard</h1>
      <InputField/>
      <h1>Counter With Redux : {counter}</h1>
      <ProCard/>
      <ButtonField/>
      <Radiobtn/>
      <IconBtn/>
      <StickyHeadTable/>
    </div>
  )
}

export default Dashboard
