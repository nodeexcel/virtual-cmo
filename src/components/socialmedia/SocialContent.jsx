import React from "react";
import { SocialCentre,Loader } from "./SocialMedia";

import Blogs from "../../assets/SocialContent.png";

const SocialContent = () => {
  return (
    <div className="w-[65%] m-auto h-screen mt-[2%] bg-slate-100 ">
      
      <Loader percent={60} />
      

      <div className=" m-auto mt-[8%] h-screen items-center justify-center  w-[60%]">
       
        <SocialCentre img={Blogs} />
        <p className=" m-auto font-semibold justify-center item-center py-2 px-4 text-blue-500 hover:border-transparent ">
          Working on some Social Ideas 
        </p>
        
      </div>
    </div>
  );
};
export default SocialContent;
