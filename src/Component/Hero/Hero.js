import React, { useEffect, useState } from "react";
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
  const [flake, setFlake] = useState(200);
  const handleResize = () => {
    const width = window.innerWidth;
    console.log(width);
    if (width <= 500) {
      setFlake(10);
    } else if (width <= 768) {
      setFlake(50);
    } else if (width <= 1000) {
      setFlake(100);
    } else if (width <= 1300) {
      setFlake(150);
    } else {
      setFlake(200);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={style.hero}>
      <Snowfall snowflakeCount={flake} />
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
          <p>Step into the Realm of Enchantia</p>
        </div>
        <ul className={style.social_list}>
          <li>
            <a href="https://www.linkedin.com/in/harsh6975/" target="__blank">
              <LinkedInIcon className={style.icon} />
            </a>
          </li>
          <li>
            <a href="mailto: harshu1234ashv@gmail.com" target="__blank">
              <EmailIcon className={style.icon} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100037630389435"
              target="__blank"
            >
              <FacebookIcon className={style.icon} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/harsh6975_/" target="__blank">
              <InstagramIcon className={style.icon} />
            </a>
          </li>
          <li>
            <a href="https://github.com/harsh6975" target="__blank">
              <GitHubIcon className={style.icon} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
