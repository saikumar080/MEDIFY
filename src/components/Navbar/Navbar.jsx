import styles from "./Navbar.module.css";
import React, { useState } from "react";
import logo from "../../assests/images/medify-Logo.png";
const Navbar=()=>{
    const [open,setOpen]=useState(false);
    return(
        <div className={styles.container}>
            <h3 className={styles.textDisplay}> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</h3>   
                <div className={styles.navbar}>

                    <a href="/"> 
                        <img src={logo} alt="Medify Logo" className={styles.logo} />
                    </a>
                 <div className={`${styles.menu} ${open ? styles.active : ""}`}>
                    <a href="/" className={styles.navLink} onClick={() => setOpen(false)}>Find Doctors</a>
                    <a href="/" className={styles.navLink} onClick={() => setOpen(false)}>Hospitals</a>
                    <a href="/" className={styles.navLink} onClick={() => setOpen(false)}>Medicines</a>
                    <a href="/" className={styles.navLink} onClick={() => setOpen(false)}>Software for Provider</a>
                    <a href="/" className={styles.navLink} onClick={() => setOpen(false)}>Facilities</a>
                </div>
                    <div className={styles.rightSection}>
                        <button className={styles.loginButton}>My Bookings</button>
                    </div>

                     <div className={styles.hamburger} onClick={() => setOpen(!open)}>
                        ☰
                    </div>
                    

                </div>
        </div>
    )
}
export default Navbar;