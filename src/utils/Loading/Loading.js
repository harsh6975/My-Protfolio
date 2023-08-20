import React from "react";
import loading from "../../Images/loading.gif";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loading}>
      <img src={loading} className={styles.img} alt="loading"></img>
    </div>
  );
}

export default Loading;
