import React from "react";
import { motion } from "framer-motion";
import "./aboutus.css";
import { Navigate, useNavigate } from "react-router-dom";



const AboutUs = () => {

  const navigate=useNavigate();

  const handleClick=()=>{
    navigate('/login')
  }

  return (
    <div className="aboutus">
      <div className="grid-container">
        <motion.div
          className="grid-item grid-1"
          initial={{ opacity: 0, scale: 0.5, y: -50 }} // Start higher
          animate={{ opacity: 1, scale: 1, y: 0 }} // Move down
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 },
          }}
        >
          <div className="grid-1-content">
            <h1>Lupin</h1>
            <p>
              Lupin is a private investigator and an expert in his industry.
              Unfortunately, the mafia lord known as "Napolio" falsely accused
              Lupin of committing a murder.<br></br> James was taken into
              custody by the police and given a hanging death sentence. However,
              on the day of his execution, his best buddy devised a scheme to
              spare him. Thus, you belong to one of those teams. Hacking their
              system and opening the prison cells is your job.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid-item grid-2"
          initial={{ opacity: 0, scale: 0.5, y: -50 }} // Start higher
          animate={{ opacity: 1, scale: 1, y: 0 }} // Move down
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 },
          }}
        >
          <div className="grid-2-content">
            <h2>How to Save Lupin</h2>
            <p>
              There are various questions that must be answered in order to
              breach their security system. This has to do with language. After
              being provided a description, you must identify the specific word
              that goes with it.<br></br> The system will immediately hang Lupin
              if you provide the incorrect response. Additionally, there is a
              time constraint; you must locate the code before the allotted time
              has passed.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid-item grid-3"
          initial={{ opacity: 0, scale: 0.5, y: -50 }} // Start higher
          animate={{ opacity: 1, scale: 1, y: 0 }} // Move down
          transition={{
            duration: 0.9,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 },
          }}
        >
          <div className="grid-3-content">
            <p>
              We can extend the time if you need one more opportunity after the
              game has ended. There is another way to do it.
              <br></br> How can I get beyond that? This is your moment to figure
              things out on your own.
            </p>
          </div>
        </motion.div>
        <div className="button-container">
          <button className="about-btn" onClick={handleClick}>Play now</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
