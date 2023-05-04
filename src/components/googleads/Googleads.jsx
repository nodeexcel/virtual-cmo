import React from "react";

export function GoogleContainer({ children, classess }) {
  return (
    <div className={` lg:mb-0 overflow-hidden  ${classess}`}>{children}</div>
  );
}

export function GoogleCentre({ img, children }) {
  return (
    <>
      {children}
      <img
        className="text-center items-center justify-center mt-[2%]  w-full h-auto "
        src={img}
        width="100%"
        height="auto"
      />
    </>
  );
}

