import React from "react";
import { BlogsCentre } from "./Blogs";

import Blogs from "../../assets/BlogsContent.png";
import { useEffect } from "react";
import ProgressBar from "../common/ProgressBar";

const BlogsTopic = ({ setCurrScreen }) => {
  useEffect(()=> {
    setTimeout(()=>{
      setCurrScreen(5)
    },2000)
  },[])
  return (
    <div className="w-[80%] h-screen flex flex-col rounded-lg bg-white mt-[8%]">
      <ProgressBar percent={60}/>

      <div className=" m-auto mt-[15%] h-screen items-center justify-center  w-[60%]">
        <BlogsCentre img={Blogs} />
        <div className="rounded-lg bg-slate-200 h-3">
          <div className="rounded-lg bg-teal-600 h-3 w-[40%]"></div>
        </div>
        <p className="bg-transparent m-auto rounded-lg hover:bg-blue-500 text-blue-500 font-semibold flex items-center justify-center hover:text-white py-2 px-4  border-blue-500 hover:border-transparent ">
          Working on the Blogs Sub-Heading and writing context.....
        </p>
      </div>
    </div>
  );
};
export default BlogsTopic;
