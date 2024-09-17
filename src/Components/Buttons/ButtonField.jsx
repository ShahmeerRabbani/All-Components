import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addCounter, minusCounter } from '../../store/slices/counterSlicer'

const ButtonField = () => {

  const dispatch = useDispatch()

  const handleAction = () => {
    dispatch(addCounter())
  }

  const handleMinus = () => {
    dispatch(minusCounter())
  }

  return (
    <div>
      <Button onClick = {handleAction} variant='contained'>Add me</Button>
      <Button onClick = {handleMinus} variant='contained'>Minus me</Button>
    </div>
  )
}

export default ButtonField
