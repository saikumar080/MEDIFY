import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assests/images/medify-Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className={styles.topBar}>
        <p>
          The health and well-being of our patients and their health care team
          will always be our priority.
        </p>
      </div>

      {/* Navbar */}
      <nav className={styles.navbar}>

        <Link to="/">
          <img
            src={logo}
            alt="Medify Logo"
            className={styles.logo}
          />
        </Link>

        <div
          className={`${styles.menu} ${
            open ? styles.show : ""
          }`}
        >
          <Link to="/" className={styles.navLink} onClick={() => setOpen(false)}>
            Find Doctors
          </Link>

          <Link to="/" className={styles.navLink} onClick={() => setOpen(false)}>
            Hospitals
          </Link>

          <Link to="/" className={styles.navLink} onClick={() => setOpen(false)}>
            Medicines
          </Link>

          <Link to="/" className={styles.navLink} onClick={() => setOpen(false)}>
            Software for Providers
          </Link>

          <Link to="/" className={styles.navLink} onClick={() => setOpen(false)}>
            Facilities
          </Link>

          <Link
            to="/my-bookings"
            className={styles.bookingBtn}
            onClick={() => setOpen(false)}
          >
            My Bookings
          </Link>
        </div>

        <div
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </div>

      </nav>
    </>
  );
};

export default Navbar;