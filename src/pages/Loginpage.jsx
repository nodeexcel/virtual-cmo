import React from 'react';
import logo from "../assets/Frame3.png";
import Logo from "../components/common/logo";
import {
    LeftVerticleImg,
    VerificationContainer,
  } from "../components/verification";
//   import { BsFacebook } from 'react-icons/fa';

const VerificationPage = () => {
  return (
    <>
    <div className="flex flex-col mb-10 lg:items-start items-center justify-center h-full">
        <div className="items-center ">
          <h2 className=" text-4xl title-font lg:pl-44 flex justify-center text-center  mb-1 font-bold text-blue-500">
            Sign Up
          </h2>
          <p className="leading-relaxed items-center  lg:pl-44 text-base">
            Porem ipsum dolar sit amet, consectetur adipiscing elit. Nunc
          </p>
          
          <button className="mt-[3%] w-[60%] h-[35%] font-bold   mx-auto flex justify-center text-center align-center text-md text-slate-50  items-center bg-blue-500 rounded-lg">
          Signup with Google
          </button>
          <button className="mt-[3%] w-[60%] h-[35%]   mx-auto flex justify-center text-center align-center text-md font-bold text-black  items-center border rounded-lg">
          Signup with Facebook
          </button>
        </div>
       
        <div className="flex items-center mt-[20%] lg:pl-40">
          <h3 className="leading-relaxed font-bold text-base"> Email Address</h3>
        </div>

        <div className="lg:pl-40">
          <input
            type="text"
            
            className="border-b w-[180%] mt-[10%] border-black focus:outline-none focus:border-black"
            
          />
          
        </div>

        <button className="mt-[3%] w-[20%] h-[5%] mx-auto justify-center align-center text-sm text-slate-50 inline-flex items-center bg-blue-500 rounded-lg">
          Verify email
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
      Norem ipsum dolor
    </h2>
    <p className="text-slate-50 ml-[5%] mt-[3%]">
      Unlock the Power of AI for Your Digital Marketing Needs{" "}
    </p>
  </>
   
  )

function Loginpage() {
    return (
      <>
        <section className="text-gray-600 body-font">
          <div className="container  flex flex-wrap h-screen">
            <VerificationContainer classess={"bg-blue-500"}>
              <Logo color={"text-slate-50"} />
              <LeftVerticleImg img={logo}>
                <ImgText />
              </LeftVerticleImg>
            </VerificationContainer>
            <VerificationContainer>
              <VerificationPage />
            </VerificationContainer>
          </div>
        </section>
      </>
    );
  }
  
  export default Loginpage;


