import React from "react";
import logo from "../assets/Frame4.png";
import Logo from "../components/common/logo";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPassword } from "../Store/reducer/password.slice";
import {
  LeftVerticleImg,
  VerificationContainer,
} from "../components/verification";

function Password() {
  const password = useSelector((state) => state?.PasswordSlice?.password);
  const dispatch = useDispatch();
  const PasswordHandler = (e) => {
    dispatch(setPassword(e.target.value));
  };
  const navigate = useNavigate();
  const WebSiteHandler = () => {
    navigate("/website");
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container  flex flex-wrap h-screen  ">
          <VerificationContainer classess={"bg-blue-500"}>
            <Logo color={"text-slate-50"} />
            <LeftVerticleImg img={logo} />
          </VerificationContainer>
          <div className="flex flex-col  lg:py-12   -mb-10 lg:w-1/2  lg:text-left text-center items-center justify-center h-full">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow  items-center ">
                <h2 className=" text-4xl title-font lg:pl-44  mb-1 font-bold text-blue-500">
                  Create password
                </h2>
              </div>
              <div className="flex items-center mt-9 lg:pl-40">
                <h1 className="leading-relaxed font-bold text-base">
                  {" "}
                  Password
                </h1>
              </div>

              <div className="lg:pl-40">
                <input
                  type="password"
                  value={password}
                  className="border-b w-[130%] mt-[5%] border-black focus:outline-none focus:border-black"
                  onChange={PasswordHandler}
                />

                <h1 className="mt-[5%] font-bold">Password Should be:</h1>
                <p className="text-sm">At least 8 characters</p>
                <p className="text-sm">One lowercase character</p>
                <p className="text-sm">One uppercase character</p>
                <p className="text-sm">
                  {" "}
                  One number , symbol or whitespace character
                </p>
              </div>
            </div>
            <div className="mx-auto ">
              <button
                className="mt-3 w-[240%] h-[120%]  text-sm mx-auto flex justify-center text-center  text-slate-50 inline-flex items-center bg-blue-500 rounded-lg"
                onClick={WebSiteHandler}
              >
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
      </section>
    </div>
  );
}

export default Password;
