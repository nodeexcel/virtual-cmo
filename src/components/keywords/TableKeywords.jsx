import React from "react";
import keywords from "../../assets/Workingkeywords.png";

import { KeywordsCentre, KeywordsLoader } from "./Keywords";

const TableKeywords = () => {
  return (
    <div className="w-[65%]  m-auto h-screen bg-slate-100  ">
        <div className="w-[100%] h-[13%] mt-[2%] py-8 px-8 text-md  m-auto border-1 rounded-lg text-centre bg-blue-200 text-black flex ">
        Here we go, here are the top Keywords for uour business!
      </div>
      <KeywordsLoader percent={75} />

      <div className=" m-auto mt-[2%] h-auto items-center justify-center  w-[60%]">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-md  bg-blue-500 text-slate-50">
              <tr>
                <th scope="col" class="px-4 py-6 border-r font-bold text-lg dark:border-white text-left">
                  Top 10 Keywords
                </th>
                <th scope="col" class="px-6 py-2 border-r text-lg font-bold dark:border-white">
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
      <div className="flex m-auto mt-[2%] justify-center mb-[1%] items-center">
          <button class="bg-blue-500  rounded-lg py-2 px-2 mr-4 hover:bg-blue-500 text-slate-50 text-sm  hover:text-white  border border-blue-500 hover:border-transparent ">
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
