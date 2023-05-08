import React from "react";
import {KeywordsCentre} from "./Keywords"

import Blogs from "../../assets/BlogsEmail.png";
import ArrowRight from "../../assets/ArrowRight.svg";
import ProgressBar from "../common/ProgressBar";

const KeywordsMailed = () => {
  return (
    <div className="w-[80%] flex flex-col h-screen  rounded-lg bg-white mt-[2%]">
      <div className="w-[100%] h-[15%] p-5 rounded-t-lg  bg-blue-200 flex ">
        <h1 className="text-black text-2xl font-medium leading-9 text-left">
          I have emailed the social media posts.
        </h1>
      </div>
      <ProgressBar percent={100}/>

      <div className=" m-auto mt-[3%] h-screen items-center justify-center  w-[80%]">
        <KeywordsCentre img={Blogs}  />
        <div className="flex justify-center">
          <div className="p-2 px-4 bg-blue-600 self-center flex items-center justify-center  rounded-lg">
            <p className="text-white mr-2 text-xs">Blogs Topic</p>
            <img src={ArrowRight} height={15} width={15} />
          </div>
        </div>
        <div className="flex  mt-3 ">
          <div className="p-2 px-4 mx-2 bg-white border-blue-600 border-2 self-center flex items-center justify-center  rounded-lg">
            <p className="text-blue-600 mr-2 text-xs">
              Generate Social Media post
            </p>
          </div>
          <div className="p-2 px-4 mx-2 bg-white border-blue-600 border-2 self-center flex items-center justify-center  rounded-lg">
            <p className="text-blue-600 mr-2 text-xs">Generate Keywords</p>
          </div>
          <div className="p-2 px-4 mx-2 bg-white border-blue-600 border-2 self-center flex items-center justify-center  rounded-lg">
            <p className="text-blue-600  mr-2 text-xs">Generate ad copies</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KeywordsMailed;
