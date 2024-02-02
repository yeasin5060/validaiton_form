import React, { useState } from 'react'
import './Signin.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Subhead from '../../Utilites/Subhead/Subhead';
import Pera from '../../Utilites/Pera/Pera';
import { Link } from 'react-router-dom';
import sign from "../../images/sign.png"
import google from '../../images/google.svg'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Signin = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  let [userData , setUserData] = useState({
    email : "",
    password : ""
  })

  let handleform = (e)=>{
    let {name , value} = e.target
    setUserData({...userData,[name]:value})
  }

  let [error , setError] = useState({
    email : "",
    password : ""
  })
  let emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  let login = ()=>{
    if(!userData.email){
      setError({email:"Email is Require"});
    }
    else if (!userData.email.match(emailregex)){
      setError({email:" "});
      setError({email:"Inter valid Email"});
    }else if(!userData.password){
      setError({password:"Password is Require"});
    }
    else{
      signInWithEmailAndPassword(auth, userData.email , userData.password)
      .then((userCredential) => {
          navigate("/home")
      })
      .catch((error) => {
        const errorCode = error.code;
        if(errorCode == "auth/invalid-credential"){
          setError({email:"Register your email"})
        }
        else{
          setError({email: ""})
        }
      });
    }
  }
  return (
    <section id='sgin_in'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <div className='sign_page'>
              <div className='sign_page_wrapper'>
                <Subhead text="Login to your account!" style="sign_in_head"/>
                <div className='sign_page_link_google_wrapper'>
                    <Link className='sing_page_link_google'  to="https://www.google.com" target='blank'>
                      <img src={google} alt="not found" />
                      <span className='sign_page_google'>Login with Google</span>
                    </Link>
                </div>
                  <div className='sign_in_wrapper'>
                    <div className='sign_in_input_box'>
                      <TextField id="outlined-basic" type='email' name='email' label="Email" onChange={handleform} variant="outlined" />
                      {error.email && <p className='sign_error'>{error.email}</p>}
                    </div>
                    <div className='sign_in_input_box'>
                      <TextField id="outlined-basic" type='password' name='password' label="Password" onChange={handleform} variant="outlined" />
                      {error.password && <p className='sign_error'>{error.password}</p>}
                    </div>
                  </div>
                  <div className='sign_page_button_box'>
                    <button onClick = {login} className='sign_page_btn'>Login to Continue</button>
                  </div>
                  <div className='sing_page_to_login_link_box'>
                    <span className='sign_page_already_account'>
                    Already  have an account ? <Link className='sing_page_to_login_link' to="/">Sign Up</Link>
                    </span>
                  </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className='sign_up_image_box'>
                <img src={sign} alt="not found" />
            </div>
          </Grid>
        </Grid>
      </Box>
    </section>
  )
}

export default Signin