import React from "react";

import Blogs from "../../assets/GoogleCopies.png";
import { GoogleCentre, GoogleLoader } from "./Googleads";

const GoogleCopies = () => {
  return (
    <div className="w-[65%] m-auto h-screen bg-slate-50  ">
      <div className="w-[100%] h-[15%] mt-[2%] px-8 py-8 text-md  m-auto border-1 rounded-lg text-centre bg-blue-200 text-black flex ">
        I have scanned through your Website and i can generate copies for google ads. 
      </div>

      <GoogleLoader percent={25} />

      <div className=" m-auto mt-[4%] h-screen items-center justify-center  w-[60%]">
        <h1 className="text-blue-700  text-md flex item-center justify-center  ">
          Google ads 
        </h1>
        <GoogleCentre img={Blogs} />
        <button class="bg-transparent m-auto rounded-lg hover:bg-blue-500 text-blue-700 font-semibold flex items-center justify-center hover:text-white py-2 px-4 ring-1 border border-blue-500 hover:border-transparent ">
          Generate ad Copies
        </button>
      </div>
    </div>
  );
};
export default GoogleCopies;
