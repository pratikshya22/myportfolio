import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import About from "./Pages/Home/AboutMe";
import Portfolio from "./Pages/Home/MyPortfolio";
import Contact from "./Pages/Home/ContactMe";
import Education from "./Pages/Home/Education";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route> 
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/Education" element={<Education />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
