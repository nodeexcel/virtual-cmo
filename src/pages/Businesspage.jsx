import React from "react";
import B2B from "../assets/B2B.png";
import B2C from "../assets/B2C.png";
import Ecom from "../assets/Ecom.png";
import Freelancer from "../assets/Academic.png";
import Academic from "../assets/Freelancer.png";
import Content from "../assets/Content.png";
import { useNavigate } from "react-router-dom";

function Business() {
  const navigate = useNavigate();
  const BusinessHandler = () => {
    navigate("/loginpage");
  };
  return (
    <section className="text-gray-600 bg-blue-600 body-font min-h-screen w-[100vw]">
      <div className="w-full py-1- mx-auto justify-center">
        <div className="flex flex-col text-center ">
          <h1 className="lg:text-6xl md:text-6xl sm:text-6xl font-bold text-white mb-10 mt-5">
            What Business do you run ?
          </h1>
        </div>
        <div className="flex flex-wrap justify-center text-center">
          {/* <Link to="/dashboard"> */}
          <div className="sm:w-1/2 md:w-2/2 lg:w-1/3 xl:w-1/3 p-4 -mr-[12%]">
            <div className="bg-gray-100 p-4 h-70 w-60 rounded-lg">
              <img
                className="h-20 w-40 mx-auto rounded object-cover object-center mb-6"
                src={B2B}
                alt="content"
              />
              <h2 className="sm:text-2xl md:text-3xl lg:text-lg text-gray-900 text-center  font-medium title-font mb-4">
                B2B
              </h2>
              <p className="leading-relaxed text-center">
                You sell your product or services to other Businesses
              </p>
              <p
                onClick={BusinessHandler}
                className="text-blue-600 text-center font-bold mt-5"
              >
                Sign Up
              </p>
            </div>
          </div>
          {/* </Link> */}
          <div className="xl:w-1/3 md:w-1/2 -mr-[12%] p-4">
            <div className="bg-gray-100 p-4 h-70 w-60 rounded-lg">
              <img
                className="h-20 w-40 mx-auto rounded object-cover object-center mb-6"
                src={B2C}
                alt="content"
              />
              <h2 className="text-lg text-gray-900 text-center font-medium title-font mb-4">
                B2C
              </h2>
              <p className="leading-relaxed text-center">
                You sell your product oe services to other Businesses
              </p>
              <p 
              onClick={BusinessHandler}
              className="text-blue-600 text-center font-bold mt-5">

                Sign Up
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 -mr-[12%] p-4">
            <div className="bg-gray-100 p-4 h-70 w-60 rounded-lg">
              <img
                className="h-20 w-40 mx-auto rounded object-cover object-center mb-6"
                src={Ecom}
                alt="content"
              />
              <h2 className="text-lg text-gray-900 text-center font-medium title-font  mb-4">
                E-commerce
              </h2>
              <p className="leading-relaxed text-center">
                You sell your product oe services to other Businesses
              </p>
              <p
              onClick={BusinessHandler}
               className="text-blue-600 text-center font-bold mt-5">
                Sign Up
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center text-center">
          <div className="xl:w-1/3 md:w-1/2 -mr-[12%] p-4">
            <div className="bg-gray-100 p-4 h-70 w-60 rounded-lg">
              <img
                className="h-20 w-40 mx-auto rounded object-cover object-center mb-6"
                src={Content}
                alt="content"
              />
              <h2 className="text-lg text-gray-900 text-center font-medium title-font mb-4">
                Content Creator
              </h2>
              <p className="leading-relaxed text-center">
                You sell your product oe services to other Businesses
              </p>
              <p 
              onClick={BusinessHandler}
               className="text-blue-600 text-center font-bold mt-5">
                Sign Up
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 -mr-[12%] p-4">
            <div className="bg-gray-100 p-4 h-70 w-60 rounded-lg">
              <img
                className="h-20 w-40 mx-auto rounded object-cover object-center mb-6"
                src={Freelancer}
                alt="content"
              />
              <h2 className="text-lg text-gray-900 text-center font-medium title-font mb-4">
                Academician
              </h2>
              <p className="leading-relaxed text-center">
                You sell your product oe services to other Businesses
              </p>
              <p
              onClick={BusinessHandler}
               className="text-blue-600 text-center font-bold mt-5">
                Sign Up
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 -mr-[12%] p-4">
            <div className="bg-gray-100 p-4 h-70 w-60 rounded-lg">
              <img
                className="h-20 w-40 mx-auto rounded object-cover object-center mb-6"
                src={Academic}
                alt="content"
              />
              <h2 className="text-lg text-gray-900 text-center font-medium title-font mb-4">
                Freelancer
              </h2>
              <p className="leading-relaxed text-center">
                You sell your product oe services to other Businesses
              </p>
              <p 
              onClick={BusinessHandler}
               className="text-blue-600 text-center font-bold mt-5">
                Sign Up
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Business;
