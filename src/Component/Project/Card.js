// Card.js

import React from "react";
import styles from "./Card.module.css";
import { Button } from "antd";

function Card({ data }) {
  const { name, tools, contentPosition } = data;

  return (
    <div className={styles.card}>
      <img src={data.banner} alt="banner" className={styles.banner}></img>
      <div className={`${styles.content} ${styles[contentPosition]}`}>
        <div className={styles.contentTop}>
          <h1> {name}</h1>
          <div className={styles.tools}>
            {tools.map((tool, index) => {
              return (
                <p key={index}>
                  {tool} {index + 1 !== tools.length ? "/" : ""}
                  &nbsp;
                </p>
              );
            })}
          </div>
        </div>
        <div className={styles.contentBottom}>
          <Button>Learn More </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
