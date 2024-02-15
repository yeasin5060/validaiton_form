import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { MdOutlineLogout } from "react-icons/md";
import { AiTwotoneMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { loginuserdata } from '../../slice/userslice';

const Navbar = () => {
  const alldata = useSelector((state) => state.alldata.value)
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  let handellogout = ()=>{
    signOut(auth).then(() => {
      localStorage.removeItem("user")
      dispatch(loginuserdata(null))
      navigate("/sign")
    });
  }
  return (
   <section id='navbar'>
      <div className='container'>
        <div className='navbar_wrapper'>
         <div className='navbar_wrapper_profile_name_and_profile_image_box'>
            <div className='navbar_wrapper_logo_box'>
                <img className = "profile_iamge" src={alldata && alldata.photoURL} alt="not found"/>
            </div>
            <h4 className='navbar_wrapper_profile_name'>{alldata && alldata.displayName}</h4>
         </div>
          <div className='navbar_wrapper_link_box'>
            <ul className='navbar_wrapper_link'>
              <li>
                <NavLink className="page_link" to = "home"><GoHome /></NavLink>
              </li>
              <li>
                <NavLink className="page_link" to = "about"><AiTwotoneMessage /></NavLink>
              </li>
              <li>
                <NavLink className="page_link" to = "service"><IoMdNotificationsOutline /></NavLink>
              </li>
              <li>
                <NavLink className="page_link" to = "faq"><IoSettingsOutline /></NavLink>
              </li>
            </ul>
            <div className='logout_btn_box'>
              <button onClick={handellogout} className="logout_btn"><MdOutlineLogout /></button>
            </div>
          </div>
        </div>
      </div>
   </section>
  )
}

export default Navbar