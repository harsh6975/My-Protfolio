import React from "react";
import Feature from "./Feature";
import style from "./About.module.css";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import DevicesIcon from "@mui/icons-material/Devices";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import GppGoodIcon from "@mui/icons-material/GppGood";
import Animation from "../../utils/SideAnimation/Animation";
import FlippableCard from "../../utils/FlippableCard/FlippableCard";
import react from "../../Images/react.png";
import node from "../../Images/node.png";
import next from "../../Images/next.png";
import c from "../../Images/c++.png";
import express from "../../Images/express.png";
import html from "../../Images/html.png";
import css from "../../Images/css.png";
import javascript from "../../Images/javascript.png";
import typeScript from "../../Images/typescript.png";
import bootstrap from "../../Images/Bootstrap.png";
import git from "../../Images/git.png";
import github from "../../Images/github.png";
import aws from "../../Images/aws.png";
import firebase from "../../Images/firebase.png";
import mongodb from "../../Images/mongodb.png";
import sql from "../../Images/sql.png";

import Skills from "./Skills";
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

const skills = [
  { label: "C++", icon: c },
  { label: "ReactJs", icon: react },
  { label: "ExpressJs", icon: express },
  { label: "JavaScript", icon: javascript },
  { label: "HTML", icon: html },
  { label: "CSS", icon: css },
  { label: "NextJS", icon: next },
  { label: "NodeJs", icon: node },
  { label: "TypeScript", icon: typeScript },
  { label: "Bootstrap", icon: bootstrap },
  { label: "MongoDB", icon: mongodb },
  { label: "Firebase", icon: firebase },
  { label: "MYSQL", icon: sql },
  { label: "React Native", icon: react },
  { label: "AWS- EC2 | S3", icon: aws },
  { label: "Git", icon: git },
  { label: "Github", icon: github },
];

function About() {
  return (
    <div className={style.container}>
      <Animation direction="left" duration="08">
        <h1 className={style.about}>ABOUT</h1>
      </Animation>
      <Animation direction="left" duration="1">
        <div className={style.underLine}></div>
      </Animation>
      <div className={style.contentBox}>
        <div className={style.feature}>
          {features.map((feature, index) => {
            return <Feature feature={feature} />;
          })}
        </div>
        <div className={style.details}>
          <div className={style.profile}>
            <FlippableCard />
          </div>
          <div className={style.skills}>
            {skills.map((skill) => {
              return <Skills data={skill} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
