import React from "react";

import Blogs from "../../assets/BlogsReady.png";
import RelaodIcon from "../../assets/ReloadIcon.svg";
import ProgressBar from "../common/ProgressBar";

const BlogsReady = ({ setCurrScreen }) => {
  return (
    <div className="w-[80%] h-screen flex flex-col rounded-lg bg-white mt-[2%] overflow-hidden">
      <div className="w-[100%] h-[12%] p-5 rounded-t-lg  bg-blue-200 flex ">
        <h1 className="text-black text-2xl font-medium leading-9 text-left">
          Your blogs is Ready!
        </h1>
      </div>
      <ProgressBar percent={80}/>
      <img
        src={RelaodIcon}
        height={20}
        width={20}
        className="self-end mr-[6%] mt-[2%]"
      />
      <div className="self-center mt-[2%]  border-2 border-black rounded-xl items-center  justify-center px-8 w-[90%]">
        <div className=" mt-[4%] mb-[2%]">
          <h1 className="text-black text-left font-bold text-lg">
            How to grow on youtube ?{" "}
          </h1>
          <h4 className="text-black text-left text-sm mt-[2%]">
            YouTube has become an indispensable part of our lives in recent
            years. It is the second most visited website on the internet and is
            a platform where people can upload, share, and view videos. It has
            become a source of entertainment, education, and information for
            people of all ages. In this blog, we will discuss the history of
            YouTube, how it has evolved over the years, and its impact on
            society.
          </h4>
          <h3 className="mt-[2%] text-left font-bold text-xs">
            History of YouTube
          </h3>
          <h3 className="mt-[2%] text-left text-sm">
            YouTube was founded in 2005 by three former PayPal employees- Chad
            Hurley, Steve Chen, and Jawed Karim. They wanted to create a
            platform where people could upload and share videos with their
            friends and family. The first video that was uploaded on YouTube was
            a 19-second video of Jawed Karim at the San Diego Zoo. It was titled
            "Me at the zoo" and was uploaded on April 23, 2005. The video
            received millions of views and marked the beginning of the YouTube
            revolution.
          </h3>
          <div className="flex justify-center mt-5">
            <img src={Blogs} height={200} width={400} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[3%]">
        <button
          onClick={() => {
            setCurrScreen(6);
          }}
          class="bg-blue-500  rounded-lg py-2 px-2 mr-4 hover:bg-blue-500 text-slate-50 text-sm  hover:text-white  border border-blue-500 hover:border-transparent "
        >
          Send this blog to email
        </button>
        <button class="bg-transparent  font-bold rounded-lg py-2 px-2 hover:bg-blue-500 text-blue-700 text-sm flex  hover:text-white   border border-blue-500 hover:border-transparent ">
          Publish on my website
        </button>
      </div>
    </div>
  );
};
export default BlogsReady;
