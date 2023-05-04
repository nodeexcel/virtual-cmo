import React from "react";
import { useEffect } from "react";

import Blogs from "../../assets/WorkingCopies.png";
import { GoogleCentre } from "./Googleads";
import ProgressBar from "../common/ProgressBar"

const WorkingCopies = ({setCurrScreen}) => {
  useEffect(() => {
    setTimeout(() => {
      setCurrScreen(3)
    })
  },[])
  return (
    <div className="w-[65%] m-auto h-screen bg-slate-50  ">
     

      <ProgressBar percent={50} />

      <div className=" m-auto mt-[4%] h-screen items-center justify-center  w-[60%]">
        
        <GoogleCentre img={Blogs} />
        <p className="bg-transparent m-auto rounded-lg  text-blue-700 font-semibold flex items-center justify-center hover:text-white py-2 px-4  border-blue-500 hover:border-transparent ">
          Working on Ad Copies..
        </p>
      </div>
    </div>
  );
};
export default WorkingCopies;
