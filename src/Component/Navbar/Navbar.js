import React from "react";
import { Link as Link1 } from "react-scroll";
import style from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={style.navbar}>
      <ul className={style.navbar_list}>
        <li>
          <Link1 to="Home" smooth={true} offset={50} duration={1000}>
            Home
          </Link1>
        </li>
        <li>
          <Link1 to="About" smooth={true} offset={50} duration={1000}>
            About
          </Link1>
        </li>
        <li>
          <Link1 to="" smooth={true} offset={50} duration={1000}>
            Skills
          </Link1>
        </li>
        <li>
          <Link1 to="" smooth={true} offset={50} duration={1000}>
            Experience
          </Link1>
        </li>
        {/* <li>
          <Link1 to="" smooth={true} offset={50} duration={1000}>
            
            Education
          </Link1>
        </li> */}
        <li>
          <Link1 to="" smooth={true} offset={50} duration={1000}>
            Protfolio
          </Link1>
        </li>
        <li>
          <Link1 to="" smooth={true} offset={50} duration={1000}>
            Contact
          </Link1>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
