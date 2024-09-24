import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../../Components/Input/InputField'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../Config/FirebaseConfig'
import { Button, Radio } from '@mui/material'

const StaffFrom = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState(0)
    const [radio, setRadio] = useState('')
  
    const navigate =useNavigate()
  
    const userRegistration = {
      firstName,
      lastName,
      email,
      age,
      radio
    }
  
    const handleRadioValue = (e) => {
      setRadio(e.target.value)
    }
  
    const handleSubmitRegister = async (e) => {
      e.preventDefault();
     if(firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || age.trim() === 0 || radio === ''){
      alert('Please fill all value')
     }
     else{
      try {
        const addRegister = addDoc(collection(db, "staffInformation"), userRegistration)
          .then((response) => {
           alert("Staff Add Successfully..");
           navigate('/staff/staffList')
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
     }
    };

  return (
   
      <form className='Content'>
        <div className='Regis_Form'>
        <p className='Form-heading'>Registration Form</p>
        <InputField onchange = {(e) => setFirstName(e.target.value)} label='First Name:' placeholder='Enter your first Name' type='text'/>
        <InputField onchange = {(e) => setLastName(e.target.value)} label='Last Name:' placeholder='Enter your last name' type='text'/>
        <InputField onchange = {(e) => setEmail(e.target.value)} label='Email:' placeholder='Enter your email' type='email'/>
        <InputField onchange = {(e) => setAge(e.target.value)} label='Age' placeholder='Enter your Age' type='number'/>
        <p>
      <label htmlFor="Gender" style={{color: '#016B1F', fontSize: 24}}>Gender</label>
      <p>
        <Radio checked={radio === 'Male'} onChange={handleRadioValue} value='Male' color="primary"/>
        <label htmlFor="Male">Male</label>
      </p>
      <p>
        <Radio checked={radio === 'Female'} onChange={handleRadioValue} value='Female' color="primary"/>
        <label htmlFor="Female">Female</label>
      </p>
     </p>
        <Button variant='contained' onClick={handleSubmitRegister}>Submit</Button>
        </div>
  </form>
  )
}

export default StaffFrom
