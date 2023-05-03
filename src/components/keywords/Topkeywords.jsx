import React from "react";
import keywords from "../../assets/Topkeywords.png";


import { KeywordsCentre, KeywordsLoader } from "./Keywords";

const Topkeywords = () => {
  return (
    <div className="w-[65%] m-auto h-screen bg-slate-100  ">
      <div className="w-[100%] h-[13%] mt-[2%] py-8 px-8 text-md  m-auto border-1 rounded-lg text-centre bg-blue-200 text-black flex ">
        I have Scanned through website and i can generate top keywords for
        blogs, search ads,and social media content.{" "}
      </div>

      <KeywordsLoader percent={25} />

      <div className=" m-auto mt-[3%] h-auto items-center justify-center  w-[60%]">
        <KeywordsCentre img={keywords} />
      </div>
      <div className="flex m-auto mt-[2%] justify-center mb-[1%] items-center">
        <button class="bg-transparent  rounded-lg py-2 px-2 mr-4 hover:bg-blue-500 text-blue-500 text-sm  hover:text-white  border border-blue-500 hover:border-transparent ">
          Generate top keywords
        </button>
      </div>
    </div>
  );
};
export default Topkeywords;
