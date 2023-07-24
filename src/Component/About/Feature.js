import React from "react";
import style from "./Feature.module.css";
function Feature({ feature }) {
  return (
    <div className={style.container}>
      <div className={style.hexacontainer}>
        <svg
          className={style.hexagon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polygon points="50,0 100,25 100,75 50,100 0,75 0,25">
            <foreignObject x="20" y="20" width="60" height="60"></foreignObject>
          </polygon>
        </svg>
        <div className={style.icon}> {feature.icon}</div>
      </div>
      <h2>{feature.name}</h2>
      <h5>{feature.content} </h5>
    </div>
  );
}

export default Feature;
