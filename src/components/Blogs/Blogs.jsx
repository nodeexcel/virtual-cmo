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
export function Loader({classess}) {
  return (
    <>
      <div className={`w-[100%] h-[1.5%] bg-gray-200 rounded-lg border-3 mt-[10%] ring-1 ${classess}`} >
        <div className="w-[10%] h-[100%] bg-blue-500 border-3 ring-1 rounded-lg" ></div><span>2% Completed</span>
      </div>
    </>
  );
}
