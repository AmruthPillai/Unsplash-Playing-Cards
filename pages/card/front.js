import React, { useState, useEffect } from "react";
import styles from "./front.module.css";

const suits = ["Spade", "Club", "Heart", "Diamond"];

const CardFront = () => {
  const [suit, setSuit] = useState(null);

  useEffect(() => {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    setSuit(randomSuit);
  }, []);

  return (
    suit && (
      <div
        className={`card ${styles.container} ${
          (suit === "Heart" || suit === "Diamond") && styles.red
        }`}
      >
        <div>
          <div className={styles.face}>
            <h1>K</h1>
            <img src={`/icons/${suit}.svg`} alt={suit} />
          </div>

          <img src="/unsplash_logo.svg" alt="Unsplash Logo" />
        </div>
        <img src={`/icons/${suit}.svg`} alt={suit} />
        <div>
          <div className={styles.face}>
            <h1>K</h1>
            <img src={`/icons/${suit}.svg`} alt={suit} />
          </div>

          <img src="/unsplash_logo.svg" alt="Unsplash Logo" />
        </div>
      </div>
    )
  );
};

export default CardFront;
