import React from "react";
import styles from "./logo.module.css";
function Logo({color}) {
  return (
    <>
      <span
        className={` text-xl font-semibold     ml-[-80%] mt-[5%] ${styles["logo-font"]} text-slate-50`}
      >
        VirtualCMO
      </span>
    </>
  );
}

export default Logo;
