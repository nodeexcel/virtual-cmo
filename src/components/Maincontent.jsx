import React from 'react';
import dashboard1 from "../assets/Dashboard1.png";
import dashboard2 from "../assets/Dashboard2.png";
import dashboard3 from "../assets/Dashboard3.png";
import dashboard4 from "../assets/Dashboard4.png";


const SetDashboard = [
    { src: dashboard1},
    { src: dashboard2  },
    { src: dashboard3  },
    { src: dashboard4  }]


const Maincontent = () => {
    
  return (
    <div className='w-[65%] flex bg-slate-200'>
     
     <section class="text-gray-600 w-full body-font">
  <div class=" px-5 py-24 mx-auto w-full content_image">
    <div class="flex justify-center text-center mt-[5%]">
      <div class="lg:w-full md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={dashboard1}/>
        </a>
       
      </div>
      <div class="lg:w-full md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={dashboard2}/>
        </a>
       
      </div>
      </div>
    <div class="flex mt-[10%]">

      <div class="lg:w-full md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={dashboard3}/>
        </a>
       
      </div>
      <div class="lg:w-full md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={dashboard4}/>
        </a>
       
      </div>
      
      <div>
      </div>
      </div>
      <div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Maincontent
