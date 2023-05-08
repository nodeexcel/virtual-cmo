import React from "react";
import Blogs from "../../assets/BlogsEmail.png";
import ProgressBar from "../common/ProgressBar";

import { GoogleCentre} from "./Googleads";

const GoogleMailed = () => {
  return (
    <div className="w-[65%] m-auto h-screen bg-slate-50  ">
      <div className="w-[100%] h-[15%] mt-[2%] px-8 py-8 text-md  m-auto border-1 rounded-lg text-centre bg-blue-200 text-black flex ">
        I have emailed the Google ads assests.
      </div>

      <ProgressBar percent={100} />

      <div className=" m-auto mt-[4%] h-auto items-center justify-center  w-[60%]">
        <GoogleCentre img={Blogs} />
        <button className=" m-auto rounded-lg border bg-blue-500 text-slate-50 font-semibold flex items-center justify-center hover:text-white py-2 px-4  border-blue-500 hover:border-transparent ">
          Working on Ad Copies..
        </button>
        <div className="flex  mt-3  justify-between">
        <button class="bg-transparent text-sm font-bold py-3 px-2 m-auto rounded-lg mr-4 hover:bg-blue-500 text-blue-700  hover:text-white  border border-blue-500 hover:border-transparent ">
          Generate Social Media Post
        </button>
        <button class="bg-transparent m-auto font-bold rounded-lg py-3 px-2 mr-4 hover:bg-blue-500 text-blue-700 text-sm flex items-center justify-center hover:text-white  border border-blue-500 hover:border-transparent ">
          Generate Keywords
        </button>
        <button class="bg-transparent m-auto font-bold rounded-lg py-3 px-2 hover:bg-blue-500 text-blue-700 text-sm flex items-center justify-center hover:text-white   border border-blue-500 hover:border-transparent ">
          Generate ads copies
        </button>
        </div>
      </div>
    </div>
  );
};
export default GoogleMailed;
