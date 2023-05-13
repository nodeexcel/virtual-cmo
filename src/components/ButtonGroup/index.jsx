import React from "react";

const group2 = [
  {
    name: "Headline",
    toolTipName: "Headline can have a maximum of 30 characters  ",
  },
  {
    name: "Description",
    toolTipName: "Descriptions can have a maximum of 90 characters",
  },
  {
    name: "Images",
    toolTipName: "Recommended sizes are Landscape (1200*628),Potrait(1200*1500),Square(1200*1200).",
  },
  {
    name: "CTAs",
    toolTipName: "CTAs can have a maximum of 15 characters",
  },
];
function ButtonGroup({ selectedIndex, setSelectedIndex }) {
  return (
    <div className="flex self-center  bg-blue-50 rounded-3xl px-2 py-2 w-[70%]">
      {group2.map((value, index) => {
        return (
          <>
            {/* <button
            key={index}
            className={
              selectedIndex == index
                ? "px-4 py-1 mr-8 bg-blue-500 text-white rounded-xl text-xs"
                : "px-4 py-1 mr-6 bg-transparent text-slate-600 text-xs"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {title}
          </button> */}
            <div class="relative">
              <div class="tooltip bg-blue-200 font-bold opacity-0 absolute h-[10%] text-black text-sm py-1 px-2 rounded-lg hover:opacity-100">
               <p>{value.toolTipName}</p> 
              </div>
              <button
                class="bg-blue-500 mr-8 text-white px-4 py-1 rounded-lg hover:opacity-75"
                onClick={() => {
                  setSelectedIndex(index);
                }}
              >
                {value.name}
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ButtonGroup;
