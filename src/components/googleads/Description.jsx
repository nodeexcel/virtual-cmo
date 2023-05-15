import React from "react";
import Arrow from "../../assets/Arrow.png";

function Description({setCurrScreen}) {
  return (
    <>
      {[1, 2, 3, 4, 5].map(() => (
        <div className="flex items-center justify-center overflow-hidden">
          <h1 className="text-2xl text-gray-700 flex justify-center">
            Limited offer time. Buy now and sav big{" "}
          </h1>
          <img src={Arrow} />
        </div>
      ))}

      <div className="flex  mt-4 m-auto justify-center ">
        <button  
        onClick={() => {
          setCurrScreen(4);
        }}
           className="bg-blue-500  font-bold text-sm rounded-lg py-2 px-2 mr-8 hover:bg-blue-500 text-slate-50  flex items-center justify-center hover:text-white  border border-blue-500 hover:border-transparent ">
          Email these assets
        </button>
        <button class="bg-transparent  font-bold rounded-lg py-2 px-2 hover:bg-blue-500 text-blue-700 text-sm flex items-center justify-center hover:text-white   border border-blue-500 hover:border-transparent ">
        Set up on Google Ads
        </button>
      </div>
    </>
  );
}

export default Description;
