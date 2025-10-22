import React, { useState } from "react";
import styles from "./MarqueeSection.module.css";

const MarqueeSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  const logos = [
    { name: "", icon: "/images/marquee/logo1.png" },
    { name: "", icon: "/images/marquee/logo2.png" },
    { name: "", icon: "/images/marquee/logo3.png" },
    { name: "", icon: "/images/marquee/logo1.png" },
    { name: "", icon: "/images/marquee/logo2.png" },
    { name: "", icon: "/images/marquee/logo3.png" },
    { name: "", icon: "/images/marquee/logo1.png" },
    { name: "", icon: "/images/marquee/logo2.png" },
  ];

  return (
    <section className={styles.section}>
      <div
        className={`${styles.marqueeContainer} ${
          isPaused ? styles.paused : ""
        }`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={styles.marqueeContent}>
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className={styles.marqueeItem}>
              <img
                src={process.env.PUBLIC_URL + logo.icon}
                alt={logo.name}
                className={styles.logoIcon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
