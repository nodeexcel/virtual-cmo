import React from "react";
import { BlogsCentre, Loader } from "./Blogs";

import Blogs from "../../assets/BlogsReady.png";

const BlogsReady = () => {
  return (
    <div className="w-[65%] m-auto h-screen bg-slate-100  ">
      <div className="w-[100%] h-[13%] mt-[2%] py-8 px-8 text-md  m-auto border-1 rounded-lg text-centre bg-blue-200 text-black flex ">
        Your blogs is Ready!
      </div>

      <Loader percent={80} />

      <div className="m-auto mt-[2%]  border-2 rounded-lg items-center  justify-center px-8 w-[80%]">
        <div className=" mt-[4%] mb-[2%]">
          <h1 className="text-black font-bold text-lg">
            How to grow on youtube ?{" "}
          </h1>
          <h4 className="text-black text-sm mt-[2%]">
            YouTube has become an indispensable part of our lives in recent
            years. It is the second most visited website on the internet and is
            a platform where people can upload, share, and view videos. It has
            become a source of entertainment, education, and information for
            people of all ages. In this blog, we will discuss the history of
            YouTube, how it has evolved over the years, and its impact on
            society.
          </h4>
          <h3 className="mt-[2%] font-bold text-sm">History of YouTube</h3>
          <h3 className="mt-[2%]  text-sm">
            YouTube was founded in 2005 by three former PayPal employees- Chad
            Hurley, Steve Chen, and Jawed Karim. They wanted to create a
            platform where people could upload and share videos with their
            friends and family. The first video that was uploaded on YouTube was
            a 19-second video of Jawed Karim at the San Diego Zoo. It was titled
            "Me at the zoo" and was uploaded on April 23, 2005. The video
            received millions of views and marked the beginning of the YouTube
            revolution.
          </h3>
          <BlogsCentre img={Blogs}/>
        </div>
        <div className="flex m-auto mt-[4%] justify-center mb-[1%] items-center">
          <button class="bg-blue-500  rounded-lg py-2 px-2 mr-4 hover:bg-blue-500 text-slate-50 text-sm  hover:text-white  border border-blue-500 hover:border-transparent ">
            Send this blog to email
          </button>
          <button class="bg-transparent  font-bold rounded-lg py-2 px-2 hover:bg-blue-500 text-blue-700 text-sm flex  hover:text-white   border border-blue-500 hover:border-transparent ">
            Publish on my website
          </button>
        </div>
      </div>
    </div>
  );
};
export default BlogsReady;
