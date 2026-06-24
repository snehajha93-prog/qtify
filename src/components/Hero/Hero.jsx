import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero_headphones.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textContainer}>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over Thousand Podcast Episodes</h1>
        </div>

        <img
          src={heroImage}
          alt="Headphones"
          className={styles.heroImage}
        />
      </div>
    </div>
  );
}

export default Hero;