import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { RiUser4Line } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { GrContactInfo } from "react-icons/gr";

import { SlGraduation } from "react-icons/sl";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
// import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (





    <div className=" md:block lg:block overflow-hidden">
      <aside className=" w-full  md:w-48">
        <div className="flex bg-[#FEFDED]  mf:items-center flex-row md:flex-col lg:flex-col  md:justify-between lg:justify-between md:min-h-screen gap-1 py-10 ">
          <div className="hidden md:block">
            <a className="btn btn-ghost text-xl">Aoyan Kar</a>
          </div>
          <div className=" md:flex-grow lg:flex-grow  md:my-10 w-full gap-2">
            <ul className="flex flex-row md:flex-col lg:flex-col  items-start gap-2    w-full">
              <li className="hover:bg-slate-400 w-full py-4 ">
                <a
                  href={"#home"}
                  
                  className="flex justify-center items-center gap-2  cursor-pointer"
                  onClick={()=>console.log("home")}
                >
                  <IoHomeOutline /> Home
                </a>
              </li>
              <li className="hover:bg-slate-400 w-full py-4 ">
                <a
                  href="#projects"
                  
                  className="flex justify-center items-center gap-2"
                >
                  <HiOutlineSquare3Stack3D />
                  Projects
                </a>
              </li>
              <li className="hover:bg-slate-400 w-full py-4 ">
                <a
                  href="#about"
                  
                  duration={500}
                  className="flex justify-center items-center gap-2"
                >
                  <RiUser4Line />
                  About
                </a>
              </li>
              <li className="hover:bg-slate-400 w-full py-4 ">
                <a
                  href="#education"
                  
                  className="flex justify-center items-center gap-2"
                >
                  <SlGraduation />
                  Education
                </a>
              </li>
              <li className="hover:bg-slate-400 w-full py-4 ">
                <a
                  href="#services"
                  
                  duration={500}
                  className="flex justify-center items-center gap-2"
                >
                  <RiServiceLine />
                  Services
                </a>
              </li>

              <li className="hover:bg-slate-400 w-full py-4 ">
                <a
                  href="@contact"
                
                  className="flex justify-center items-center gap-2"
                >
                  <GrContactInfo />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center hidden md:block">
            <h2>© 2024,Aoyan Kar, All rights reserved</h2>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
