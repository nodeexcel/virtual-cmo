import React from "react";
import logo from '../assets/Frame2.png'

function HeroSection() {
  return (
    <div >
      <section class="text-gray-600 body-font overflow-hidden mt-[4%]">
        <div class=" px-1 py-5 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              
              <h1 class="text-blue-500 text-6xl bold title-font font-medium mb-4">
                Discover how we can help your business grow
              </h1>
              
              <p class="leading-relaxed mt-[7%]  mb-4 text-blue-500">
                Jorem ipsum dolor sit amet, consectetur adipiscing elit Nunc vulputate libero et velit interdum , ac aliquet odio mattis. class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
              
              
              
        
                
                <button class=" ml-auto mt-[8%] text-white rounded-lg bg-blue-700 border-0 py-2 px-6 focus:outline-none ">
                  Start Now
                </button>
                
              
            </div>
            <div className='h-[10%] w-[40%]'>
            <img
              
              src={logo}
            />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
