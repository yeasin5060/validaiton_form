import React, { useState } from 'react'
import './Login.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Subhead from '../../Utilites/Subhead/Subhead';
import Pera from '../../Utilites/Pera/Pera';
import { Link } from 'react-router-dom';
import login from '../../images/login.png'
import { getAuth, createUserWithEmailAndPassword ,sendEmailVerification ,updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Login = () => {

  const auth = getAuth();
  const db = getDatabase()
  const navigate = useNavigate();

  let [userData , setUserData] = useState({
    fullname : "",
    email : "",
    password : "",
    conpassword : ""
  })

  let handleform = (e)=>{
    let {name , value} = e.target
    setUserData({...userData,[name]:value})
  }

  let [error , setError] = useState({
    fullname : "",
    email : "",
    password : "",
    conpassword : ""
  })

  let emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  let signhandle = ()=>{
    if(!userData.fullname){
        setError({fullname:"Full Name is Require"});
    }
    else if (!userData.email){
      setError({fullname:" "});
      setError({email:"Email is Require"});
    }
    else if (!userData.email.match(emailregex)){
      setError({email:" "});
      setError({email:"Inter valid Email"});
    }
    else if (!userData.password){
      setError({email:" "});
      setError({password:"Password is Require"});
    }
    else if(!userData.conpassword){
      setError({password:""})
      setError({conpassword:"Confirm-Password is Require"})
    }
    else if(userData.conpassword != userData.password){
      setError({conpassword:"Confirm-Password Don't Match"})
    }
    else{
      createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential)=> {
          sendEmailVerification(auth.currentUser)
          .then(() => {
            updateProfile(auth.currentUser, {
              displayName: userData.fullname,
              photoURL: "https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="
            }).then(() => {
              set(ref(db, 'logindata/' + userCredential.user.uid), {
                username:userCredential.user.displayName,
                email: userCredential.user.email,
                profile_picture : userCredential.user.photoURL
              });
            }).then(()=>{
              navigate ("/sign")
              console.log(userCredential)
            })
          });
        })
        .catch((error) => {
          const errorCode = error.code;
        if(errorCode == "auth/email-already-in-use"){
          setError({email : "Email already Exist"})
        }else{
          setError({email : ""})
        }
        });
    }
  }
  return (
    <section id='log_in'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <div className='log_in_page'>
            <div className='log_in_page_wrapper'>
              <Subhead text="Get started with easily register" style="log_in_head"/>
              <Pera text="Free register and you can enjoy it" style="log_in_pera"/>
                <div className='sign_in_wrapper'>
                  <div className='log_in_input_box'>
                    <TextField id="outlined-basic" type = "text" name = "fullname" label="Full Name" onChange={handleform} variant="outlined" />
                    {error.fullname && <p className='login_error'>{error.fullname}</p>}
                  </div>
                  <div className='log_in_input_box'>
                    <TextField id="outlined-basic" type = "email" name = "email" label="Email" onChange={handleform} variant="outlined" />
                    {error.email && <p className='login_error'>{error.email}</p>}
                  </div>
                  <div className='log_in_input_box'>
                    <TextField id="outlined-basic" type = "password" name = "password" label="Password" onChange={handleform} variant="outlined" />
                    {error.password && <p className='login_error'>{error.password}</p>}
                  </div>
                  <div className='log_in_input_box'>
                      <TextField id="outlined-basic" type='password' name='conpassword' label="Confirm-Password" onChange={handleform} variant="outlined" />
                      {error.conpassword && <p className='sign_error'>{error.conpassword}</p>}
                    </div>
                </div>
                <div className='log_in_page_button_box'>
                  <button onClick={signhandle} className='log_in_page_btn'>Sign up</button>
                </div>
                <div className='log_in_page_to_sign_link_box'>
                  <span className='log_in_page_already_account'>
                  Already  have an account ? <Link to="/sign" className='log_in_page_to_sign_link'>Sign In</Link>
                  </span>
                </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className='log_in_image_box'>
            <img src={login} alt="not found" />
          </div>
        </Grid>
      </Grid>
    </Box>
  </section>
  )
}

export default Login