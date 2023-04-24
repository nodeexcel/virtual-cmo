import React from "react";
import logo from "../assets/Frame3.png";
import Logo from "../components/common/logo";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../Store/reducer/loginpage.slice";

import {
  LeftVerticleImg,
  VerificationContainer,
} from "../components/verification";
import { BsFacebook , BsGoogle} from "react-icons/bs";


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
      <div className="flex flex-col mb-10 lg:items-start items-center justify-center h-full w-full">
        <div className="items-center ">
          <h2 className=" text-4xl title-font lg:pl-44 flex justify-center text-center  mb-1 font-bold text-blue-500">
            Sign Up
          </h2>
          
          <p className="leading-relaxed items-center  lg:pl-44 text-base">
            Porem ipsum dolar sit amet, consectetur adipiscing elit. Nunc
          </p>
          <div className="lg:pl-38 h-[100%] w-[120%]">
            <button className="mt-[3%] w-[60%] h-[30%] font-bold   m-auto flex justify-center text-center align-center text-md text-slate-50  items-center bg-blue-500 rounded-lg">
              <BsGoogle className="mr-6 text-black" />
              Signup with Google
            </button>
            <button className="mt-[3%] w-[60%] h-[30%]   m-auto flex justify-center text-center align-center text-md font-bold text-black  items-center border rounded-lg">
              <BsFacebook className="mr-5" />
              Signup with Facebook
            </button>
          </div>
          <small className="lg:pl-40 dashed-or mt-[-5%] flex justify-center text-center items-center">Or</small>
        </div>

        <div className="flex items-center mt-[17%] lg:pl-40">
          <h3 className="leading-relaxed font-bold text-base">
            
            Email Address
          </h3>
        </div>

        <div className="lg:pl-40">
          <input
            type="text"
            value={email}
            className="border-b  w-[245%] mt-[10%] border-black focus:outline-none focus:border-black"
            onChange={EmailHandler}
          />
        </div>

        <button
          className="mx-auto mt-[5%]  w-[20%] h-[5%]  justify-center align-center text-sm text-slate-50 inline-flex items-center bg-blue-500 rounded-lg"
          onClick={VerifyHandler}
        >
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
);

function Loginpage() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className=" flex flex-wrap h-screen">
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
