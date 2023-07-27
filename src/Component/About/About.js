import React from "react";
import Feature from "./Feature";
import style from "./About.module.css";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import DevicesIcon from "@mui/icons-material/Devices";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import GppGoodIcon from "@mui/icons-material/GppGood";
import Animation from "../../utils/SideAnimation/Animation";
import FlippableCard from "../../utils/FlippableCard/FlippableCard";
import LineAnimation from "../../utils/LineAnimation/Animation";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
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
  { label: "C++", icon: "C++", percentage: "90" },
  { label: "ReactJs", icon: <RiReactjsFill />, percentage: "80" },
  { label: "NodeJs", icon: <IoLogoNodejs />, percentage: "80" },
  { label: "MongoDB", icon: <DiMongodb />, percentage: "70" },
  { label: "JavaScript", icon: <TbBrandJavascript />, percentage: "80" },
  { label: "TypeScript", icon: <TbBrandTypescript />, percentage: "70" },
  { label: "HTML", icon: <AiFillHtml5 />, percentage: "90" },
  { label: "CSS", icon: <BiLogoCss3 />, percentage: "85" },
  { label: "React Native", icon: <TbBrandReactNative />, percentage: "60" },
  { label: "NextJS", icon: <TbBrandNextjs />, percentage: "55" },
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
        <div className={style.profile}>
          <FlippableCard />
        </div>
        <div className={style.skills}>
          {skills.map((skill) => {
            return <LineAnimation data={skill} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
