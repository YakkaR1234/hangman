import React from 'react';
import { motion } from 'framer-motion'; // Correct import
import './aboutus.css'; // Import your CSS file

const AboutUs = () => {
  return (
    <div className="aboutus">
        <h2 >About Us</h2>
      <div className="grid-container">
        <motion.div
          className="grid-item grid-1"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          Grid 1
        </motion.div>

        <motion.div
          className="grid-item grid-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          Grid 2
        </motion.div>

        <motion.div
          className="grid-item grid-3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          Grid 3
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
