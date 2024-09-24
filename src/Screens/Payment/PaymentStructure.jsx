import React, { useState } from 'react'
import InputField from '../../Components/Input/InputField'
import { Button } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../Config/FirebaseConfig'

const PaymentStructure = () => {

  const [visaCard, setVisaCard] = useState(0)
  const [masterCard, setMasterCard] = useState(0)
  const [name, setName] = useState('')
  const [newCard, setNewCard] = useState(0)


  const cardObj = {
    visaCard,
    masterCard,
    name,
    newCard
  }

  const CardData =async () => {
    await addDoc(collection(db, 'cardData'), cardObj)
    .then((res) => {
      alert('Payment Done')
    })
    .catch((err) => {
      alert(err)
    })
  }

  return (
    <div className='Content'>
      <div className='Regis_Form'>
      <h1>Payment Method</h1>
      <InputField onchange={(e)=>setVisaCard(e.target.value)} label='Visa Card' placeholder='***********42345'/>
      <InputField onchange={(e)=>setMasterCard(e.target.value)} label='Master Card' placeholder='***********76554'/>
      <h4>Add New Card:</h4>
      <InputField onchange={(e)=>setName(e.target.value)} label='Cardholders Name' placeholder='name'/>
      <InputField onchange={(e)=>setNewCard(e.target.value)} label='Card Number' placeholder='1234 5678 9065'/>
      <Button variant='contained' onClick={CardData}>ADD CARD</Button>
      </div>
    </div>
  )
}

export default PaymentStructure
