import React from "react";
import keywords from "../../assets/Topkeywords.png";
import ProgressBar from "../common/ProgressBar";


import { KeywordsCentre } from "./Keywords";

const Topkeywords = ({ setCurrScreen }) => {
  return (
    <div className="w-[80%] h-screen flex flex-col rounded-lg bg-white mt-[2%]">
      <div className="w-[100%] h-[15%] px-5 py-5 rounded-t-lg  bg-blue-200 flex ">
        <h1 className="text-black text-xl   text-left">
          I have scanned through the website and I can generate top keywords for
          blogs, search ads, and social media.
        </h1>
        
      </div>
          <ProgressBar percent={30}/>  
    
        <h1 className="text-blue-600 font-bold mt-[8%]">Keywords</h1>
        <div className="self-center ">
          <KeywordsCentre img={keywords} />
        </div>
        <div className="flex  justify-center mb-[1%] items-center">
          <button
            onClick={() => setCurrScreen(2)}
            class="bg-transparent  rounded-lg py-2 px-2 mr-4 hover:bg-blue-500 text-blue-500 text-sm  hover:text-white  border border-blue-500 hover:border-transparent "
          >
            Generate top keywords
          </button>
        </div>
    </div>
  );
};
export default Topkeywords;
