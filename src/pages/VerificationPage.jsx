import React from "react";
import logo from "../assets/Frame3.png";
import Logo from "../components/common/logo";
import {
  LeftVerticleImg,
  VerificationContainer,
} from "../components/verification";

const EmailVerifyInput = () => {
  return (
    <>
      <div class="flex flex-col mb-10 lg:items-start items-center justify-center h-full">
        <div class="items-center ">
          <h2 class=" text-4xl title-font lg:pl-44  mb-1 font-bold text-blue-700">
            Check Your Mail
          </h2>
          <p class="leading-relaxed items-center  lg:pl-44 text-base">
            Please enter the Verification Code
          </p>
        </div>
        <div className="flex items-center mt-9 lg:pl-40">
          <h3 class="leading-relaxed text-base"> Verification Code</h3>
        </div>

        <div className="lg:pl-40">
          <input
            type="text"
            class="border-b w-[100%] mt-[10%] border-black focus:outline-none focus:border-black"
          />
          <p className="mt-[5%]">Didn't get the mail??</p>
          <p className="text-green-500 text-lg">
            Resend or edit your email address
          </p>
        </div>

        <button class="mt-[3%] w-[30%] h-[6%] mx-auto justify-center align-center text-xl text-slate-50 inline-flex items-center bg-blue-700 rounded-lg  ">
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
    </>
  );
};

const ImgText = () => (
  <>
    <h2 className="text-4xl mt-[10%] font-bold text-slate-50 ml-[5%]">
      Norem ipsum dolor
    </h2>
    <p className="text-slate-50 ml-[5%] mt-[3%]">
      Unlock the Power of AI for Your Digital Marketing Needs{" "}
    </p>
  </>
);

function VerificationPage() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container  flex flex-wrap h-screen">
          <VerificationContainer classess={"bg-blue-500"}>
            <Logo />
            <LeftVerticleImg img={logo}>
              <ImgText />
            </LeftVerticleImg>
          </VerificationContainer>
          <VerificationContainer>
            <EmailVerifyInput />
          </VerificationContainer>
        </div>
      </section>
    </>
  );
}

export default VerificationPage;
