import React from "react";
import Title from "../shared/Title";

const Contact = () => {
  
  return (
    <div  className="flex justify-center py-20 w-full  mt-14">
    <div className="card w-full bg-[#FDFFE2] shadow-xl ">
    <Title title={"Get In Touch"}></Title>
   <div className="card-body w-full md:w-1/2 mx-auto px-10 ">
    <form class="w-full mx-auto" action="https://formspree.io/f/moqggjwy"
  method="POST">
  <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id=""
            class="block py-2.5 px-0 w-full text-sm text-[#1A2130] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#1A2130] peer"
            placeholder=""
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-[#1A2130] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1A2130] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="username"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-[#1A2130] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#1A2130] peer"
            placeholder=" "
            required
          />
          <label
            for="username"
            class="peer-focus:font-medium absolute text-sm text-[#1A2130] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1A2130] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
        </div>
       
        <div class="relative z-0 w-full  group">
          <textarea
            type="text"
            name="message"
            id="floating_message"
            class="block py-2.5 px-0 w-full text-sm text-[#1A2130] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1A2130] focus:outline-none focus:ring-0 focus:border-[#1A2130] peer"
            placeholder=" "
            required
          />
          <label
            for="floating_message"
            class="peer-focus:font-medium absolute text-sm text-[#1A2130] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1A2130] peer-focus:dark:text-[#1A2130] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Message
          </label>
        </div>
        
        <div className="flex justify-center my-10">
         <button className=" outline outline-[#ff5a45]  mx-auto px-8 py-1 rounded-full shadow-2xl hover:shadow-sm text-[#ff5a45] uppercase font-bold " >Submit</button>
      
        </div>
      </form>
  </div>
</div>
      
    </div>
  );
};

export default Contact;
