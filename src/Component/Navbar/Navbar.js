import React from "react";
import { Link as Link1 } from "react-scroll";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-list text-center" activeClassName="navbar-list-active">
        <li>
          <Link1 to="" smooth={true} offset={50} duration={1000}>
            {" "}
            Home
          </Link1>{" "}
        </li>
        <li>
          <Link1 to="" smooth={true} offset={50} duration={1000}>
            {" "}
            About
          </Link1>{" "}
        </li>
        <li>
          <Link1 to="" smooth={true} offset={50} duration={1000}>
            {" "}
            Skills
          </Link1>{" "}
        </li>
        <li>
          <Link1 to="" smooth={true} offset={50} duration={1000}>
            {" "}
            Experience
          </Link1>{" "}
        </li>
        <li>
          <Link1 to="" smooth={true} offset={50} duration={1000}>
            {" "}
            Education
          </Link1>{" "}
        </li>
        <li>
          <Link1 to="" smooth={true} offset={50} duration={1000}>
            {" "}
            Protfolio
          </Link1>{" "}
        </li>
        <li>
          <Link1 to="" smooth={true} offset={50} duration={1000}>
            {" "}
            Contact
          </Link1>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
