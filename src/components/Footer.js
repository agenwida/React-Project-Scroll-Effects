import React from "react";
import styles from "./Footer.module.css";

import InstaIcon from "../assets/icons/insta.png";
import FacebookIcon from "../assets/icons/facebook.png";
import LinkedinIcon from "../assets/icons/linkedin.png";

const Footer = () => {
  const footerItems = [
    { src: InstaIcon, label: "Insta Icon", href: "#" },
    { src: FacebookIcon, label: "Facebook Icon", href: "#" },
    { src: LinkedinIcon, label: "LinkedIn", href: "#" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.iconGroup}>
            {footerItems.map(({ src, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={styles.iconLink}
              >
                <img src={src} alt={label} className={styles.localIcon} />
              </a>
            ))}
          </div>

          <p className={styles.middleText}>Lorem ipsum | Lorem ipsum</p>

          <p className={styles.finalCopyright}>© Techwarelab copyrights</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
