import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { MdOutlineLogout } from "react-icons/md";
import { AiTwotoneMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
   <section id='navbar'>
      <div className='container'>
        <div className='navbar_wrapper'>
          <div className='navbar_wrapper_logo_box'>

          </div>
          <div className='navbar_wrapper_link_box'>
            <ul className='navbar_wrapper_link'>
              <li>
                <NavLink className="page_link" to = "/home"><GoHome /></NavLink>
              </li>
              <li>
                <NavLink className="page_link" to = "/about"><AiTwotoneMessage /></NavLink>
              </li>
              <li>
                <NavLink className="page_link" to = "/service"><IoMdNotificationsOutline /></NavLink>
              </li>
              <li>
                <NavLink className="page_link" to = "/faq"><IoSettingsOutline /></NavLink>
              </li>
            </ul>
            <div className='logout_btn_box'>
              <button className="logout_btn"><MdOutlineLogout /></button>
            </div>
          </div>
        </div>
      </div>
   </section>
  )
}

export default Navbar