import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import styles from "./ScrollTextSection.module.css";

const ScrollTextSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.textItem} scroll-reveal-item`}>
          <h2 className={styles.heading}>
            <span className={styles.gradient}>
              {" "}
              We build cutting-edge AI solutions that help businesses automate{" "}
            </span>
            processes, gain insights, and deliver smarter experiences. Whether
            you're looking to streamline operations, personalize customer
            journeys, or leverage predictive analytics, our AI-powered tools are
            designed to drive growth and innovation.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ScrollTextSection;
