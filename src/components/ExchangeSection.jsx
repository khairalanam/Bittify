import { motion } from "framer-motion";
import React from "react";
import { AiFillCodeSandboxCircle } from "react-icons/ai";

const ExchangeSection = () => {
  return (
    <section className="exchange-section">
      <motion.h2>Exchange Made Simple</motion.h2>
      <ul className="exchange-ul">
        <li>
          <AiFillCodeSandboxCircle className="ul-icon" /> Lorem ipsum dolor sit
          amet <br /> consectetur adipisicing elit. Earum, eaque.
        </li>
        <li>
          <AiFillCodeSandboxCircle className="ul-icon" /> Lorem ipsum dolor sit
          amet, <br /> consectetur adipisicing elit. Quis, quo.
        </li>
        <li>
          <AiFillCodeSandboxCircle className="ul-icon" /> Lorem ipsum dolor, sit
          amet <br /> consectetur adipisicing elit. Iste, veritatis.
        </li>
        <li>
          <AiFillCodeSandboxCircle className="ul-icon" /> Lorem ipsum dolor sit
          amet <br /> consectetur adipisicing elit. Repudiandae, eaque!
        </li>
      </ul>
    </section>
  );
};

export default ExchangeSection;
