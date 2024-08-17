import React from "react";
import styles from "./Navbar.module.css";
const NavBar = ({fireBase}) => {
  return (
    <nav className={styles.nav}>
      <img src={fireBase} alt="" />
      <h1>FireBase Contact App</h1>
    </nav>
  );
};

export default NavBar;
