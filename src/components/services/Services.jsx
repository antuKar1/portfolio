import React from "react";
import ui from "../../assets/ui.png";
import arrow from "../../assets/right.png";
import code from "../../assets/programming.png";
import seo from "../../assets/seo.png";
import { motion } from "framer-motion";
import Title from "../shared/Title";
const Services = () => {
  return (
    <>
    <Title title="My Services"></Title>
    <div
      
      className=" flex justify-center md:mt-20 lg:mt-20 "
    >
    
      <div className="grid  md:grid-cols-1 lg:grid-cols-3 w-full gap-10    ">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
        
          className="card card-compact  bg-[#03AED2] shadow-xl p-10"
        >
          <figure>
            <img className="w-24 h-auto" src={ui} alt="Shoes" />
          </figure>
          <div className="card-body justify-center  ">
            <h2 className="text-2xl font-bold text-center text-zinc-800">
              UI/UX Design
            </h2>
            <ul className="mx-auto text-gray-900 text-lg  flex flex-col gap-2  font-semibold">
              <li className="flex items-center gap-6">
                {" "}
                <img className="w-4" src={arrow} alt="" />
                Landing Pages
              </li>
              <li className="flex items-center gap-6">
                {" "}
                <img className="w-4" src={arrow} alt="" />
                User Flow
              </li>
              <li className="flex items-center gap-6">
                {" "}
                <img className="w-4" src={arrow} alt="" />
                Wireframing
              </li>
              <li className="flex items-center gap-6">
                {" "}
                <img className="w-4" src={arrow} alt="" />
                Prototyping
              </li>
              <li className="flex items-center gap-6">
                {" "}
                <img className="w-4" src={arrow} alt="" />
                Prototyping
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          className="card card-compact  bg-[#FDDE55] shadow-xl p-10"
        >
          <figure>
            <img className="w-24" src={code} alt="Shoes" />
          </figure>
          <div className="card-body justify-center mt-10 ">
            <h2 className="text-2xl font-bold text-center text-zinc-800">
              Development
            </h2>
            <ul className="mx-auto text-gray-900 text-lg  flex flex-col gap-2 mt-4 font-semibold">
              <li className="flex items-center gap-6">
                {" "}
                <img className="w-4" src={arrow} alt="" />
                HTML/CSS
              </li>
              <li className="flex items-center gap-6">
                {" "}
                <img className="w-4" src={arrow} alt="" />
                Java Script
              </li>
              <li className="flex items-center gap-6">
                {" "}
                <img className="w-4" src={arrow} alt="" />
                Nonde Js
              </li>
              <li className="flex items-center gap-6">
                {" "}
                <img className="w-4" src={arrow} alt="" />
                Express Js
              </li>
              <li className="flex items-center gap-6">
                {" "}
                <img className="w-4" src={arrow} alt="" />
                React
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          className="card card-compact  bg-[#FA7070] shadow-xl p-10"
        >
          <figure>
            <img className="w-24" src={seo} alt="Shoes" />
          </figure>
          <div className="card-body justify-center mt-10 ">
            <h2 className="text-2xl font-bold text-center text-zinc-800">
              SEO Marketing
            </h2>
            <ul className="mx-auto text-gray-900 text-lg  flex flex-col gap-2 mt-4 font-semibold">
              <li className="flex items-center gap-6">
                {" "}
                <img className="w-4" src={arrow} alt="" />
                White Hat SEO
              </li>
              <li className="flex items-center gap-6">
                {" "}
                <img className="w-4" src={arrow} alt="" />
                Black Hat SEO
              </li>
              <li className="flex items-center gap-6">
                {" "}
                <img className="w-4" src={arrow} alt="" />
                Grey Hat SEO
              </li>
              <li className="flex items-center gap-6">
                {" "}
                <img className="w-4" src={arrow} alt="" />
                Negative SEO
              </li>
              <li className="flex items-center gap-6">
                {" "}
                <img className="w-4" src={arrow} alt="" />
                On-Page SEO
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Services;
