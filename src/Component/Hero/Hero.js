import React from "react";
import Typed from "react-typed";
import Snowfall from "react-snowfall";
// import SnowStorm from "react-snowstorm";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import style from "./Hero.module.css";
import herobg from "../../Images/hero.jpg";

function Hero() {
  return (
    <div className={style.hero}>
      <Snowfall snowflakeCount={100} />
      <img src={herobg} alt="herobg" className={style.herobg}></img>
      <div className={style.overlay}></div>
      <div className={`${style.content}`}>
        <div className={style.name}>
          <Typed
            strings={["I'm Harsh Sinha", "I'm a Software Developer"]}
            typeSpeed={70}
            backSpeed={80}
            loop
          />
        </div>
        <div className={style.slogan}>
          <p>Build your own world</p>
        </div>
        <ul className={style.social_list}>
          <li>
            <a href="https://www.linkedin.com/in/harsh-sinha-195328197/">
              <LinkedInIcon className={style.icon} />
            </a>
          </li>
          <li>
            <a href="mailto: harshu1234ashv@gmail.com">
              <EmailIcon className={style.icon} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100037630389435">
              <FacebookIcon className={style.icon} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/harshsinha672/">
              <InstagramIcon className={style.icon} />
            </a>
          </li>
          <li>
            <a href="https://github.com/harsh6975">
              <GitHubIcon className={style.icon} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
