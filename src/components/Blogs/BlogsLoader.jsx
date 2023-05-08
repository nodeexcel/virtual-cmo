import React from "react";
// import loader from "../../assets/Generateblogs.png";
// import topic from "../assets/Generatetopic.png";
// import Content from "../assets/ContentLoader.png";
import Blogs from "../../assets/Contentblog.png";

import "../../App.css";
import { BlogsCentre } from "./Blogs";
import ProgressBar from "../common/ProgressBar";

const BlogsLoader = ({ setCurrScreen }) => {
  return (
    <div className="w-[80%] h-screen flex flex-col rounded-lg bg-white mt-[4%]">
      <div className="w-[100%] h-[20%] p-5 rounded-t-lg  bg-blue-200 flex ">
        <h1 className="text-black text-2xl font-medium leading-9 text-left">
          Let me generate a few blogs topic for you
        </h1>
      </div>

      <ProgressBar percent={10}/>

      <div className=" m-auto mt-[20%] h-screen  w-[60%]">
        <h1 className="text-blue-500 font-bold text-md  -mb-[10%]">Blogs</h1>
        <BlogsCentre img={Blogs} />
        <button
          onClick={() => setCurrScreen(2)}
          class="bg-transparent rounded-lg hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 ring-1 border border-blue-500 hover:border-transparent "
        >
          Generate Blogs Topic
        </button>
        {/* <BlogsCentre img={topic} />
        <BlogsCentre img={Content} /> */}
      </div>
    </div>
  );
};
export default BlogsLoader;
