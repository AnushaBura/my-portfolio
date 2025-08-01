import React from "react";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./styles/main.css";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="sm:block min-h-screen bg-[#232533] xl:px-20">
      {/* Navbar */}
      <Navbar />
      <main>
        <Routes>        
      <Route path="/"  element={<Hero/>} />
      <Route path="/skills"  element={<Skills/>}/>
      <Route path="/contact"  element={<Contact/>}/>
      <Route path="/projects"  element={<Projects/>}/>
      <Route path="/education"  element={<Education/>}/>
      <Route path="/projects"  element={<Projects/>}/>
    </Routes>
      </main>
    </div>
  );
};

export default App;

