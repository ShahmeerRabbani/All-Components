import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../../Config/FirebaseConfig'
import DataTable from '../../Components/Table/Table'
import { Button } from '@mui/material'

const StaffList = () => {

    const [staffData, setStaffData] = useState([])
  
    const navigate = useNavigate()
  
    useEffect(()=>{
      handleGetStaffData()
    }, [])
  
    const handleGetStaffData =async () => {
  
      const getStaffData = await getDocs(collection(db, "staffSignUpInfo"))
      let arr=[]
      getStaffData.forEach((doc) => {
        arr.push({...doc.data(), id:doc.id})
        setStaffData(arr)
  
      })
      // if (arr.length > 0) {
      //   const keys = Object.keys(arr[0]);
      //   console.log(keys);
      // }
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Full name', width: 130 },
        { field: 'email', headerName: 'email', width: 130 },
        { field: 'cnic', headerName: 'CNIC',  width: 90,},
        { field: 'phone', headerName: 'Phone no', width: 100 },
        { field: 'radio', headerName: 'Radio', width: 100 },
      ];
       

  return (
    <div className='Content'>
    <div className='Content_Data'>
   <p className='Form-heading'>Staff List</p>
   <p className="add_btn_parent"><Button variant="contained" className="add_btn" onClick={() => navigate('/staff/staffForm')}>Add</Button></p>
   <div className="content_table">
    <DataTable dataRow={staffData} dataColumn = {columns} changeProp='Age'/>
   </div>
    </div>
   </div>
  )
}

export default StaffList
