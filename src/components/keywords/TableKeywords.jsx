import React from "react";
import ProgressBar from "../common/ProgressBar";

const TableKeywords = ({ setCurrScreen }) => {
  return (
    <div className="w-[80%] flex flex-col h-screen rounded-lg bg-white mt-[2%] overflow-hidden">
      <div className="w-[100%] h-[15%] p-5 rounded-t-lg  bg-blue-200 flex ">
        <h1 className="text-black text-2xl font-medium leading-9 text-left">
          Here you go, here are the top keywords for your business!
        </h1>
      </div>
      <ProgressBar percent={80} />

      <div className=" mt-[4%] h-auto self-center w-[80%]">
        <div class="relative overflow-x-auto shadow-md">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-md  bg-blue-500 text-slate-50">
              <tr>
                <th
                  scope="col"
                  class="px-4 py-2 border-r font-bold text-lg dark:border-white text-left"
                >
                  Top 10 Keywords
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 border-r text-lg font-bold dark:border-white"
                >
                  Ranking
                </th>
                <th scope="col" class="px-6 py-2">
                  CTR
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white  dark:bg-blue-200 text-black dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-2 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap"
                >
                  Porem
                </th>
                <td class="px-6 py-2 border-r dark:border-gray-700">#1</td>
                <td class="px-6 py-2">CTR</td>
              </tr>
              <tr class=" text-black ">
                <th
                  scope="row"
                  class="px-6 py-2 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap"
                >
                  Yorem
                </th>
                <td class="px-6 py-2 border-r dark:border-gray-700">#2</td>
                <td class="px-6 py-2">CTR</td>
              </tr>
              <tr class="bg-white  dark:bg-blue-200 text-black dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-2 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap"
                >
                  Qorem
                </th>
                <td class="px-6 py-2 border-r dark:border-gray-700">#3</td>
                <td class="px-6 py-2">CTR</td>
              </tr>
              <tr class=" text-black ">
                <th
                  scope="row"
                  class="px-6 py-2 border-r dark:border-gray-700  font-medium text-black whitespace-nowrap"
                >
                  Yorem
                </th>
                <td class="px-6 py-2 border-r dark:border-gray-700">#4</td>
                <td class="px-6 py-2">CTR</td>
              </tr>
              <tr class="bg-white  dark:bg-blue-200 text-black dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-2 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap"
                >
                  Qorem
                </th>
                <td class="px-6 py-2 border-r dark:border-gray-700">#5</td>
                <td class="px-6 py-2">CTR</td>
              </tr>
              <tr class="border-b text-black ">
                <th
                  scope="row"
                  class="px-6 py-2 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap"
                >
                  Yorem
                </th>
                <td class="px-6 py-2 border-r dark:border-gray-700">Ranking</td>
                <td class="px-6 py-2">CTR</td>
              </tr>
              <tr class="bg-white  dark:bg-blue-200 text-black dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-2 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap"
                >
                  Qorem
                </th>
                <td class="px-6 py-2 border-r dark:border-gray-700">Ranking</td>
                <td class="px-6 py-2">CTR</td>
              </tr>
              <tr class="border-b text-black  ">
                <th
                  scope="row"
                  class="px-6 py-2 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap"
                >
                  Yorem
                </th>
                <td class="px-6 py-2 border-r dark:border-gray-700">Ranking</td>
                <td class="px-6 py-2">CTR</td>
              </tr>
              <tr class="bg-white  dark:bg-blue-200 text-black dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-2 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap"
                >
                  Qorem
                </th>
                <td class="px-6 py-2 border-r dark:border-gray-700">Ranking</td>
                <td class="px-6 py-2">CTR</td>
              </tr>
              <tr class="border-b text-black ">
                <th
                  scope="row"
                  class="px-6 py-2 border-r dark:border-gray-700 font-medium text-black whitespace-nowrap"
                >
                  Yorem
                </th>
                <td class="px-6 py-2 border-r dark:border-gray-700">Ranking</td>
                <td class="px-6 py-2">CTR</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex m-auto mt-[4%] justify-center mb-[1%] items-center">
        <button
          onClick={() => setCurrScreen(4)}
          class="bg-blue-500  rounded-lg py-2 px-2 mr-4 hover:bg-blue-500 text-slate-50 text-sm  hover:text-white  border border-blue-500 hover:border-transparent "
        >
          Email this Sheet
        </button>
        <button class="bg-transparent  rounded-lg py-2 px-2 hover:bg-blue-500 text-blue-700 text-sm flex  hover:text-white   border border-blue-500 hover:border-transparent ">
          Setup on google ads
        </button>
      </div>
    </div>
  );
};
export default TableKeywords;
