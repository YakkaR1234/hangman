import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Main/Mainpage';
import Login from './pages/Login/Login';
import Landingpage from './pages/Landing_page/Landingpage';
import AboutUs from './pages/Aboutus/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login/>} />
        <Route path="/game" element={<Mainpage />} />
        <Route path="/landing" element={<Landingpage/>} />

        <Route path="/aboutus" element={<AboutUs/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
