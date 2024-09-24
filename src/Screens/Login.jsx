import React, { useState } from "react";
import "../App.css";
import { Box, Button, CardMedia, Paper, TextField, Typography } from "@mui/material";
import hotelImage from "../assets/hotel.jpeg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { auth, db } from "../Config/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const Login = () => {

  // const location = useLocation()

  const staffCheck = localStorage.getItem('staffCheck')
  const userCheck = localStorage.getItem('userCheck')

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [staffEmail, setStaffEmail] = useState('')
    const [staffPassword, setStaffPassword] = useState('')

    const [staff, setStaff] = useState(false)
    
    const navigate = useNavigate()

  const handleChangeForm = (isTrue) => {
    setStaff(isTrue)
  }

  const handleStaffNavigate = () => {
    navigate('/signUp', {state: true})
  }

  const handleLogin =async (e) => {
    e.preventDefault();

    if(staff){
      if(staffEmail.trim() === '' || staffPassword.trim() === ''){
        Swal.fire({
          icon: 'warning',
          title: 'Fill all the Inputs'
      })
      }
      else{

        if(staffCheck){

          await signInWithEmailAndPassword(auth, staffEmail, staffPassword)
        .then(async(staffCredential) => {
  
          const StaffId = staffCredential.user.uid
          
          localStorage.setItem('StaffID', StaffId)
          
          await getDoc(doc(db, 'staffSignUpInfo', StaffId))
          .then((res) => {
            localStorage.setItem('StaffInformation', JSON.stringify(res.data()))
          })
          .catch((err) => {
            console.error(err)
          })
          Swal.fire({
            title: "Login Successfully...",
            icon: "success"
          });
          navigate('/dashboard', {state: StaffId})
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: error,
            text: "Something went wrong!",
          });
        })
      
        }
        else{
          Swal.fire({
            icon: 'warning',
            title: 'First make staff account'
        })
        }
        
      }
    }
    else{

      if(userName.trim() === '' || email.trim() === '' || password.trim() === ''){
        Swal.fire({
          icon: 'warning',
          title: 'Fill all the Inputs'
      })
      }
      else{

        if(userCheck){

          await signInWithEmailAndPassword(auth, email, password)
          .then(async(userCredential) => {
    
            const userId = userCredential.user.uid
            
            localStorage.setItem('userID', userId)
            
            await getDoc(doc(db, 'signUpInfo', userId))
            .then((res) => {
              localStorage.setItem('userInformation', JSON.stringify(res.data()))
            })
            .catch((err) => {
              console.error(err)
            })
      
      
            Swal.fire({
              title: "Login Successfully...",
              icon: "success"
            });
            navigate('/home', {state: userId})
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: error,
              text: "Something went wrong!",
            });
          })
        }

        else{
          Swal.fire({
            icon: 'warning',
            title: 'First make user account'
        })
        }

      }
        }
        



  }

  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "90%",
            height: "80%",
            margin: "0 auto",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "100%",
            }}
          >
            <CardMedia
              sx={{ width: "100%", height: "100%",}} 
              component="img" image={hotelImage}
            />
          </Box>
          <Box
            sx={{ width: "50%", height: "100%", display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center'}}
          >

            <Typography variant="h4" sx={{
              textAlign: 'center'
            }}>Login</Typography>

            <p style={{
              margin: '0 auto', 
              display: 'flex',
              gap: '20px'
            }}>
            <Button onClick={() => handleChangeForm(false)} variant="contained" sx={{
              padding: '10px 35px',
              borderRadius: '20px'
            }}>User</Button>
            <Button onClick={() => handleChangeForm(true)} variant="contained" sx={{
              padding: '10px 35px',
              borderRadius: '20px'
            }}>Staff</Button>
            </p>
           { staff ?  
            (
              <p style={{
                display: 'flex', 
                flexDirection: 'column',
                padding: '0 70px',
                gap: '20px'
              }}>
                <TextField onChange={(e) => setStaffEmail(e.target.value)} type='text' label='Email'/>
                <TextField onChange={(e) => setStaffPassword(e.target.value)} type='password' label='Password'/>
                
                <Button variant='contained' onClick={handleLogin}>Login</Button>
                <Typography>First make staff account! <a href="#"  onClick={handleStaffNavigate}>Sign up</a></Typography>
              </p>
            )
            : 
           (<p style={{
              display: 'flex', 
              flexDirection: 'column',
              padding: '0 70px',
              gap: '20px'
            }}>
              <TextField onChange = {(e) => setUserName(e.target.value)} type='text' label='username'/>
              <TextField onChange = {(e) => setEmail(e.target.value)} type='text' label='Email'/>
              <TextField onChange = {(e) => setPassword(e.target.value)} type='password' label='Password'/>
              
              <Button variant='contained' onClick={handleLogin}>Login</Button>
              <Typography>Don't have an account? <Link to='/signUp'>Sign up</Link></Typography>
            </p>)
           
            }
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Login;
