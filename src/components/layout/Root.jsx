import React from "react";
import Home from "../home/Home";
import About from "../about/About";
import Education from "../education/Education";
import Services from "../services/Services";
import Projects from "../work/Projects";
import Contact from "../contact/Contact";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";


const Root = () => {
  return (
    <div className="flex bg-[#ffffff] ">
      <Sidebar></Sidebar>
      <div className="w-full overflow-y-auto max-h-screen px-20">
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="edication">
          <Education />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Root;
