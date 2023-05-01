import React from "react";

export function BlogsContainer({ children, classess }) {
  return (
    <div className={` lg:mb-0 overflow-hidden  ${classess}`}>
      {children}
      
    </div>
  );
}

export function BlogsCentre({ img, children }) {
  return (
    <>
      {children}
      <img className="text-center items-center justify-center mt-[12%]  w-full h-auto " src={img} width="100%" height="auto" />
    </>
  );
}
export function Loader({classess,percent}) {
  return (
    <>
    <div className=" flex items-center justify-between border-1">
      <div className={` h-4 bg-gray-200 rounded-lg flex justify-between w-[80%] border-3 ring-1 ${classess}`} >
        <div className={`w-[${percent}%] h-[100%] bg-green-500 border-3 ring-1 rounded-lg w-[80%] `} ></div>
      </div>
      <div className="text-green-500 text-md w-[20%] ml-[2%]">
        <p>{percent}%</p>
        <p>Completed</p>
      </div>
    </div>
    </>
  );
}
