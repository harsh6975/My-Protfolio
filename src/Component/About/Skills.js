import React from "react";
import styles from "./Skill.module.css";
import Animation from "../../utils/SideAnimation/Animation";

function Skills({ data }) {
  return (
    <Animation direction={"right"} duration={"1"}>
      <div className={styles.container}>
        <img className={styles.image} src={data.icon} alt={data.label}></img>
        <p className={styles.label}>{data.label}</p>
      </div>
    </Animation>
  );
}

export default Skills;
