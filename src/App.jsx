import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Mainpage from "./pages/Main/Mainpage";
import Login from "./pages/Login/Login";
import Landingpage from "./pages/Landing_page/Landingpage";
import AboutUs from "./pages/Aboutus/AboutUs";

function App() {
  const [userName, setUserName] = useState(""); // Define the userName state here

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="/landing" element={<Landingpage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        
        {/* Pass setUserName to Login component */}
        <Route path="/login" element={<Login setUserName={setUserName} />} />

        {/* Pass userName to Mainpage component */}
        <Route path="/game" element={<Mainpage userName={userName} />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
