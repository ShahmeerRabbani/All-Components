import React from 'react'
import InputField from '../../Components/Input/InputField'
import { Button } from '@mui/material'

const CheckIn = () => {
  return (
    <form className='Content'>
      <div className='Regis_Form'>
      <h1>Hotel Check In</h1>
      {/* <p>Welcome to our hotel! Please fill in the below information.</p> */}
      {/* <InputField label='First Name:' placeholder='Enter your first Name' type='text'/>
        <InputField  label='Last Name:' placeholder='Enter your last name' type='text'/>
        <InputField  label='Email:' placeholder='Enter your email' type='email'/>
        <InputField  label='Age' placeholder='Enter your Age' type='number'/>
        <InputField  label='Room' placeholder='Enter your Room' type='number'/>
        <InputField  label='Check In Date' type='date'/>
        <InputField  label='Check Out Date' type='date'/>
        <Button variant='contained'>Submit</Button> */}
      </div>
    </form>
  )
}

export default CheckIn
