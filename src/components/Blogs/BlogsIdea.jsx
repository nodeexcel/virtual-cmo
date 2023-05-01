import React from "react";
import { BlogsCentre, Loader } from "./Blogs";
import loader from "../../assets/Generateblogs.png";



const BlogsIdea = () => {
  return (
    <div className="w-[65%] m-auto h-screen text-slate-200">
        <div className="w-[100%] h-[10%] m-auto border-1 rounded-lg text-centre bg-blue-200 text-black flex ">Let me generate a few blogs topic for you </div>
      <div className=" m-auto mt-[5%] h-screen  w-[60%]">
        <h1 className="text-blue-500 font-bold text-md  -mb-[10%]">Blogs</h1>
        <BlogsCentre img={loader} />
        
        
      </div>
    </div>
  );
};
export default BlogsIdea;