import React, { useState, useEffect } from "react";
import styles from "./front.module.css";

const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "K", "Q", "J"];
const suits = ["Spade", "Club", "Heart", "Diamond"];

const CardFront = () => {
  const [value, setValue] = useState(null);
  const [suit, setSuit] = useState(null);

  useEffect(() => {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    setSuit(randomSuit);
    const randomValue = values[Math.floor(Math.random() * values.length)];
    setValue(randomValue);
  }, []);

  return (
    value &&
    suit && (
      <div
        className={`card ${styles.container} ${
          (suit === "Heart" || suit === "Diamond") && styles.red
        }`}
      >
        <div>
          <div className={styles.face}>
            <h1>{value}</h1>
            <img src={`/icons/${suit}.svg`} alt={suit} />
          </div>

          <img src="/unsplash_logo.svg" alt="Unsplash Logo" />
        </div>
        <img src={`/icons/${suit}.svg`} alt={suit} />
        <div>
          <div className={styles.face}>
            <h1>{value}</h1>
            <img src={`/icons/${suit}.svg`} alt={suit} />
          </div>

          <img src="/unsplash_logo.svg" alt="Unsplash Logo" />
        </div>
      </div>
    )
  );
};

export default CardFront;
