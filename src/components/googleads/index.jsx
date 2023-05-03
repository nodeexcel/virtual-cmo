import React from "react";
import { useState } from "react";
import ButtonGroup from "../ButtonGroup";
import Ctas from "./Ctas";
import Description from "./Description";

import { GoogleLoader } from "./Googleads";
import Headlines from "./Headlines";
import ImageComponent from "./ImageComponent";

const Googleads = () => {
    const [selectedIndex , setSelectedIndex] = useState(0)
  return (
    <div className="w-[65%] m-auto h-screen bg-slate-50  ">
      <div className="w-[100%] h-[15%] mt-[2%] px-8 py-8 text-md  m-auto border-1 rounded-lg text-centre bg-blue-200 text-black flex ">
        Here you go, here are some Ad copies that we can use !
      </div>

      <GoogleLoader percent={50} />

      <div className=" m-auto mt-[4%] h-auto flex flex-col items-center justify-center w-[60%]">
        <ButtonGroup selectedIndex = {selectedIndex}  setSelectedIndex = {setSelectedIndex} />
        <RenderComponent index={selectedIndex} />
      </div>
    </div>
  );
};
export default Googleads;

const RenderComponent = ({index}) => {
  switch (index) {
    case 0:
      return <Headlines />;
    case 1:
      return <Description />;
    case 2:
      return <ImageComponent />;
    case 3:
      return <Ctas />;

    default:
      return <></>;
  }
};
