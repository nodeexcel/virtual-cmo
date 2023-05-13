import React from "react";
import logo from "../assets/Frame3.png";
import Google from "../assets/Google.svg";
import Facebook from "../assets/Facebook.png";

import Logo from "../components/common/logo";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../Store/reducer/loginpage.slice";
import { LeftVerticleImg, VerificationContainer } from "../components/verification";



const VerificationPage = () => {
  const email = useSelector((state) => state?.LoginpageSlice?.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const EmailHandler = (e) => {
    dispatch(setEmail(e.target.value));
  };
  const VerifyHandler = () => {
    navigate("/verificationpage");
  };
  return (
    <>
     <div className="flex flex-col mb-10 lg:items-start items-center justify-center h-full">
        <div className="items-center mx-auto ">
          <h2 className=" text-4xl title-font   mb-1 font-bold text-blue-700">
          Sign Up
          </h2>
         
        </div>
        <div className="mx-auto w-[100%]">
        <button className="mt-[4%] w-[60%] h-[26%] font-bold px-6  m-auto flex justify-center text-center align-center text-md text-slate-50  items-center bg-blue-500 rounded-lg">
              <img className="h-auto mr-8" src={Google}/>
              Signup with Google
            </button>
            <button className="mt-[4%] w-[60%] h-[26%]   m-auto flex justify-center text-center align-center text-md font-bold text-black  items-center border rounded-lg">
            <img className="h-[85%] mr-6" src={Facebook}/>
              Signup with Facebook
            </button>
         
          <small className=" dashed-or mt-[2%] flex justify-center text-center items-center">
            Or
          </small>
         
        </div>
        <div className="flex items-center mt-[4%] mb-[1%] ml-[20%]">
          <h3 className="leading-relaxed text-base">Email Address</h3>
        </div>
        
        <div className="mx-auto w-[60%]">
          
          <input
            type="text"
            value={email}
            className="border-b w-[100%] mt-[2%] border-blue-700 focus:outline-none "
            onChange={EmailHandler}
          />
         
        </div>

        <button
          className="mt-[3%] w-[20%] h-[5%] mx-auto justify-center align-center text-sm text-slate-50 inline-flex items-center bg-blue-500 rounded-lg"
          onClick={VerifyHandler}
        >
          Next
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
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
      Get Future Ready
    </h2>
    <p className="text-slate-50 ml-[5%] mt-[3%]">
      Goodbye marketing monotony, hello automated awesomeness!{" "}
    </p>
  </>
);

function Loginpage() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className=" flex flex-wrap h-screen class md:m-auto">
          <VerificationContainer
            classess={"bg-blue-500 sm:hidden md:hidden lg:block"}
          >
            <Logo color={"text-slate-50"} />
            <LeftVerticleImg img={logo}>
              <ImgText />
            </LeftVerticleImg>
          </VerificationContainer>
          <VerificationContainer classess={"sm:m-auto md:m-auto"}>
            <VerificationPage />
          </VerificationContainer>
        </div>
      </section>
    </>
  );
}

export default Loginpage;
