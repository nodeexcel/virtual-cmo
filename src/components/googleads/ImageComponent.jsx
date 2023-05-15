import React from 'react';
import Photography from '../../assets/photographyImage.png';
import rectangle from '../../assets/Rectangle.png';

function ImageComponent({setCurrScreen}) {
  return (
    <div>
      <section class="text-gray-600 body-font mx-auto overflow-hidden">
        <div class=" container mt-[1%] px-5 py-4 mx-auto">
          <div class="flex flex-col"></div>
          <div class="flex flex-wrap justify-center  sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-1 mr-[3%] md:w-[30%] h- rounded-lg border-4 sm:mb-0 mb-6">
              <div class="rounded-lg h-42 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-auto w-full"
                  src={Photography}
                />
              </div>
              <h2 class="text-md font-medium title-font text-gray-900 mt-2">
                Photography
              </h2>
              <p class="text-xs  bg-slate-200  leading-relaxed mt-1">
               image size 1200 * 628
              </p>
              
            </div>
            <div class="p-1 border-4 mr-[1%] rounded-lg md:w-[30%] sm:mb-0 mb-6">
              <div class="rounded-lg h-42 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-auto w-full"
                  src={Photography}
                  
                />
              </div>
              <h2 class="text-md font-medium title-font text-gray-900 mt-2">
              Photography
              </h2>
              <p class="text-xs  bg-slate-200   leading-relaxed mt-1">
              image size 1200 * 1500
              </p>
             
            </div>
            <div class="p-1 border-4 rounded-lg md:w-[30%] sm:mb-0 mb-6">
              <div class="rounded-lg h-42 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-auto w-full"
                  src={Photography}
                />
              </div>
              <h2 class="text-md font-medium title-font text-gray-900 mt-2">
              Photography
              </h2>
              <p class="text-xs  bg-slate-200   leading-relaxed mt-1 ">
              image size 1200 * 1200
              </p>
              
            </div>
          </div>
          
        </div>
        <div class=" container mt-[2%] px-5 py-4 mx-auto">
          <div class="flex flex-col"></div>
          <div class="flex flex-wrap justify-center  sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-1 mr-[1%] md:w-[30%] h- rounded-lg border-4 sm:mb-0 mb-6">
              <div class="rounded-lg h-42 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-auto w-full"
                  src={rectangle}
                />
              </div>
              
            </div>
            <div class="p-1 border-4 mr-[1%] rounded-lg md:w-[30%] sm:mb-0 mb-6">
              <div class="rounded-lg h-42 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-auto w-full"
                  src={rectangle}
                  
                />
              </div>
              
             
            </div>
            <div class="p-1 border-4 rounded-lg md:w-[30%] sm:mb-0 mb-6">
              <div class="rounded-lg h-42 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-auto w-full"
                  src={rectangle}
                />
              </div>
              
              
            </div>
          </div>
          
        </div>
        <div className="flex  mt-8 m-auto justify-center ">
        
        <button
        onClick={() => {
          setCurrScreen(4);
        }} class="bg-blue-500  font-bold text-sm rounded-lg py-2 px-2 mr-8 hover:bg-blue-500 text-slate-50  flex items-center justify-center hover:text-white  border border-blue-500 hover:border-transparent ">
          Email these assets
        </button>
        <button class="bg-transparent  font-bold rounded-lg py-2 px-2 hover:bg-blue-500 text-blue-700 text-sm flex items-center justify-center hover:text-white   border border-blue-500 hover:border-transparent ">
        Set up on Google Ads

        </button>
        </div> 

      </section>
    </div>
  )
}

export default ImageComponent
