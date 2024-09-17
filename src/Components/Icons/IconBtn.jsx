import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react'

const IconBtn = () => {
  return (
    <div>
   <IconButton aria-label={10}>
      <Badge badgeContent={100} color="secondary">
        <MailIcon />
      </Badge>
    </IconButton>
    </div>
  )
}

export default IconBtn
