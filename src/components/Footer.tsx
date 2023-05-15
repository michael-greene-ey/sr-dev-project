import React from "react";
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
import { Link } from "react-router-dom";

// {
//   id: 1,
//   iconName: "Facebook",
//   url: "www.facebook.com",
// },
// {
//   id: 2,
//   iconName: "faInstagram",
//   url: "www.facebook.com",
// },
// {
//   id: 3,
//   iconName: "faPinterest",
//   url: "www.facebook.com",
// },
// {
//   id: 4,
//   iconName: "faTwitter",
//   url: "www.facebook.com",
// },
// {
//   id: 5,
//   iconName: "faYoutube",
//   url: "www.facebook.com",
// },
//];

const footerIcons = [
  {
    id: 1,
    iconName: "facebook",
    iconCode: faFacebook,
  },
  { id: 2, iconName: "Instagram", iconCode: faInstagram },
  { id: 3, iconName: "Pinterest", iconCode: faPinterest },
  { id: 4, iconName: "Twitter", iconCode: faTwitter },
  { id: 5, iconName: "Youtube", iconCode: faYoutube },
];

const Footer = () => {
  let copyright = String.fromCodePoint(0x00a9);
  return (
    <div className={styles.footerContainer}>
      <div className={styles.topFooterContainer}>
        <div className={styles.logoContainer}>
          <FitnessCenterIcon className={styles.logo} />
        </div>
        <div className={styles.iconContainer}>
          {footerIcons.map((icon) => {
            return (
              <a href={`https://www.${icon.iconName}.com`} target="_blank">
                <FontAwesomeIcon icon={icon.iconCode} size="lg" />
              </a>
            );
          })}
        </div>

        {/* <a href="http://www.facebook.com" target="_blank">
            <span>
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </span>
          </a>
          <a href="">
            <span>
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </span>
          </a>
          <a href="">
            <span>
              <FontAwesomeIcon icon={faPinterest} size="lg" />
            </span>
          </a>
          <a href="">
            <span>
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </span>
          </a>
          <a href="">
            <span>
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </span>
          </a> */}
        {/* </div> */}
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
