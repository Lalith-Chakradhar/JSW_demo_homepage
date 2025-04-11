import React from 'react'
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
        <div className={styles.navHeading}>JSW One Finance Limited</div>
        <div className={styles.buttonContainer}>
            <button className={styles.noStyleButton}>Home</button>
            <button className={styles.noStyleButton}>Contact us</button>
            <button className={styles.loginButton}>Login</button>
        </div>
    </nav>
  )
}

export default Navbar;