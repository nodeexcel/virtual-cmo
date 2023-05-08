import React from "react";import { SocialCentre } from "./SocialMedia";

import Facebook from "../../assets/Facebook.png";
import Linkdin from "../../assets/Linkedin.png";
import Instagram from "../../assets/Instagram.png";
import Twitter from "../../assets/Twitter.png";

import ProgressBar from "../common/ProgressBar";

const SocialPlatform = ({ setSocialMedia }) => {
  return (
    <div className="w-[80%] m-auto h-screen mt-[2%] bg-slate-50 ">
      <div className="w-[100%] h-[12%] mt-[1%] px-8 py-8 text-md  m-auto border-1 rounded-lg text-centre bg-blue-200 text-black flex ">
        I can create social media content for your business!
      </div>
      <ProgressBar percent={10} />
      <p className=" m-auto text-2xl mt-8 justify-center item-center py-2 px-4 hover:border-transparent ">
        Select the platforms by adding them in a list.
      </p>

      <div className=" m-auto mt-[8%] bg-slate-100 h-auto  rounded-lg p-5 items-center justify-center  w-[54%]">
        <div className="mt-4 flex ">
          <img className="w-[10%] mr-4 " src={Facebook} />
          <h1 className="text-2xl mt-2 mr-4">Facebook</h1>
          <div className="mt-2 m-auto">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-150 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <div className="mt-4 flex ">
          <img className="w-[10%] mr-4 " src={Instagram} />
          <h1 className="text-2xl mt-2 mr-4">Instagram</h1>
          <div className="mt-2 m-auto">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-150 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <div className="mt-4 flex ">
          <img className="w-[10%] mr-4 " src={Twitter} />
          <h1 className="text-2xl mt-2 mr-[11%]">Twitter</h1>
          <div className="mt-2 m-auto">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-150 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <div className="mt-4 flex ">
          <img className="w-[10%] mr-4 " src={Linkdin} />
          <h1 className="text-2xl mt-2 mr-[7%]">Linkedin</h1>
          <div className="mt-2 m-auto">
          <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-150 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            
          </div>
        </div>
      </div>
      <button
        onClick={() => setSocialMedia(2)}
        class="bg-blue-600 m-auto rounded-lg font-bold hover:bg-blue-700 mt-8 text-slate-50 text-xs flex items-center justify-center hover:text-white py-1 px-4 ring-1 border border-blue-500 hover:border-transparent "
      >
        Generate content
      </button>
    </div>
  );
};
export default SocialPlatform;
