import React, { useEffect, useState } from "react";
import "../App.css";
import {
  Box,
  Button,
  CardMedia,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import signUpImage from "../assets/signUpImg.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Config/FirebaseConfig";
import Swal from "sweetalert2";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {

  const [isStaff, setIsStaff] = useState(false)
  const location = useLocation()
  
  useEffect(()=>{
    const staff= location.state;
    setIsStaff(staff)
  }, [])

    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState(0)
    const [cnic, setCnic] = useState(0)

    const navigate = useNavigate()

    const AuthObj = {
        name, 
        userName,
        email,
    }

    const StaffObj = {
      name, 
      email, 
      phone, 
      cnic
    }

    const handleSignUp =async (e) => {
        e.preventDefault();

        if(isStaff){
          if(name.trim() === '' || phone === 0 || email.trim() === '' || cnic === 0 || password.trim() === ''){
            Swal.fire({
              icon: 'warning',
              title: 'Fill all the Inputs'
          })
          }
          else{
            await createUserWithEmailAndPassword(auth, email, password)
               .then(async (userCredential) => {
                   const userId = userCredential.user.uid

                   
                   await setDoc(doc(db, 'staffSignUpInfo', userId), StaffObj)
                   
                   Swal.fire({
                     title: "Sign Up Successfully...",
                     icon: "success"
                    });
                    localStorage.setItem('staffCheck',  userId)
                     navigate('/', {state: userId})
               })
               .catch((error) => {
                   Swal.fire({
                       icon: "error",
                       title: "Oops...",
                       text: "Something went wrong!",
                     });
               })
          }
        }
        else{

          if(name.trim() === '' || userName.trim() === '' || email.trim() === '' || password.trim() === ''){
              Swal.fire({
                  icon: 'warning',
                  title: 'Fill all the Inputs'
              })
          }
          else{
              await createUserWithEmailAndPassword(auth, email, password)
               .then(async (userCredential) => {
                   const userId = userCredential.user.uid
       
                   await setDoc(doc(db, 'signUpInfo', userId), AuthObj)
       
                   Swal.fire({
                       title: "Sign Up Successfully...",
                       icon: "success"
                     });
                     localStorage.setItem('userCheck',  userId)
                     navigate('/')
               })
               .catch((error) => {
                   Swal.fire({
                       icon: "error",
                       title: "Oops...",
                       text: "Something went wrong!",
                     });
               })
  
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
            height: "90%",
            margin: "0 auto",
            display: "flex",
          }}
        >
          
          <Box
            sx={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              justifyContent: "center",
            }}
          >


            {isStaff ? (
              <>
              <Typography
              variant="h4"
              sx={{
                textAlign: "center",
              }}
            >
             Staff Sign Up
            </Typography>
            
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0 100px",
                gap: "20px",
              }}
            >
              <TextField onChange={(e) => setName(e.target.value)} type="text" label="Enter name" />
              <TextField onChange={(e) => setPhone(e.target.value)} type="number" label="Phone no" />
              <TextField onChange={(e) => setCnic(e.target.value)} type="number" label="CNIC" />
              <TextField onChange={(e) => setEmail(e.target.value)} type="text" label="Email" />
              <TextField onChange={(e) => setPassword(e.target.value)} type="password" label="Create Password"/>

              <Button variant="contained" onClick={handleSignUp}>Sign Up</Button>
              <Typography>
                Already have an account? <Link to='/'>Login</Link>
              </Typography>
            </p>
              </>
            ) : (
              <>
              <Typography
              variant="h4"
              sx={{
                textAlign: "center",
              }}
            >
             User Sign Up
            </Typography>
            
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0 100px",
                gap: "20px",
              }}
            >
              <TextField onChange={(e) => setName(e.target.value)} type="text" label="Enter name" />
              <TextField onChange={(e) => setUserName(e.target.value)} type="text" label="username" />
              <TextField onChange={(e) => setEmail(e.target.value)} type="text" label="Email" />
              <TextField onChange={(e) => setPassword(e.target.value)} type="password" label="Create Password"/>

              <Button variant="contained" onClick={handleSignUp}>Sign Up</Button>
              <Typography>
                Already have an account? <Link to='/'>Login</Link>
              </Typography>
            </p>
              </>
            )}


          </Box>

          <Box
            sx={{
              width: "50%",
              height: "100%",
            }}
          >
            <CardMedia
              sx={{ width: "100%", height: "100%" }}
              component="img"
              image={signUpImage}
            />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default SignUp;
