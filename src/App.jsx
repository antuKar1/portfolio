import { useState } from "react";
import "./index.css";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Projects from "./components/work/Projects";
import image from "../src/assets/whatsapp (1).png";
import { Link, Outlet } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Root from "./components/layout/Root";
import SidebarMui from "./components/sidebar/SidebarMui";
function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const phoneNumber = "8801705516339"; // replace with your WhatsApp number
  const message =
    "Hello! I visited your portfolio and would like to contact you."; // default message

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (

    <>
    
    <div className="flex flex-col md:flex-row lg:flex-row  bg-[#ffffff]  ">

      <Sidebar></Sidebar>
      <div className="w-full overflow-auto max-h-screen px-6 md:px-20">
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
      <div>
          <Link
            className="shadow-2xl hover:shadow-indigo-500/40"
            onClick={handleWhatsAppClick}
          >
            {" "}
            <img
              src={image}
              className="shadow-2xl hover:shadow-indigo-500/40  w-12 hover:w-14 hover:transition-all fixed z-10 right-8 bottom-8"
              alt=""
            />
          </Link>
        </div>
    </div>
    
    
    </>
    
      
    
  );
}

export default App;
