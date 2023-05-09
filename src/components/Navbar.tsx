import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Navbar.module.css";
import React from "react";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoAndName}>
        <span className={styles.logoContainer}>
          <FitnessCenterIcon className={styles.logo} />
        </span>
        <span className={styles.coName}>Health & Fitness</span>
      </div>
      <div className={styles.navLinks}>
        <span>HOME</span>
        <span>HEALTH CONTENT</span>
        <span>TO DO's</span>
        <span>WORKOUT</span>
        <span>MEAL PLAN</span>
      </div>
      <div className={styles.searchNavInput}>
        <input></input>
        <SearchIcon className={styles.searchIcon} />
      </div>
    </div>
  );
};

export default Navbar;
