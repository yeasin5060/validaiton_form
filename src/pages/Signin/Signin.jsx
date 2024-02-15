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
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Oval } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux'
import { loginuserdata } from '../../slice/userslice';
loginuserdata


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
  const dispatch = useDispatch()
  let [reactloder , setReactloder] = useState(false)

  let [loginData , setLoginData] = useState({
    email : "",
    password : ""
  })

  let handleform = (e)=>{
    let {name , value} = e.target
    setLoginData({...loginData,[name]:value})
  }

  let [error , setError] = useState({
    email : "",
    password : ""
  })
  let emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  let login = (e)=>{
    e.preventDefault()
    if(!loginData.email){
      setError({email:"Email is Require"});
    }
    else if (!loginData.email.match(emailregex)){
      setError({email:" "});
      setError({email:"Inter valid Email"});
    }else if(!loginData.password){
      setError({password:"Password is Require"});
    }
    else{
      setReactloder(true)
      signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        if(userCredential.user.emailVerified){
          localStorage.setItem("user",JSON.stringify(userCredential.user))
          dispatch(loginuserdata(userCredential.user))
          navigate("/home")
       }else{
          signOut(auth).then(() => {
            setError({email:"Verify your email"});
            setReactloder(false)
          });
       }
      }).catch((error) => {
        const errorCode = error.code;
        if(errorCode == "auth/invalid-credential"){
          setError({email:"Signin your email"});
        }else{
          setError({email:""})
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
                  <form className='sign_in_wrapper'>
                    <div className='sign_in_input_box'>
                      <TextField id="outlined-basic" type='email' name='email' label="Email" onChange={handleform} variant="outlined" />
                      {error.email && <p className='sign_error'>{error.email}</p>}
                    </div>
                    <div className='sign_in_input_box'>
                      <TextField id="outlined-basic" type='password' name='password' label="Password" onChange={handleform} variant="outlined" />
                      {error.password && <p className='sign_error'>{error.password}</p>}
                    </div>
                  </form>
                  <div className='sign_page_button_box'>
                  {
                      reactloder 
                      ?
                      (<Oval
                        visible={true}
                        height="30"
                        width="30"
                        color="#fff"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass="oval"
                        />)
                      :
                      <button onClick = {login} className='sign_page_btn'>Login to Continue</button>
                    }
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