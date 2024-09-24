import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Screens/Login'
import './App.css'
import Dashboard from './Screens/Dashboard'
import SignUp from './Screens/SignUp'
import AuthRoute from './Screens/AuthRoute'
import HomeRoute from './Screens/HomeRoute'
import UserForm from './Screens/User/UserForm'
import UserList from './Screens/User/UserList'
import User from './Screens/User/User'
import Staff from './Screens/Staff/Staff'
import StaffFrom from './Screens/Staff/StaffAdd'
import StaffList from './Screens/Staff/StaffList'
import Room from './Screens/Room/Room'
import RoomAvail from './Screens/Room/RoomAvail'
import RoomBooked from './Screens/Room/RoomBooked'
import Booking from './Screens/Booking/Booking'
import CheckIn from './Screens/Booking/CheckIn'
import CheckOut from './Screens/Booking/CheckOut'
import Service from './Screens/Service/Service'
import AllService from './Screens/Service/AllService'
import Inventory from './Screens/Inventory/Inventory'
import StoreInventory from './Screens/Inventory/StoreInventory'
import Profile from './Screens/Profile/Profile'
import ManageProfile from './Screens/Profile/ManageProfile'
import Payment from './Screens/Payment/Payment'
import PaymentStructure from './Screens/Payment/PaymentStructure'
import PaymentVoucher from './Screens/Payment/PaymentVoucher'
import PaymentSub from './Screens/Payment/PaymentSub'
import LandingPage from './Screens/LandingPage'

const App = () => {
  return (
    <div className="App">
    <Routes>
      <Route element={<AuthRoute/>}>
      <Route path='/' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      </Route>
      <Route element={<HomeRoute/>}>
      <Route path='/home' element={<LandingPage/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/user' element={<User/>}>
      {/* <Route path='userForm' element={<UserForm/>}/> */}
      <Route path='userList' element={<UserList/>}/>
      </Route>
      <Route path='/staff' element={<Staff/>}>
      <Route path='staffForm' element={<StaffFrom/>}/>
      <Route path='staffList' element={<StaffList/>}/>
      </Route>
      <Route path='/room' element={<Room/>}>
      <Route path='roomAvailable' element={<RoomAvail/>}/>
      <Route path='roomBooked' element={<RoomBooked/>}/>
      </Route>
      <Route path='/booking' element={<Booking/>}>
      <Route path='checkIn' element={<CheckIn/>}/>
      <Route path='checkOut' element={<CheckOut/>}/>
      </Route>
      {/* <Route path='/service' element={<Service/>}>
      <Route path='allServices' element={<AllService/>}/>
      </Route> */}
      {/* <Route path='/inventory' element={<Inventory/>}>
      <Route path='storeInventory' element={<StoreInventory/>}/>
      </Route> */}
      {/* <Route path='/profile' element={<Profile/>}>
      <Route path='manageProfile' element={<ManageProfile/>}/>
      </Route> */}
      <Route path='/payment' element={<Payment/>}>
      <Route path='paymentStructure' element={<PaymentStructure/>}/>
      <Route path='paymentVoucher' element={<PaymentVoucher/>}/>
      <Route path='payment-submission' element={<PaymentSub/>}/>
      </Route>
      </Route>
    </Routes>
    </div>
  )
}

export default App
