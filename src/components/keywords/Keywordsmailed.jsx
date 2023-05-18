import React from "react";
import {KeywordsCentre} from "./Keywords"

import Blogs from "../../assets/Blogs.svg";
import ArrowRight from "../../assets/ArrowRight.svg";
import ProgressBar from "../common/ProgressBar";

const KeywordsMailed = () => {
  return (
    <div className="w-[80%] flex flex-col h-screen  rounded-lg bg-white mt-[2%] overflow-hidden">
      <div className="w-[100%] h-[15%] px-8 py-8 rounded-t-lg  bg-blue-200 flex ">
        <h1 className="text-black text-2xl  leading-9 text-left">
          I have emailed the keyword list.
        </h1>
      </div>
      <ProgressBar percent={100}/>

      <div className=" m-auto  items-center justify-center mt-[-2%]  w-[65%]">
        <KeywordsCentre  img={Blogs}  />
        <div className="flex justify-center">
          <div className="py-3 px-4 mt-[-4%] bg-blue-600 self-center flex items-center justify-center  rounded-lg">
            <p className="text-white  text-xs">Go to Keywords</p>
            <img src={ArrowRight} height={15} width={15} />
          </div>
        </div>
        <div className="flex  mt-2 w-[100%]">
          <div className="p-2 px-4 mx-2 bg-white border-blue-600 border-2 flex items-center justify-center  rounded-lg">
            <p className="text-blue-600 whitespace-nowrap mr-4 text-xs">
              Generate Social Media post
            </p>
          </div>
          <div className="p-2 px-4 mx-2 bg-white border-blue-600 border-2  flex items-center justify-center  rounded-lg">
            <p className="text-blue-600 whitespace-nowrap mr-4 text-xs">Generate Keywords</p>
          </div>
          <div className="p-2 px-4 mx-2 bg-white border-blue-600 border-2  flex items-center justify-center  rounded-lg">
            <p className="text-blue-600 whitespace-nowrap mr-4 text-xs">Generate ad copies</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KeywordsMailed;
