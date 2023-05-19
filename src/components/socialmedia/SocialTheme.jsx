import React from "react";
import { SocialCentre } from "./SocialMedia";

import Grocary from "../../assets/Grocery.png";
import Educational from "../../assets/Educational.png";
import Inspiration from "../../assets/Inspiration.png";
import Entertainment from "../../assets/Entertainment.png";
import Seasonal from "../../assets/Seasonal.png";
import Trending from "../../assets/Trending.png";


import ProgressBar from "../common/ProgressBar";

const SocialTheme = ({setSocialMedia}) => {
  return (
    <div className="w-[80%] m-auto h-screen mt-[2%] bg-slate-50 ">
    <div className="w-[100%] h-[12%] mt-[1%] px-8 py-8 text-md  m-auto border-1 rounded-lg text-centre bg-blue-200 text-black flex ">
      These are the social media themes on which I can work.
    </div>
    <div>
    <ProgressBar percent={30} />
    
      </div>
      <div>
      <p className=" m-auto  text-xl text-gray-600 justify-center  ">
        Select Themes for your posts.
      </p>
      </div>
    <div className=" m-auto   items-center justify-center  w-[90%]">
     
      <section class="text-gray-600 body-font  overflow-y-scroll h-[460px]">
        <div class="container px-5 py-24 ">
          <div class="flex flex-col">
            
          </div>
          <div class="flex flex-wrap  ">
            <div class="p-2 w-[33%] border rounded-lg mr-2 sm:mb-0 ">
              <div class="rounded-lg h-auto  overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-auto w-auto"
                  src={Grocary}
                />
              </div>
              <h2 class="text-md font-medium title-font text-gray-900 mt-5">
                Promotional Posts
              </h2>
              <p class="text-xs rounded-lg bg-slate-200 text-left p-2 mt-2 min-h-[24%]">
                These posts promote a product or service and encourage users
                to take action, such as making a purchase or signing up for a
                newsletter.
              </p>
              <button class=" text-left mt-2 rounded-lg text-green-500  flex items-center justify-center py-2 px-4 ring-1 border border-green-500  ">
                ADD
              </button>
            </div>
            <div class="p-2 w-[30%]  border rounded-lg mr-2 sm:mb-0 mb-6">
              <div class="rounded-lg h-auto overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-auto w-auto"
                  src={Educational}
                />
              </div>
              <h2 class="text-md font-medium title-font text-gray-900 mt-8">
                Educational Posts
              </h2>
              <p class="text-xs bg-slate-200 rounded-lg text-left p-2 mt-2 min-h-[28%]">
                Educational posts provide information or tips on a specific
                topic or area of interest.
              </p>
              <button class=" text-left  mt-2 rounded-lg text-green-500  flex items-center justify-center py-2 px-4 ring-1 border border-green-500  ">
                ADD
              </button>
            </div>
            <div class="p-2 w-[30%]  border rounded-lg mr-2 sm:mb-0 mb-2">
              <div class="rounded-lg h-auto overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-auto w-auto"
                  src={Inspiration}
                />
              </div>
              <h2 class="text-md font-medium title-font text-gray-900 mt-8">
                Inspirational Posts
              </h2>
              <p class="text-xs rounded-lg p-2 text-left bg-slate-200 mt-2 min-h-[28%]">
                Inspirational posts feature quotes or stories that inspire and
                motivate your audience
              </p>
              <button class=" text-left mt-2 rounded-lg text-green-500  flex items-center justify-center py-2 px-4 ring-1 border border-green-500  ">
                ADD
              </button>
            </div>
            
          </div>
          <div class="flex flex-wrap  mt-[5%] ">
            <div class="p-2 w-[33%] border rounded-lg mr-2 sm:mb-0 ">
              <div class="rounded-lg h-auto ">
                <img
                  alt="content"
                  class="object-cover object-center h-auto w-auto"
                  src={Seasonal}
                />
              </div>
              <h2 class="text-md font-medium title-font text-gray-900 mt-5">
                Seasonal posts
              </h2>
              <p class="text-xs rounded-lg bg-slate-200 text-left p-2 mt-2 min-h-[24%]">
                These posts promote a product or service and encourage users
                to take action, such as making a purchase or signing up for a
                newsletter.
              </p>
              <button class=" text-left mt-2 rounded-lg text-green-500  flex items-center justify-center py-2 px-4 ring-1 border border-green-500  ">
                ADD
              </button>
            </div>
            <div class="p-2 w-[30%]  border rounded-lg mr-2 sm:mb-0 mb-6">
              <div class="rounded-lg h-auto overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-auto w-auto"
                  src={Trending}
                />
              </div>
              <h2 class="text-md font-medium title-font text-gray-900 mt-8">
                Trending Topics
              </h2>
              <p class="text-xs bg-slate-200 rounded-lg text-left p-2 mt-2 min-h-[29%]">
                Educational posts provide information or tips on a specific
                topic or area of interest.
              </p>
              <button class=" text-left  mt-2 rounded-lg text-green-500  flex items-center justify-center py-2 px-4 ring-1 border border-green-500  ">
                ADD
              </button>
            </div>
            <div class="p-2 w-[30%]  border rounded-lg mr-2 sm:mb-0 mb-2">
              <div class="rounded-lg h-auto overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-auto w-auto"
                  src={Entertainment}
                />
              </div>
              <h2 class="text-md font-medium title-font text-gray-900 mt-8">
                Entertaining posts
              </h2>
              <p class="text-xs rounded-lg p-2 text-left bg-slate-200 mt-2 min-h-[29%]">
                Inspirational posts feature quotes or stories that inspire and
                motivate your audience
              </p>
              <button class=" text-left mt-2 rounded-lg text-green-500  flex items-center justify-center py-2 px-4 ring-1 border border-green-500  ">
                ADD
              </button>
            </div>
            
          </div>
          
        </div>
      </section>
      <button onClick={() => setSocialMedia(3)} class=" m-auto mt-[2%] rounded-lg bg-blue-600 text-slate-50 flex items-center justify-center py-2 px-6 ring-1 border border-blue-500 ">
              Generate Content
            </button>
    </div>
  </div>


  );
};
export default SocialTheme;
