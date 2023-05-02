import React from "react";
import blogs from "../../assets/Youtube.png";
import { Loader } from "./Blogs";


import {Card}  from "../cards/Card";

const Blogstube = () => {
  return (
    <div className="w-[65%] m-auto h-screen bg-slate-100  ">
      <div className="w-[100%] h-[13%] mt-[2%] py-8 px-8 text-md  m-auto border-1 rounded-lg text-centre bg-blue-200 text-black flex ">
        Here are the some blog topic that we can write about!
      </div>

      <Loader percent={40} />

      <div className=" m-auto mt-[3%] h-screen items-center justify-center  w-[100%]">
        <h1 className="  text-xl text-slate-700 flex item-center justify-center ">
          Select a topic and click on generate blog
        </h1>
        <div className="p-8">
        
      <Card img={blogs} heading={"How to grow on youtube?"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}/>

      </div>
     
       
      </div>
     
      
    </div>
  );
};
export default Blogstube;
