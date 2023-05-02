import React from "react";
// import loader from "../../assets/Generateblogs.png";
// import topic from "../assets/Generatetopic.png";
// import Content from "../assets/ContentLoader.png";
import Blogs from "../../assets/Contentblog.png";

import "../../App.css";
import { BlogsCentre, Loader } from "./Blogs";

const BlogsLoader = ({setCurrScreen}) => {
  return (
    <div className="w-[65%] m-auto h-screen bg-slate-100  ">
      <div className="w-[100%] h-[15%] mt-[2%] items-center justify-center text-md  m-auto border-1 rounded-lg text-centre bg-blue-200 text-black flex ">
        Let me generate a few blogs topic for you
      </div>

      <Loader percent={10} />

      <div className=" m-auto mt-[20%] h-screen  w-[60%]">
        <h1 className="text-blue-500 font-bold text-md  -mb-[10%]">Blogs</h1>
        <BlogsCentre img={Blogs} />
        <button onClick={()=> setCurrScreen(2)} class="bg-transparent rounded-lg hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 ring-1 border border-blue-500 hover:border-transparent ">
          Generate Blogs Topic
        </button>
        {/* <BlogsCentre img={topic} />
        <BlogsCentre img={Content} /> */}
      </div>
    </div>
  );
};
export default BlogsLoader;
