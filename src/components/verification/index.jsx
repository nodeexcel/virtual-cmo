import React from "react";

export function VerificationContainer({ children, classess }) {
  return (
    <div className={`lg:w-1/2 w-full 0 lg:mb-0 overflow-hidden ${classess}`}>
      {children}
    </div>
  );
}

export function LeftVerticleImg({ img, children }) {
  return (
    <>
      {children}
      <img className="text-center items-center justify-center mt-[15%]" src={img} />
    </>
  );
}