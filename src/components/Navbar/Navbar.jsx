import React from 'react'
import "./NavBar.css"
import logo from '../../assests/logo.jpg'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
        <h3 className='top-bar'>The health and well-being of our patients and their health care will always be our priority, so we follow the best practice for cleanliness.</h3>
        <div className='navbar'>
            <Link to="/" className='logo-link'>
                <img src={logo} alt="Medify Logo" className="logo" />
            </Link>
           <div className='nav-links'>
                <Link to="/" className='nav-item'>
                    Find Doctors
                </Link>
                <Link to="/" className='nav-item'>
                    Hospitals
                </Link>
                <Link to="/" className='nav-item'>
                  Surgeries
                </Link>
                <Link to="/" className='nav-item'>
                    Software for Provider
                </Link>
                <Link to="/my-bookings" className='nav-item'>
                    <button className='booking-btn'>My Bookings</button>
                </Link>
           </div>
        </div>
    </>
  )
}
export default NavBar