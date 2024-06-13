import React from "react";
import profile from "../../assets/formal single human character for a personal portfolio website.png";
import Social from "../shared/Social";
import pattern from "../../assets/pattern.svg";
// import css from "./home.css"
const Home = () => {
  console.log("Home")
  return (
    <div  className=" w-full bg-slate-200  min-h-screen flex flex-col justify-center items-center bg-pattern_2 bg-no-repeat bg-cover ">
     <div>
     
      <figure className="w-36">
        <img className="w-full rounded-full" src={profile} alt="" />
        
      </figure>
      <div className="text-center">
      <h1 className="text-2xl font-bold">Aoyan Kar</h1>
      <p className="text-base text-gray-600 font-bold">Web Designer</p>
      </div>
      <div className="my-5 text-center">
      <Social></Social>
      <button  className="bg-[#ff5a45] w-full px-4 py-2 rounded-md text-white uppercase font-bold mt-3" >Hire Me</button>
      </div>
     </div>
    </div>
  );
};

export default Home;
