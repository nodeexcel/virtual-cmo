import React from "react";
import logo from "../assets/Frame4.png";
import Logo from "../components/common/logo";
import { LeftVerticleImg, VerificationContainer } from "../components/verification";
function Website() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container  flex flex-wrap h-screen">
        <VerificationContainer classess={"bg-blue-500"}>
            <Logo/>
            <LeftVerticleImg img={logo} />
          </VerificationContainer>
          <div class="flex flex-col  lg:py-48   -mb-10 lg:w-1/2  lg:text-left text-center items-center justify-center h-full">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow  items-center ">
                <h2 class=" text-4xl title-font lg:pl-44  mb-1 font-bold text-blue-500">
                  What is your company's website?
                </h2>
              </div>
              <div className="flex items-center mt-9 lg:pl-40">
                <h2 class="leading-relaxed text-base">
                  {" "}
                  Enter your website url here:
                </h2>
              </div>

              <div className="lg:pl-40 mt-[5%]">
                <input
                  type="text"
                  class="border-b w-[180%] mt-[10%] border-black 4px focus:outline-none focus:border-black"
                />
              </div>
              <div className="items-center mt-[5%] lg:pl-[40%]">
                <button class="mt-3 w-[140%] mx-auto justify-center align-center h-[100%] text-xl text-slate-50 inline-flex items-center bg-blue-700 rounded-lg  ">
                  Next
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
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
