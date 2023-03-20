import { motion } from "framer-motion";
import React from "react";
import Logo from "../../public/Logo.svg";

const Navbar = () => {
  return (
    <motion.nav className="navbar">
      <a href="/">
        <div className="logo-main">
          <img src={Logo} alt="Logo" className="logo" />
          <h1 className="logo-text">Bittify</h1>
        </div>
      </a>
      <motion.ul className="nav-ul">
        <li>
          <motion.a href="">Home</motion.a>
        </li>
        <li>
          <motion.a href="">About</motion.a>
        </li>
        <li>
          <motion.a href="">Stocks</motion.a>
        </li>
        <li>
          <motion.a href="">Our Crypto</motion.a>
        </li>
        <li>
          <motion.a href="">BittCards</motion.a>
        </li>
        <li>
          <motion.a href="">Contact</motion.a>
        </li>
      </motion.ul>
      <motion.a href="" className="register-button">
        Register
      </motion.a>
    </motion.nav>
  );
};

export default Navbar;
