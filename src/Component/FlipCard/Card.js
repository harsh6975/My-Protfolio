import styles from "./Card.module.css";
import mypic from "../../Images/mypic3.jpg";
import DiamondIcon from "@mui/icons-material/Diamond";

function Card({ onMouseEnter, onMouseLeave, onClick }) {
  return (
    <div
      className={styles.card}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div className={styles.cardfront}>
        <img src={mypic} alt="mypic"></img>
      </div>
      <div className={styles.cardback}>
        <h2>Harsh Sinha</h2>
        <h4>BTech IIT GUWAHATI ( 2019 - 2023 )</h4>
        <p>
          Hello there! I'm a highly organized and hard-working B-Tech graduate
          from IIT Guwahati. With a passion for practical problem-solving and a
          dedication to excellence, I am actively pursuing a responsible
          position where I can leverage my training and skills to contribute
          significantly to a company's success.
          <br /> Let's talk and explore how I can add value to your
          organization.
        </p>
        <h3>
          <DiamondIcon /> Top Skills
        </h3>
        <h5>NodeJs • React.js • REST APIs • MongoDB • C++</h5>
      </div>
    </div>
  );
}

export default Card;
