import React from 'react';
import { motion } from 'framer-motion';
import './landingstyle.css';
import hangman from '../../assets/hangman.png';

const Landingpage = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <div className="image-container">
          <motion.img 
            src={hangman} 
            alt="Landing" 
            className="image" 
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </div>
        <div className="text-container">
          <h1 className="title">Hangman</h1>
        </div>
        <div className="landing-button">
          <button className="button">Click to play</button>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
