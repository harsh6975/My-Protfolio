import React from "react";
import Feature from "./Feature";
import style from "./About.module.css";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import DevicesIcon from "@mui/icons-material/Devices";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import GppGoodIcon from "@mui/icons-material/GppGood";
import Animation from "../../utils/SideAnimation/Animation";
import FlippableCard from "../../utils/FlippableCard/FlippableCard";

const features = [
  {
    name: "User - Centric Design",
    content: "Intuitive experiences for seamless engagement.",
    icon: <EmojiObjectsIcon style={{ fontSize: "40px", color: "white" }} />,
  },

  {
    name: "Optimized Performance",
    content: "Blazing-fast load times for instant interactions.",
    icon: <RocketLaunchIcon style={{ fontSize: "40px", color: "white" }} />,
  },

  {
    name: "Responsiveness",
    content: "Delightful experience on any device.",
    icon: <DevicesIcon style={{ fontSize: "40px", color: "white" }} />,
  },

  {
    name: "Security and Privacy",
    content: "Ironclad protection for your data.",
    icon: <GppGoodIcon style={{ fontSize: "40px", color: "white" }} />,
  },
];

function About() {
  return (
    <div className={style.container}>
      <Animation direction="left" duration="08">
        <h1 className={style.about}>ABOUT Me</h1>
      </Animation>
      <Animation direction="left" duration="1">
        <div className={style.underLine}></div>
      </Animation>

      <div className={style.feature}>
        {features.map((feature, index) => {
          return <Feature feature={feature} />;
        })}
      </div>
      <div className={style.details}>
        <FlippableCard />{" "}
        <div className={style.skills}>{/* <FlippableCard /> */}</div>
      </div>
    </div>
  );
}

export default About;
