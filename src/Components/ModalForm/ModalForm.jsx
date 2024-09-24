import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Swal from "sweetalert2";
import { TextField } from '@mui/material';
import SelectField from '../SelectField/SelectField';
import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../Config/FirebaseConfig';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalForm({openModal, handleModalClose, userId}) {

    const [fullName, setFullName ] = useState('')
    const [email, setEmail ] = useState('')
    const [phone, setPhone ] = useState(0)
    const [checkIn, setCheckIn] = useState(0)
    const [checkOut, setCheckOut] = useState(0)
    const [city, setCity] = useState('')
    const [selectRoom, setSelectRoom] = useState('')
    const [selectBed, setSelectBed] = useState('')
    const [noRoom, setNoRoom] = useState(1)
    const [selectMeal, setSelectMeal] = useState('')

    const bookingObj = {
        fullName, 
        email,
        phone,
        checkIn,
        checkOut,
        city,
        selectRoom,
        selectBed,
        noRoom,
        selectMeal
    }

    const handleBooking =async(e) => {
        e.preventDefault()
        if(fullName.trim() === '' || email.trim() === '' || phone === 0 || city === '' || selectRoom === '' || selectBed === '' || noRoom === '' || selectMeal === '' || checkIn === 0 || checkOut === 0){
            Swal.fire({
                icon: 'warning',
                title: 'Fill all the Inputs'
            })
        }
        else{
           await setDoc(doc(db, 'bookingForm', userId), bookingObj) 
           handleModalClose()
           Swal.fire({
            title: "Room Booked Successfully...",
            icon: "success"
          });
        }
       
    }

   

    const roomSelect = ['SUPERIOR ROOM', 'DELUXE ROOM', 'GUEST ROOM', 'SINGLE ROOM']
    const selectCity = ['NARAN', 'KAGAN', 'KARACHI', 'ISLAMABAD', 'QUETTA', 'PESHAWAR', 'LAHOR', 'NAWAB SHAH', 'KASHMIR']
    const bedType = ['SINGLE', 'DOUBLE', 'TRIPLE', 'QUAD']
    const noOfRoom = [1,2,3,4]
    const meal = ['Room Only', 'BreakFast', 'Half Board', 'Full Board']

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleModalClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography  variant="h4" sx={{textAlign: 'center'}}>
            Reservation
          </Typography>
          <div style={{display: 'flex'}}>
            <Box sx={{width: '50%', height: '100%', display: 'flex', flexDirection:'column', gap: '15px', padding: '0 50px'}}>
                <Typography variant='h5'>Guest Information</Typography>
                <TextField onChange={(e) => setFullName(e.target.value)} label='Enter Full Name'/>
                <TextField onChange={(e) => setEmail(e.target.value)} label='Enter Email' type='email'/>
                <SelectField value = {city} onchange={(e) => setCity(e.target.value)} optionSelect={selectCity} title='selectCity'/>
                <TextField onChange={(e) => setPhone(e.target.value)} label='Enter Phone no' type='number'/>

            </Box>


            <Box sx={{width: '50%', height: '100%', display: 'flex', flexDirection:'column', gap: '15px', padding: '0 50px'}}>
            <Typography variant='h5'>Reservation Information</Typography>
            <SelectField value = {selectRoom} onchange={(e) => setSelectRoom(e.target.value)} optionSelect={roomSelect} title = 'type of room'/>
            <SelectField value = {selectBed} onchange={(e) => setSelectBed(e.target.value)} optionSelect={bedType} title='Bedding Type'/>
            <SelectField value = {noRoom} onchange={(e) => setNoRoom(e.target.value)} optionSelect={noOfRoom} title='no of room'/>
            <SelectField value = {selectMeal} onchange={(e) => setSelectMeal(e.target.value)} optionSelect={meal} title='Meal'/>
            <p style={{textAlign: 'center', display: 'flex', alignItems: 'center', gap: '5px'}}>
                <label htmlFor="checkIn">Check In</label>
                <TextField onChange={(e) => setCheckIn(e.target.value)} type='date'/>
                <label htmlFor="checkOut">Check Out</label>
                <TextField onChange={(e) => setCheckOut(e.target.value)} type='date'/>
            </p>
            </Box>
          </div>
          <p style={{textAlign: 'center', marginTop: '20px'}}>
          <Button variant='contained' sx={{bgcolor: 'seagreen'}} onClick={handleBooking}>Submit</Button>
          </p>
        </Box>
      </Modal>
    </div>
  );
}
