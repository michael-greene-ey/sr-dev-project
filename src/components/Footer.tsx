import React from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./Footer.module.css";

const Footer = () => {
  let copyright = String.fromCodePoint(0x00a9);
  return (
    <div>
      <div className={styles.topFooterContainer}>
        <div className={styles.logoContainer}>
          <FitnessCenterIcon className={styles.logo} />
        </div>
        <div className={styles.iconContainer}>
          <span>
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </span>
          <span>
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </span>
          <span>
            <FontAwesomeIcon icon={faPinterest} size="lg" />
          </span>
          <span>
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </span>
          <span>
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </span>
        </div>
      </div>
      <div className={styles.bottomFooterContainer}>
        <div className={styles.emailInbox}>
          <div className={styles.emailInboxText}>
            <div>GET THE LATEST NEWS SENT </div>
            <div>RIGHT TO YOUR INBOX!</div>
          </div>
          <div className={styles.emailBox}>
            <input></input>
            <button>OK</button>
          </div>
        </div>
        <div className={styles.bottomFooterLinks}>
          <span>
            <a>Need Help?</a>

            <a href="#">Help Center</a>
            <a href="#">Email Support</a>
            <a href="#">Live Chat</a>
            <a href="#">FAQs</a>
          </span>
        </div>
        <div className={styles.bottomFooterLegal}>
          <a href="#">Careers</a>
          <a href="#">About Us</a>
          <a href="#">Privacy Settings</a>
          <a href="#">Advertise With Us</a>
          <a href="#">Site Map</a>
        </div>
      </div>

      <hr className={styles.hr} />
      <div className={styles.copyright}>
        {copyright} 2023 Heath & Fitness, All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
