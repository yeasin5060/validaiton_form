import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

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
                <NavLink to = "/home">Home</NavLink>
              </li>
              <li>
                <NavLink to = "/about">About</NavLink>
              </li>
              <li>
                <NavLink to = "/service">Service</NavLink>
              </li>
              <li>
                <NavLink to = "/faq">FAQ</NavLink>
              </li>
              <li>
                <NavLink to = "/contact">contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
   </section>
  )
}

export default Navbar