import React, { useEffect } from "react";
import { SocialCentre } from "./SocialMedia";

import Blogs from "../../assets/SocialContent.png";
import ProgressBar from "../common/ProgressBar";

const SocialContent = ({setSocialMedia}) => {
  useEffect(() => {
    setTimeout(() => {
      setSocialMedia(4);
    }, 2000);
  }, []);
  return (
    <div className="w-[65%] m-auto h-screen mt-[2%] bg-slate-50 ">
       <div className="w-[100%] h-[12%] mt-[1%] px-8 py-8 text-md  m-auto border-1 rounded-lg text-centre bg-blue-200 text-black flex ">
       Creating social media posts on the basis of themes selected
      </div>
      <ProgressBar percent={60} />
      

      <div className=" m-auto mt-[8%] h-screen items-center justify-center  w-[60%]">
       
        <SocialCentre img={Blogs} />
        <p className=" m-auto font-semibold justify-center item-center py-2 px-4 text-blue-500 hover:border-transparent ">
          Working on some content ideas... 
        </p>
        
      </div>
    </div>
  );
};
export default SocialContent;
