import React, { useState } from "react";
import "./Navbar.scss";

import closeIcon from "../../assets/closeIcon.png";

import { HiMenuAlt4 } from "react-icons/hi";

import { motion } from "framer-motion";
import logo from "../../assets/vLogo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home">
          <img src={logo} alt="logo" />
        </a>
      </div>

      {/* Desktop navbar */}

      <ul className="app__navbar-links">
        {[
          "home",
          "work",
          "transport",
          "events",
          "accomodation",
          "activities",
          "opportunities",
          // "menu",
          // "help",
          "contact",
        ].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Mobile navbar */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          // please refer to framer motion documentation to better understand the following
          <motion.div
            whileInView={{ x: [150, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <img
              src={closeIcon}
              width="30px"
              alt="close"
              onClick={() => setToggle(false)}
              style={{ cursor: "pointer" }}
            />

            {[
              "home",
              "work",
              "transport",
              "events",
              "accomodation",
              "activities",
              "opportunities",
              // "menu",
              // "help",
              "contact",
            ].map((item) => (
              <ul key={item}>
                <li key={{ item }}>
                  <a onClick={() => setToggle(false)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              </ul>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
