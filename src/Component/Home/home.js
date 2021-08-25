import React from "react";
import Typed from "react-typed";
import Navbar from "../Navbar/Navbar";
import Snowfall from "react-snowfall";
import SnowStorm from "react-snowstorm";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from '@material-ui/icons/Email';
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Snowfall snowflakeCount={200} />
      <SnowStorm flakesMaxActive={200} />
      <Navbar />
      <div className="name-social-container text-center">
        <div className="name">
          <Typed
            strings={["I'm Harsh Sinha", "I'm a Web Developer"]}
            typeSpeed={70}
            backSpeed={80}
            loop
          />
        </div>
        <div className="slogan">
          <p>Peachuuuu btao kya dalu</p>
        </div>
        <ul className="social-list">
          <li>
            <a href="https://www.linkedin.com/in/harsh-sinha-195328197/">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a  href = "mailto: harshu1234ashv@gmail.com">
              <EmailIcon />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100037630389435">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/harshsinha672/">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://github.com/harsh6975">
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
