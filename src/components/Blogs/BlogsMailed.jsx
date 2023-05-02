import React from "react";
import { BlogsCentre,Loader } from "./Blogs";

import Blogs from "../../assets/BlogsEmail.png";

const BlogsMailed = () => {
  return (
    <div className="w-[65%] m-auto h-screen bg-slate-100 p-2 ">
      <div className="w-[100%] h-[15%] mt-[2%] items-center justify-center text-md  m-auto border-1 rounded-lg text-centre bg-blue-200 text-black flex ">
        I have emailed the blog!
      </div>
      <Loader percent={100} />
      

      <div className=" m-auto mt-[3%] h-screen items-center justify-center  w-[60%]">
       
        <BlogsCentre img={Blogs} />
        <button class=" m-auto rounded-lg bg-blue-500 text-slate-50 font-semibold flex items-center justify-center hover:text-white py-2 px-4 ring-1 border border-blue-500 hover:border-transparent ">
          Blogs Topic
        </button>
        <div className="flex justify-between mt-4 ">
        <button class="bg-transparent text-sm m-auto rounded-lg mr-4 hover:bg-blue-500 text-blue-700 flex items-center justify-center hover:text-white py-2 px-4 ring-1 border border-blue-500 hover:border-transparent ">
          Generate Social MediaPost
        </button>
        <button class="bg-transparent m-auto rounded-lg mr-4 hover:bg-blue-500 text-blue-700 text-sm flex items-center justify-center hover:text-white py-2 px-4 ring-1 border border-blue-500 hover:border-transparent ">
          Generate Keywords
        </button>
        <button class="bg-transparent m-auto rounded-lg hover:bg-blue-500 text-blue-700 text-sm flex items-center justify-center hover:text-white py-2 px-4 ring-1 border border-blue-500 hover:border-transparent ">
          Generate ads copies
        </button>
        </div>
      </div>
    </div>
  );
};
export default BlogsMailed;