import React from "react";
// import loader from "../../assets/Generateblogs.png";
import GeneratingBlogs from "../../assets/GeneratingBlogs.svg";

import "../../App.css";
import { BlogsCentre } from "./Blogs";
import { useEffect } from "react";

const BlogsIdea = ({ setCurrScreen }) => {
  useEffect(() => {
    setTimeout(() => {
      setCurrScreen(3);
    }, 2000);
  }, []);
  return (
    <div className="w-[80%] h-screen flex flex-col rounded-lg bg-white mt-[8%]">
      <div className="w-[100%] h-[15%] p-5 rounded-t-lg  bg-blue-200 flex ">
          <h1 className="text-black text-2xl font-medium leading-9 text-left">
        Let me generate a few blog topics for you
        </h1>
      </div>

      <div className=" m-auto mt-[3%] h-screen items-center justify-center  w-[60%]">
        <BlogsCentre img={GeneratingBlogs} />
        <div className="bg-slate-200 h-3 rounded-lg mt-2">
        </div>
        <p className="bg-transparent m-auto rounded-lg text-blue-700 font-semibold flex items-center justify-center py-2 px-4   hover:border-transparent ">
          Working on some blog ideas
        </p>
      </div>
    </div>
  );
};
export default BlogsIdea;
