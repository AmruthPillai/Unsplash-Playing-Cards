import fetch from "node-fetch";
import React, { useState, useEffect } from "react";
import styles from "./back.module.css";

const CardBack = () => {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    fetch("/api/getUnsplashPhoto")
      .then((res) => res.json())
      .then(setPhoto);
  }, []);

  return (
    photo && (
      <div className={`card ${styles.container}`}>
        <img src={photo.urls.regular} alt="Unsplash Background Image" />

        <div className={styles.credit}>
          <img src={photo.user.profile_image.small} alt="Profile Photo" />
          <div>
            <h1>{photo.user.name}</h1>
            <h2>@{photo.user.username}</h2>
          </div>
        </div>
      </div>
    )
  );
};

export default CardBack;
