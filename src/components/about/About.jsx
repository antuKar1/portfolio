import React from "react";
import image from "../../assets/formal single human character for a personal portfolio website.png";
import Progress from "../shared/Progress";
import Title from "../shared/Title";
import { Link } from "react-router-dom";
const About = () => {
  console.log("About");

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = `/resume.pdf`;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
    <Title title="About Me"></Title>
      <div className=" flex flex-col justify-center items-center   bg-transparent w-full">
        <div className="w-full flex flex-col gap-8 p-10 md:pr-20 pb-20 md:pb-20 md:pl-20 md:pt-10 bg-slate-100  shadow-lg  rounded-3xl ">
          
          <div className="w-full grid justify-center  items-center md:grid-cols-1 lg:grid-cols-2  md:gap-2 lg:gap-8 h-auto   ">
            <div className="  flex flex-col gap-6 md:gap-2 rounded-md justify-center ">
              <figure className="w-full flex justify-center">
                <img className="w-40 rounded-full" src={image} alt="" />
              </figure>
              <p className="text-lg font-medium text-center md:p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                reprehenderit dolorem rem enim consequuntur molestiae magnam,
                assumenda, nihil minima ullam hic, commodi eius ab. Assumenda
                quisquam laudantium eius libero rerum, architecto vitae,
                possimus atque laboriosam earum doloremque iusto veritatis
                porro.
              </p>
              <Link
                onClick={downloadResume}
                className=" outline outline-[#ff5a45] hover:shadow-2xl opacity-100 hover:opacity-80  mx-auto px-8 py-1 rounded-full shadow-3xl  text-[#ff5a45] uppercase font-bold "
              >
                Download CV
              </Link>
            </div>

            <div className="flex w-full flex-row  md:flex-col justify-center md:gap-8">
            
              <div className="w-full flex flex-row md:flex-col  ">
                <Progress></Progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
