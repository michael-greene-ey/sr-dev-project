import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Navbar.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinkItems = [
  {
    id: 1,
    title: "HOME",
    url: "/",
    cName: "nav-links",
  },
  {
    id: 2,
    title: "HEALTH CONTENT",
    url: "/health-content",
    cName: "nav-links",
  },
  {
    id: 3,
    title: "TO DO's",
    url: "/to-do",
    cName: "nav-links",
  },
  {
    id: 4,
    title: "WORKOUTS",
    url: "/workouts",
    cName: "nav-links",
  },
  {
    id: 5,
    title: "MEAL PLAN",
    url: "/meal-plan",
    cName: "nav-links",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logoAndName}>
          <div className={styles.logoContainer}>
            <FitnessCenterIcon fontSize="large" />
          </div>
          <span className={styles.coName}>Health & Fitness</span>
        </div>
        <div className={styles.navLinks}>
          {navLinkItems.map((link) => {
            return (
              <Link key={link.id} to={link.url}>
                {link.title}
              </Link>
            );
          })}
        </div>
        <div className={styles.hamburgerMenuContainer} onClick={toggleMenu}>
          <div
            className={
              !isOpen ? styles.hamburgerMenuIcon : styles.hamburgerMenuIconOpen
            }
          ></div>
        </div>
        <div className={styles.searchNavInput}>
          <input />
          <SearchIcon className={styles.searchIcon} />
        </div>
      </div>
      <hr className={styles.hr} />
      {isOpen && (
        <div className={styles.dropdown}>
          {navLinkItems.map((link) => {
            return (
              <Link className={styles.dropdownLinks} to={link.url}>
                {link.title}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Navbar;
