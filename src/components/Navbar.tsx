import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Navbar.module.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoAndName}>
        <span className={styles.logoContainer}>
          <FitnessCenterIcon className={styles.logo} fontSize="large" />
        </span>
        <span className={styles.coName}>Health & Fitness</span>
      </div>
      <div className={styles.navLinks}>
        <Link to="/">HOME</Link>
        <Link to="/health-content">HEALTH CONTENT</Link>
        <Link to="/to-do">TO DO's</Link>
        <Link to="/workouts">WORKOUT</Link>
        <Link to="/meal-plan">MEAL PLAN</Link>
      </div>
      <div className={styles.searchNavInput}>
        <input></input>
        <SearchIcon className={styles.searchIcon} />
      </div>
    </div>
  );
};

export default Navbar;
