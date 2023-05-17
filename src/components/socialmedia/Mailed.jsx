import React from "react";
import { SocialCentre } from "./SocialMedia";

import Blogs from "../../assets/Blogs.svg";
import ProgressBar from "../common/ProgressBar";

const SocialMail = () => {
  return (
    <div className="w-[80%] m-auto h-screen bg-slate-50 overflow-hidden ">
      <div className="w-[100%] h-[13%] mt-[1%] px-4 py-6 text-md  m-auto border-1 rounded-lg text-centre bg-blue-200 text-black flex ">
        I have emailed the social media posts.
      </div>
      <ProgressBar percent={100}/>
      

      <div className=" m-auto mt-[2%]  items-center justify-center  w-[55%]">
       
        <SocialCentre img={Blogs} />
        <button class=" m-auto rounded-lg bg-blue-500 text-slate-50 font-semibold flex items-center justify-center hover:text-white py-2 px-4 ring-1 border border-blue-500 hover:border-transparent ">
          Go to Google Ads
        </button>
        </div>
        <div className="flex justify-between mt-3 ">
        <button class="bg-transparent text-sm m-auto rounded-lg font-bold mr-[2%] hover:bg-blue-500 text-blue-700 flex items-center justify-center hover:text-white py-2 px-8 ring-1 border border-blue-500 hover:border-transparent ">
          Generate Blogs
        </button>
        <button class="bg-transparent m-auto rounded-lg mr-[2%] font-bold hover:bg-blue-500 text-blue-700 text-sm  hover:text-white py-2 px-8 ring-1 border border-blue-500 hover:border-transparent ">
          Generate Keywords
        </button>
        <button class="bg-transparent m-auto rounded-lg font-bold hover:bg-blue-500 text-blue-700 text-sm flex items-center justify-center hover:text-white py-2 px-8 ring-1 border border-blue-500 hover:border-transparent ">
          Generate ad copies
        </button>
        </div>
     
    </div>
  );
};
export default SocialMail;
