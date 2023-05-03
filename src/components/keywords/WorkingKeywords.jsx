import React from "react";
import keywords from "../../assets/Workingkeywords.png";


import { KeywordsCentre, KeywordsLoader } from "./Keywords";

const WorkingKeywords = () => {
  return (
    <div className="w-[65%] mt-[1%] m-auto h-screen bg-slate-100  ">
      

      <KeywordsLoader percent={50} />

      <div className=" m-auto mt-[8%] h-auto items-center justify-center  w-[60%]">
        <KeywordsCentre img={keywords} />
      </div>
      <div className="flex m-auto mt-[2%] justify-center mb-[1%] items-center">
        <p className="bg-transparent  font-bold rounded-lg py-2 px-2 mr-4 text-blue-500 text-sm  hover:text-white   hover:border-transparent ">
          Working on  top keywords...
        </p>
      </div>
    </div>
  );
};
export default WorkingKeywords;
