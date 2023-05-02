import React from "react";
import { BlogsCentre, Loader } from "./Blogs";

import Blogs from "../../assets/BlogsContent.png";
import { useEffect } from "react";

const BlogsTopic = ({setCurrScreen}) => {
  useEffect(()=> {
    setTimeout(()=>{
      setCurrScreen(5)
    },2000)
  },[])
  return (
    <div className="w-[65%] m-auto h-screen bg-slate-100  ">
      <div className="w-[100%] h-[15%] mt-[2%] items-center justify-center text-md  m-auto border-1 rounded-lg text-centre bg-blue-200 text-black flex ">
        Let me generate a few blogs topic for you
      </div>

      <Loader percent={60} />

      <div className=" m-auto mt-[20%] h-screen items-center justify-center  w-[60%]">
        <h1 className="text-blue-500 font-bold text-md flex item-center justify-center  -mt-[30%]">
          Blogs
        </h1>
        <BlogsCentre img={Blogs} />
        <p className="bg-transparent m-auto rounded-lg hover:bg-blue-500 text-blue-500 font-semibold flex items-center justify-center hover:text-white py-2 px-4  border-blue-500 hover:border-transparent ">
          Working on the Blogs Sub-Heading and writing context
        </p>
      </div>
    </div>
  );
};
export default BlogsTopic;
