import React from "react";

import Blogs from "../../assets/GoogleCopies.png";
import ProgressBar from "../common/ProgressBar";
import { GoogleCentre } from "./Googleads";

const GoogleCopies = ({ setCurrScreen }) => {
  return (
    <div className="w-[80%] flex flex-col rounded-lg bg-white mt-[3%] overflow-hidden">
      <div className="w-[100%] h-[12%] p-5 rounded-t-lg  bg-blue-200 flex ">
        <h1 className="text-black text-2xl font-medium leading-9 text-left">
          I have scanned through your Website and i can generate copies for
          google ads.
        </h1>
      </div>

      <ProgressBar percent={25} />

      <div className=" m-auto mt-[4%] h-screen items-center justify-center  w-[60%]">
        <h1 className="text-blue-700 font-bold text-md flex item-center justify-center  ">
          Google ads
        </h1>
        <GoogleCentre img={Blogs} />
        <button
          onClick={() => {
            setCurrScreen(2);
          }}
          class="bg-transparent m-auto rounded-lg hover:bg-blue-500 text-blue-700 font-semibold flex items-center justify-center hover:text-white py-2 px-4 ring-1 border border-blue-500 hover:border-transparent "
        >
          Generate ad Copies
        </button>
      </div>
    </div>
  );
};
export default GoogleCopies;
