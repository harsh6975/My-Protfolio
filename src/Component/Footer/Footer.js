import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.column}>
        <a href="https://www.linkedin.com/in/harsh6975/" target="__blank">
          <LinkedInIcon className={styles.icon} />
        </a>

        <a href="mailto: harshu1234ashv@gmail.com" target="__blank">
          <EmailIcon className={styles.icon} />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100037630389435"
          target="__blank"
        >
          <FacebookIcon className={styles.icon} />
        </a>

        <a href="https://www.instagram.com/harsh6975_/" target="__blank">
          <InstagramIcon className={styles.icon} />
        </a>

        <a href="https://github.com/harsh6975" target="__blank">
          <GitHubIcon className={styles.icon} />
        </a>
      </div>
      <div className={styles.column}>
        Harsh Sinha &nbsp; <CopyrightIcon />
        &nbsp; {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default Footer;
