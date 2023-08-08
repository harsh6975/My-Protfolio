import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styles from "./ArrowToTop.module.css";
import { Link as ScrollLink } from "react-scroll";

function ArrowToTop() {
  return (
    <ScrollLink
      to="Hero"
      smooth={true}
      duration={500}
    >
      <div className={styles.arrow}>
        <ArrowUpwardIcon className={styles.icon} />
      </div>
    </ScrollLink>
  );
}

export default ArrowToTop;
