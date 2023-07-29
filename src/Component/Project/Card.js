import React from "react";
import styles from "./Card.module.css";
import { Button } from "@mui/material";
import Info from "./Info";
import { useState } from "react";

function Card({ data }) {
  const [info, setInfo] = useState(null);
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
                <p key={index} className={styles.tool}>
                  {tool} {index + 1 !== tools.length ? "/" : ""}
                  &nbsp;
                </p>
              );
            })}
          </div>
        </div>
        <div className={styles.contentBottom}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#db8e35",
              color: "white",
              marginTop: "20px",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#f7ac56",
              },
            }}
            onClick={() => setInfo(data)}
          >
            Learn More
          </Button>
          {info && <Info data={info} setInfo={setInfo} />}
        </div>
      </div>
    </div>
  );
}

export default Card;
