import React from "react";
import logo from "../assets/Frame7.png";
import Logo from "../components/common/logo";
import {
  LeftVerticleImg,
  VerificationContainer,
} from "../components/verification";
// import { useNavigate } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux";
import { setUrl } from "../Store/reducer/website.slice";


function Website() {
  const url = useSelector((state) => state?.WebsiteSlice?.url);
  const dispatch = useDispatch();
  const WebsiteHandler=(e)=>{
    dispatch(setUrl(e.target.value));
  }
  
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container  flex flex-wrap h-screen">
          <VerificationContainer classess={"bg-blue-500"}>
            <Logo color={"text-slate-50"} />
            <LeftVerticleImg img={logo} />
          </VerificationContainer>
          <div className="flex flex-col  lg:py-48   -mb-10 lg:w-1/2   text-center items-center justify-center h-full">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow  items-center ">
                <h2 className=" text-4xl title-font lg:pl-44  mb-1 font-bold text-blue-500">
                  What is your company's website?
                </h2>
              </div>
              <div className="flex items-center mt-9 lg:pl-40">
                <h2 className="leading-relaxed text-base">
                  {" "}
                  Enter your website url here:
                </h2>
              </div>

              <div className="lg:pl-40 mt-[5%]">
                <input
                  value={url}
                  type="text"
                  className="border-b w-[180%] mt-[10%] border-black 4px focus:outline-none focus:border-black"
                  
                />
              </div>
              <div className="items-center mt-[5%] lg:pl-[40%]">
                <button className="mt-3 w-[200%] mx-auto justify-center align-center h-[100%] text-sm text-slate-50 inline-flex items-center bg-blue-500 rounded-lg" >
                  Next
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Website;
