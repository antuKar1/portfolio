import React from "react";
import Title from "../shared/Title";

const Education = () => {
  return (
    <>
   
    <div  className="w-full  flex-col flex justify-center items-center gap-4">
       <Title title="Education & Training"></Title>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
         <div className="grid w-full md:grid-cols-1 lg:grid-cols-2  gap-8 md:gap-8 ">
         <div>
         <h1 className="text-lg font-bold text-zinc-600 capitalize text-center">Education Details</h1>
          <ul className="steps steps-vertical h-auto">
            <li data-content="●" className="step  step-neutral  justify-start items-start h-auto">
              <div className="text-start px-4 py-4 md:py-6">
                <span className="text-base font-semibold text-gray-500">
                  From : 2015-2018
                </span>
                <h1 className="text-2xl font-semibold text-zinc-800">
                  Bachelor Of Software Engineering
                </h1>
                <h3 className="text-xl font-medium text-gray-600">
                  Institute : Daffodil International University{" "}
                </h3>
              </div>
            </li>
            <li data-content="●" className="step step-neutral   justify-start items-start ">
              <div className="text-start px-4 py-4 md:py-6">
                <span className="text-base font-semibold text-gray-500">
                  From : 2013-2014
                </span>
                <h1 className="text-2xl font-semibold text-zinc-800">
                  Heigher Secondary Certificate (HSC)
                </h1>
                <h3 className="text-xl font-medium text-gray-600">
                  Institute : Syeed Abul Hossain School and College
                </h3>
              </div>
            </li>
            <li data-content="●" className="step  step-neutral justify-start items-start ">
              <div className="text-start px-4 py-4  md:py-6">
                <span className="text-base font-semibold text-gray-500">
                  From : 2011-2012
                </span>
                <h1 className="text-2xl font-semibold text-zinc-800">
                  Heigher Secondary Certificate (HSC)
                </h1>
                <h3 className="text-xl font-medium text-gray-600">
                  Institute : Syeed Abul Hossain School and College
                </h3>
              </div>
            </li>
          </ul>
         </div>
         <div className="">
    <h1 className="text-lg font-bold text-zinc-600 capitalize text-center">Training Details</h1>
         <div className="flex justify-center items-center mt-8">
          <ul className="steps steps-vertical h-auto">
            <li data-content="●" className="step  step-neutral  justify-start items-start h-auto">
              <div className="text-start px-4 py-6">
                <span className="text-base font-semibold text-gray-500">
                  From : 2023-2024 (6 months)
                </span>
                <h1 className="text-2xl font-semibold text-zinc-800">
                  Wev Developer
                </h1>
                <h3 className="text-xl font-medium text-gray-600">
                  Institute : Programming Hero
                </h3>
              </div>
            </li>
            <li data-content="●" className="step step-neutral   justify-start items-start ">
              <div className="text-start px-4  md:py-6">
                <span className="text-base font-semibold text-gray-500">
                  From : 2018-2019 ( 6 months)
                </span>
                <h1 className="text-2xl font-semibold text-zinc-800">
                  Introduction to Website Designe and Development
                </h1>
                <h3 className="text-xl font-medium text-gray-600">
                  Institute : Bangladesh Computer Council (BCC)
                </h3>
              </div>
            </li>
            
          </ul>
         </div>
         </div>
         </div>
        </div>
      </div>
    </div>
</>
  );
};

export default Education;
