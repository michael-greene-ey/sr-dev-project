import React from "react";
import { IconTypeInterface } from "../interfaces/IconTypeInterface";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";
import {
  FACEBOOK,
  INSTAGRAM,
  PINTEREST,
  TWITTER,
  YOUTUBE,
} from "../assests/Constants";

const footerIcons: IconTypeInterface[] = [
  { id: 1, website: FACEBOOK, iconCode: faFacebook },
  { id: 2, website: INSTAGRAM, iconCode: faInstagram },
  { id: 3, website: PINTEREST, iconCode: faPinterest },
  { id: 4, website: TWITTER, iconCode: faTwitter },
  { id: 5, website: YOUTUBE, iconCode: faYoutube },
];

const Footer = () => {
  let copyright = String.fromCodePoint(0x00a9);
  return (
    <div className={styles.footerContainer}>
      <div className={styles.topFooterContainer}>
        <div className={styles.logoContainer}>
          <FitnessCenterIcon className={styles.logo} fontSize="large" />
        </div>
        <div className={styles.iconContainer}>
          {footerIcons.map((icon) => {
            return (
              <a
                href={icon.website}
                target="_blank"
                key={icon.id}
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={icon.iconCode}
                  size="2x"
                />
              </a>
            );
          })}
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
          <a>Need Help?</a>
          <a href="#">Help Center</a>
          <a href="#">Email Support</a>
          <a href="#">Live Chat</a>
          <a href="#">FAQs</a>
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
