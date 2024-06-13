import React, { useState } from "react";
import Title from "../shared/Title";
import { Link, Outlet } from "react-router-dom";


const Projects = () => {
    const [activeTab, setActiveTab]=useState("recent_projects")
    const handleName = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
    <Title title="Projects"></Title>
    <div className=" flex flex-col justify-center items-center " >
      
      <div className=" md:mt-10">
        <div role="tablist" className="tabs tabs-lifted py-10">
        <Link  to={"recent_projects"} role="tab" onClick={()=>handleName("recent_projects")} className={`text-base w-auto font-bold tab  ${activeTab === 'recent_projects' ? 'tab-active' : ''}`}>
            Recent 
          </Link>
          <Link to={"all_projects"} role="tab" onClick={()=>handleName("all_projects")} className={`text-base w-auto font-bold tab ${activeTab === 'all_projects' ? 'tab-active' : ''}`}>
            All 
          </Link>
          
          <Link to={"working_on"} role="tab" onClick={()=>handleName("working_on")} className={`text-base w-auto font-bold tab ${activeTab === 'working_on' ? 'tab-active' : ''}`}>
            Working
          </Link>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
    </>
  );
};

export default Projects;
