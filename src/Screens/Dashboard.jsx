import React, { useEffect, useState } from "react";
import InputField from "../Components/Input/InputField";
import ButtonField from "../Components/Buttons/ButtonField";
import Navbar from "../Components/Navbar/Navbar";
import StickyHeadTable from "../Components/Table/Table";
import { useSelector } from "react-redux";
import Radiobtn from "../Components/Radiobtn/Radiobtn";
import IconBtn from "../Components/Icons/IconBtn";
import ProCard from "../Components/ProductCards/ProCard";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Config/FirebaseConfig";
import { PieChart } from '@mui/x-charts/PieChart';

const Dashboard = () => {

  const [staffData, setStaffData] = useState([])
  const [customerData, setCustomerData] = useState([])

  useEffect(()=>{
    handleGetData()
  }, [])

  const handleGetData =async () => {
   const getStaffData = await getDocs(collection(db, 'staffSignUpInfo'))
    let arr=[]
    getStaffData.forEach((doc) => {
      arr.push({...doc.data(), id:doc.id})
      setStaffData(arr)

    })

    const getRoomData = await getDocs(collection(db, "bookingForm"))
      let arrRoom=[]
      getRoomData.forEach((doc) => {
        arrRoom.push({...doc.data(), id:doc.id})
        setCustomerData(arrRoom)
        
      })
    }


  
      


  return (
    <div>
      <Navbar />
      <div className="main-display">
        <Sidebar />
        <div>

        
        <div style={{ margin: "30px", display: 'flex', gap: 20 }}>
          <Box
            sx={{
              height: "200px",
              width: "300px",
              textAlign: "center",
              padding: "10px",
              display: "grid",
              placeItems: "center",
              borderBottom: "8px solid salmon",
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            }}
          >
            <Typography variant="h5">Total Booked Room</Typography>
            <Typography variant="h2">{customerData.length}</Typography>
          </Box>
          <Box
            sx={{
              height: "200px",
              width: "300px",
              textAlign: "center",
              padding: "10px",
              display: "grid",
              placeItems: "center",
              borderBottom: "8px solid seagreen",
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            }}
          >
            <Typography variant="h5">Total Staff</Typography>
            <Typography variant="h2">{staffData.length}</Typography>
          </Box>
        </div>
      <div>
      {/* <PieChart sx={{marginRight: '20px'}}
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Deluxe' },
            { id: 1, value: 15, label: 'Superior' },
            { id: 2, value: 20, label: 'Guest' },
            { id: 3, value: 30, label: 'Single' },
          ],
        },
      ]}
      width={400}
      height={200}
    /> */}
      </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
