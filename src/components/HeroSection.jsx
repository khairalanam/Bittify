import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
  return (
    <section className="main-section">
      <motion.h1>Ease your Crypto With Bittify</motion.h1>
      <motion.h3>
        Convert your cryptocurrency into any currency <br /> by using Bittify
      </motion.h3>
      <motion.div className="hero-buttons">
        <motion.a href="" className="register-button">
          Register
        </motion.a>
        <motion.a href="" className="learn-more">
          Learn More
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
