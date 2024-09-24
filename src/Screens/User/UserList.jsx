import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../../Config/FirebaseConfig'
import DataTable from '../../Components/Table/Table'
import { Button } from '@mui/material'

const UserList = () => {

    const [customerData, setCustomerData] = useState([])
  
    const navigate = useNavigate()
  
    useEffect(()=>{
      handleGetStaffData()
    }, [])
  
    const handleGetStaffData =async () => {
  
      const getStaffData = await getDocs(collection(db, "bookingForm"))
      let arr=[]
      getStaffData.forEach((doc) => {
        arr.push({...doc.data(), id:doc.id})
        setCustomerData(arr)
  
      })
      // if (arr.length > 0) {
      //   const keys = Object.keys(arr[0]);
      //   console.log(keys);
      // }
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'fullName', headerName: 'Full name', width: 130 },
        { field: 'phone', headerName: 'Phone no', width: 130 },
        { field: 'email', headerName: 'email', width: 130 },
        { field: 'checkIn', headerName: 'Check IN',  width: 90,},
        { field: 'checkOut', headerName: 'Check Out',  width: 90,},
        { field: 'city', headerName: 'City',  width: 90,},
        { field: 'noRoom', headerName: 'no Room',  width: 90,},
        { field: 'selectRoom', headerName: 'Room Selected',  width: 90,},
        { field: 'selectBed', headerName: 'BED',  width: 90,},
        { field: 'selectMeal', headerName: 'Meal',  width: 90,},
        // { field: 'radio', headerName: 'Gender', width: 100 },
      ];
       

  return (
    <div className='Content'>
    <div className='Content_Data'>
   <p className='Form-heading'>Customer List</p>
   {/* <p className="add_btn_parent"><Button variant="contained" className="add_btn" onClick={() => navigate('/user/userForm')}>Add</Button></p> */}
   <div className="content_table">
    <DataTable dataRow={customerData} dataColumn = {columns} changeProp='Age'/>
   </div>
    </div>
   </div>
  )
}

export default UserList
