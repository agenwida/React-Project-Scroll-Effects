import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div
        className={`${styles.backgroundWrapper} ${
          isLoaded ? styles.visible : ""
        }`}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/hero-background.png"}
          alt="Abstract background with purple concentric arcs and black fade"
          className={styles.bgImg}
        />
      </div>

      <div className={styles.content}>
        <h1 className={`${styles.title} ${isLoaded ? styles.visible : ""}`}>
          <span>Smarter Solutions</span>
          <br />
          <span>Powered by AI</span>
        </h1>

        <p className={`${styles.subtitle} ${isLoaded ? styles.visible : ""}`}>
          Streamline operations, reduce costs, and scale effortlessly with
          <br />
          our AI-driven tools.
        </p>

        <button className={`${styles.cta} ${isLoaded ? styles.visible : ""}`}>
          Start A Project
          <ArrowRight className={styles.arrow} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
