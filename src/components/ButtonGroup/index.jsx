import React from "react";

const group = ["Headline", "Description", "Images", "CTAs"];

function ButtonGroup({ selectedIndex, setSelectedIndex }) {
  return (
    <div className="flex self-center  bg-blue-50 rounded-3xl px-2 py-2 w-[70%]">
      {group.map((title, index) => {
        return (
          <button
            key={index}
            className={
              selectedIndex == index
                ? "px-4 py-1 mr-8 bg-blue-500 text-white rounded-xl text-xs "
                : "px-4 py-1 mr-6 bg-transparent text-slate-600 text-xs"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {title}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonGroup;
