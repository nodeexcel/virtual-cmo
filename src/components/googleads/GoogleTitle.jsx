import React, {useState} from "react";
import ButtonGroup from "../ButtonGroup";
import ProgressBar from "../common/ProgressBar";
import Ctas from "./Ctas";
import Description from "./Description";
import GoogleMailed from "./GoogleMailed";

import Headlines from "./Headlines";
import ImageComponent from "./ImageComponent";

const Googleads = ({setCurrScreen}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="w-[80%] flex flex-col h-screen rounded-lg bg-white mt-[2%]">
      <div className="w-[100%] h-[14%] p-5 rounded-lg  items-center  bg-blue-200 flex ">
        <h1 className="text-black text-2xl font-medium  leading-9 text-left ml-[3%]">
          Here you go, here are some Ad copies that we can use !
        </h1>
      </div>

      <ProgressBar percent={50} />

      <div className="mt-[4%] flex flex-col items-center self-center w-[80%]">
        <ButtonGroup
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <RenderComponent index={selectedIndex} setCurrScreen={setCurrScreen}/>
      </div>
    </div>
  );
};
export default Googleads;

const RenderComponent = ({ index, setCurrScreen }) => {
  switch (index) {
    case 0:
      return <Headlines setCurrScreen={setCurrScreen}/>;
    case 1:
      return <Description setCurrScreen={setCurrScreen}/>;
    case 2:
      return <ImageComponent setCurrScreen={setCurrScreen}/>;
    case 3:
      return <Ctas setCurrScreen={setCurrScreen}/>;
    

    default:
      return <></>;
  }
};
