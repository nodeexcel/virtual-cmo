import React from "react";
import { useState } from "react";
import Hovericon from "../../assets/Question.svg";

const group2 = [
  {
    name: "Headline",
    toolTipName: "Headline can have a maximum of 30 characters  ",
    src: Hovericon,
  },
  {
    name: "Description",
    toolTipName: "Descriptions can have a maximum of 90 characters",
    src: Hovericon,
  },
  {
    name: "Images",
    toolTipName:
      "Recommended sizes are 300 * 250 pixels, 336*280 pixels,728 * 90 pixels",
    src: Hovericon,
  },
  {
    name: "CTAs",
    toolTipName: "CTAs can have a maximum of 15 characters",
    src: Hovericon,
  },
];
function ButtonGroup({ selectedIndex, setSelectedIndex }) {
  const [show, setShow] = useState(null);
  return (
    <div className="flex self-center  bg-blue-100 rounded-3xl px-2 py-2 w-[70%]">
      {group2.map((value, index) => {
        return (
          <>
            {/* <button
            
            className={
              selectedIndex == index
                ? "px-4 py-1 mr-8 bg-blue-500 text-white rounded-xl text-xs"
                : "px-4 py-1 mr-6 bg-transparent text-slate-600 text-xs"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {value.name}
          </button> */}
            
            <div class="relative h-[80%]">
              <button
                className={
                  selectedIndex == index
                    ? "px-4 py-1 mr-8 h-auto w-auto  bg-blue-500 text-white rounded-xl text-xs"
                    : "px-4 py-1 mr-6 h-auto w-auto bg-transparent text-slate-600 text-xs"
                }
                onMouseOver={() => {setShow(index)}}
                onMouseOut={() => setShow(!show)}
                onClick={() => {
                  setSelectedIndex(index);
                }}
              >
                {value.name}
              </button>
            </div>
            {show===index && (
              <div class="tooltip flex  bg-blue-200 whitespace-nowrap mt-[-4%] justify-center h-auto  w-auto absolute  text-black text-xs p-1 rounded-lg">
                <img src={value.src} />
                <p className="mt-2">{value.toolTipName}</p>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default ButtonGroup;
