import React from "react";
import Blogs from "../../assets/Blogs.svg";
import ProgressBar from "../common/ProgressBar";

import { GoogleCentre} from "./Googleads";

const GoogleMailed = () => {
  return (
    <div className="w-[80%] m-auto h-screen bg-slate-50 overflow-hidden">
      <div className="w-[100%] h-[13%] mt-[2%] px-8 py-8 text-md  m-auto border-1 rounded-lg text-centre bg-blue-200 text-black flex ">
        I have emailed the Google Ads assests.
      </div>

      <ProgressBar percent={100} />

      <div className=" m-auto  h-auto items-center justify-center  w-[60%]">
        <GoogleCentre img={Blogs} />
        </div>
        <div className="flex  mt-2 justify-center">
          <div className="p-2 px-4 mx-2 bg-white border-blue-600 border-2 self-center flex items-center justify-center  rounded-lg">
            <button className="text-blue-600 font-semibold mr-2 text-xs">
              Generate Social Media post
            </button>
          </div>
          <div className="p-2 px-4 mx-2 bg-white border-blue-600 border-2 self-center flex items-center justify-center  rounded-lg">
            <button className="text-blue-600 font-semibold mr-2 text-xs">Generate Blogs</button>
          </div>
          <div className="p-2 px-4 mx-2 bg-white border-blue-600 border-2 self-center flex items-center justify-center  rounded-lg">
            <button className="text-blue-600 font-semibold  mr-2 text-xs">Generate Keywords</button>
          </div>
        
        
      </div>
    </div>
  );
};
export default GoogleMailed;
