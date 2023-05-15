import React from "react";
import RedReload from "../../assets/ArrowClockwise.svg";

function Headlines({setCurrScreen}) {
  return (
    <>
      {[1, 2, 3, 4, 5].map(() => {
        return (
          
          <div className="flex justify-center items-center">
            <h1 className="text-3xl  text-gray-700 flex justify-center ">
              Get off 50% only this Sunday{" "}
            </h1>
            <img src={RedReload}/>
          </div>
        );
      })}

      <div className="flex  mt-4 m-auto justify-center ">
        <button 
        onClick={() => {
          setCurrScreen(4);
        }}
        
        class="bg-blue-500  font-bold text-sm rounded-lg py-2 px-2 mr-8 hover:bg-blue-500 text-slate-50  flex items-center justify-center hover:text-white  border border-blue-500 hover:border-transparent ">
          Email these assets
        </button>
        <button class="bg-transparent  font-bold rounded-lg py-2 px-2 hover:bg-blue-500 text-blue-700 text-sm flex items-center justify-center hover:text-white   border border-blue-500 hover:border-transparent ">
        Set up on Google Ads
        </button>
      </div>
    </>
  );
}

export default Headlines;
