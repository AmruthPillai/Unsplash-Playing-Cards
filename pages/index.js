import React from "react";
import Head from "next/head";
import styles from "./index.module.css";
import CardBack from "./card/back";
import CardFront from "./card/front";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unsplash Playing Cards</title>
      </Head>

      <div className={styles.cards}>
        <CardFront />
        <CardBack />
      </div>
    </div>
  );
};

export default HomePage;
