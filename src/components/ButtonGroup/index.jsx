import React from "react";


const group = ["Headline", "Description", "Images", "CTAs"];

function ButtonGroup({selectedIndex , setSelectedIndex}) {

  return (
    <div className="flex self-center border-2 rounded-xl p-1 w-[60%]">
      {group.map((title, index) => {
        return (
          <button
            key={index}
            className={selectedIndex == index ? "px-1 py-1 mr-8 bg-blue-500 border rounded-lg text-xs " : "mr-6 bg-transparent text-xs"}
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
