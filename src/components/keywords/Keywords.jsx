import React from "react";

export function KeywordsContainer({ children, classess }) {
  return (
    <div className={` lg:mb-0 overflow-hidden  ${classess}`}>{children}</div>
  );
}

export function KeywordsCentre({ img, children }) {
  return (
    <>
      {children}
      <img
        className="text-center items-center justify-center mt-[5%]  w-full h-auto "
        src={img}
        width="100%"
        height="auto"
      />
    </>
  );
}

