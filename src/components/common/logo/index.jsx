import React from "react";
import styles from "./logo.module.css";
function Logo() {
  return (
    <>
      <span
        className={`self-center text-xl font-semibold whitespace-nowrap text-blue-500 ${styles["logo-font"]}`}
      >
        VirtualCMO
      </span>
    </>
  );
}

export default Logo;
