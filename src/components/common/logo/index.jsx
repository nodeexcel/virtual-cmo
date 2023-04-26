import React from "react";
import styles from "./logo.module.css";
function Logo({color}) {
  return (
    <>
      <span
        className={`self-center text-xl font-semibold whitespace-nowrap sm:hidden  md:hidden ml-[4%] mt-[10%] ${styles["logo-font"]} ${color}`}
      >
        VirtualCMO
      </span>
    </>
  );
}

export default Logo;
