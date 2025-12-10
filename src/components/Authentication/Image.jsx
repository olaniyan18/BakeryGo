/** @format */

import React from "react";
import image from "../../assets/Bakery.jpg";
import styles from "./style.module.css";

export default function Image() {
  return (
    <div className={styles.image}>
      <img src={image} alt='' />
    </div>
  );
}
