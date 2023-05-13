import React from "react";
import card from "../../assets/Youtube.png";

export const CardItem = ({ setCurrScreen }) => {
  return (
    <div>
      <div className="flex justify-between mt-[4%] mb-[2%]">
        <h2 className="text-black text-sm">Total Word Count</h2>
        <h1 className="text-blue-500 text-sm">#1000</h1>
      </div>
      <div className="flex justify-between mt-[3%] mb-[2%]">
        <h2 className="text-black text-sm">Keyword Count</h2>
        <h1 className="text-blue-500 text-sm">#100k</h1>
      </div>
      <div className="flex justify-between mt-[3%] mb-[2%]">
        <h2 className="text-black text-sm">Traffic potential</h2>
        <h1 className="text-blue-500 text-sm">#100k</h1>
      </div>
      <button
        onClick={() => setCurrScreen(4)}
        class="bg-transparent  rounded-lg mt-[5%] font-bold hover:bg-blue-500 text-blue-700 text-sm flex  hover:text-white py-2 px-4  ring-1 border border-blue-500 hover:border-transparent "
      >
        Generate Blog
      </button>
    </div>
  );
};

export const Card = ({ img, heading, description, setCurrScreen }) => {
  return (
    <div>
      <section class="text-gray-600 body-font  mx-auto">
        <div class=" container px-5 py-4 mx-auto">
          <div class="flex flex-row">
          {[1,2,3].map(() => <div class="flex flex-wrap justify-center  sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="mx-5 shadow-lg rounded-lg">
              <div class="rounded-lg h-42 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-auto w-full"
                  src={img}
                />
              </div>
              <div className="px-2">
                <h2 class="text-lg font-medium title-font text-gray-900 mt-2">
                  {heading}
                </h2>
                <p class="text-xs border-1 bg-slate-200 p-1 rounded-lg  leading-relaxed mt-1 ">
                  {description}
                </p>
                <div className="mb-3">
                  <CardItem setCurrScreen={setCurrScreen} />
                </div>
              </div>
            </div>
          </div>
          )}
          </div>
        </div>
      </section>
    </div>
  );
};
