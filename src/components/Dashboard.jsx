import React from "react";

import BlogsImage from "../assets/dashboard/blogsDashboard.svg"
import SocialImage from "../assets/dashboard/socialMediaDashboard.svg"
import KeywordsImage from "../assets/dashboard/keywordsDashboard.svg"
import AdCopiesImage from "../assets/dashboard/adCopiesDashboard.svg"



const Dashboard = () => {
  return (
    <div className="w-[80%] flex rounded-lg bg-white">
      <section class="text-gray-600 w-full body-font">
        <div className="w-[100%] p-5 rounded-t-lg  bg-blue-200 flex ">
          <h1 className="text-black text-2xl font-medium leading-9 text-left">
            I have scanned through your website and I’m good to start on the below marketing tasks.
          </h1>
        </div>
        <div className="flex flex-row flex-wrap mt-10 items-center justify-center self-center">
          <div className="border-1 w-[50%] flex flex-col items-center justify-center mb-6 ">
            <h1 className="font-bold text-base text-blue-700">Blogs</h1>
            <img src={BlogsImage} alt={"BlogsImage"} height={400} width={400}/>
            <button className=" border-2 rounded-2xl py-3 px-9 border-blue-700 font-semibold text-blue-700 text-xs ">Generate</button>
          </div>
          <div className="border-1 w-[50%] flex flex-col items-center justify-center mb-6 ">
            <h1 className="font-bold text-base text-blue-700">Social Media Content </h1>
            <img src={SocialImage} alt={"SocialImage"} height={250} width={250}/>
            <button className=" border-2 rounded-2xl py-3 px-9 border-blue-700 font-semibold text-blue-700 text-xs ">Generate</button>
          </div>
          <div className="border-1 w-[50%] flex flex-col items-center justify-center mb-6 ">
            <h1 className="font-bold text-base text-blue-700">Keywords</h1>
            <img src={KeywordsImage} alt={"KeywordsImage"} height={250} width={250}/>
            <button className=" border-2 rounded-2xl py-3 px-9 border-blue-700 font-semibold text-blue-700 text-xs ">Generate</button>
          </div>
          <div className="border-1 w-[50%] flex flex-col items-center justify-center mb-6 ">
            <h1 className="font-bold text-base text-blue-700">Ad copies</h1>
            <img src={AdCopiesImage} alt={"AdCopiesImage"} height={250} width={250}/>
            <button className=" border-2 rounded-2xl py-3 px-9 border-blue-700 font-semibold text-blue-700 text-xs ">Generate</button>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
