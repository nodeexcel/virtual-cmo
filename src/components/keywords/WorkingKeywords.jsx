import React from "react";
import { useEffect } from "react";
import keywords from "../../assets/Workingkeywords.png";
import ProgressBar from "../common/ProgressBar";

import { KeywordsCentre } from "./Keywords";

const WorkingKeywords = ({ setCurrScreen }) => {
  useEffect(() => {
    setTimeout(() => {setCurrScreen(3)},1000)
  },[])

  return (
    <div className="w-[80%] flex flex-col h-screen rounded-lg bg-white mt-[4%]">
      <ProgressBar percent={50} />
      <div className=" mt-[20%] self-center  w-[60%]">
        <KeywordsCentre img={keywords} />
      </div>
      <div className="rounded-lg bg-slate-200 h-3 w-[60%] self-center"></div>
      <p className="bg-transparent self-center font-bold rounded-lg py-2 px-2 mr-4 text-blue-500 text-sm ">
        Working on top keywords...
      </p>
    </div>
  );
};
export default WorkingKeywords;
