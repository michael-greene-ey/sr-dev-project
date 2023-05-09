import React from "react";
import Navbar from "./Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Navbar />
    </div>
  );
};

export default Header;
