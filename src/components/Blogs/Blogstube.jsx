import React from "react";
import blogs from "../../assets/Youtube.png";

import { Card } from "../cards/Card";
import ProgressBar from "../common/ProgressBar";

const Blogstube = ({ setCurrScreen }) => {
  return (
    <div className=" w-[80%] h-screen flex flex-col rounded-lg bg-white mt-[8%] ">
      <div className="w-[100%] h-[15%] p-5 rounded-t-lg  bg-blue-200 flex ">
        <h1 className="text-black text-2xl font-medium leading-9 text-left">
          Here are the some blog topic that we can write about!
        </h1>
      </div>

      <ProgressBar percent={40} />

        <h1 className=" mt-30 text-xl text-slate-700 flex item-center justify-center ">
          Select a topic and click on generate blog
        </h1>
        <div className="mt-5">
        <Card
          setCurrScreen={setCurrScreen}
          img={blogs}
          heading={"How to grow on youtube?"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          }
        />
        </div>

    </div>
  );
};
export default Blogstube;
