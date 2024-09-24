import { TextField } from '@mui/material'
import React from 'react'
import styles from "./InputField.module.css";

const InputField = ({ label, placeholder, type, onchange }) => {
  return (
    <p>
        <label htmlFor="name">{label}</label> <br />
        <input
        onChange={onchange}
          className={styles.Input_field}
          type={type}
          name=""
          id=""
          placeholder={placeholder}
          required
        />
      </p>
  )
}

export default InputField
