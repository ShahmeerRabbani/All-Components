import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../../Components/Input/InputField'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../Config/FirebaseConfig'
import { Button, Radio } from '@mui/material'

const StaffFrom = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState(0)
    const [cnic, setCnic] = useState(0)
    const [radio, setRadio] = useState('')
  
    const navigate =useNavigate()
  
    const userRegistration = {
      name,
      email,
      cnic,
      phone,
      radio
    }
  
    const handleRadioValue = (e) => {
      setRadio(e.target.value)
    }
  
    const handleSubmitRegister = async (e) => {
      e.preventDefault();
     if(name.trim() === '' || email.trim() === '' || phone.trim() === 0 || cnic === 0 || radio === ''){
      alert('Please fill all value')
     }
     else{
      try {
        const addRegister = addDoc(collection(db, "staffSignUpInfo"), userRegistration)
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
        <InputField onchange = {(e) => setName(e.target.value)} label='Full Name:' placeholder='Enter your Full Name' type='text'/>
        <InputField onchange = {(e) => setEmail(e.target.value)} label='Email:' placeholder='Enter your email' type='email'/>
        <InputField onchange = {(e) => setCnic(e.target.value)} label='CNIC:' placeholder='Enter your Cnic no' type='number'/>
        <InputField onchange = {(e) => setPhone(e.target.value)} label='phone' placeholder='Enter your phone' type='number'/>
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
