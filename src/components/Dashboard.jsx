import React from "react";
import logo from "../assets/Frame8.png";
import logo1 from "../assets/Frame9.png";
import logo2 from "../assets/Frame10.png";
import logo3 from "../assets/Frame11.png";
import logo4 from "../assets/Frame12.png";
import logo5 from "../assets/Frame13.png";
import logo6 from "../assets/Frame14.png";

const Inner = ()=>
<ul class="max-w-md justify-center text-center mt-[18%] ml-[5%]">
   <li class="pb-0 sm:pb-2">
      <div class="flex items-center ">
         
         <div class="min-w-0">
            
            <p class="text-md  text-black truncate ">
               Content Marketing
            </p>
         </div>
         
      </div>
   </li>
   <li class="py-3 sm:py-3">
      <div class="flex items-center ">
        
         <div class="min-w-0">
            
            <p class="text-md  text-black truncate">
            Performance  Marketing
           </p>
         </div>
         
      </div>
   </li>
   <li class="py-3 sm:py-3">
      <div class="flex items-center ">
        
         <div class=" min-w-0">
           
            <p class="text-md text-black  truncate ">
            Email  Marketing
            </p>
         </div>
         
      </div>
   </li>
   <li class="py-3 sm:py-3">
      <div class="flex items-center ">
         
         <div class=" min-w-0">
           
            <p class="text-md text-black truncate">
               Social Media Management
            </p>
         </div>
         
      </div>
   </li>
   <li class="pt-3 pb-0 sm:py-3">
      <div class="flex items-center ">
        
         <div class=" min-w-0">
           
            <p class="text-md text-black truncate ">
               History
            </p>
         </div>
        
      </div>
   </li>
   <li class="pt-3 pb-0 sm:pt-">
      <div class="flex items-center">
        
         <div class=" min-w-0">
           
            <p class="text-md text-black truncate ">
               Analytics
            </p>
         </div>
        
      </div>
   </li>
</ul>


const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className="flex flex-1">
          <div className="flex justify-center text-center item-center">
            <div className="bg-blue-500 w-16 h-screen">
              <img className="mb-[240%]" src={logo} />

              <img src={logo6} />
              <img src={logo1} />
              <img src={logo2} />
              <img src={logo3} />
              <img src={logo4} />
              <img src={logo5} />
            </div>
          </div>

          <div className="w-52  bg-slate-50">
            <h1 className="  flex justify-center text-center font-bold mt-[60%] ">
              Company Name
            </h1>
            <h1 className="flex justify-center text-center mt-[10%] font-bold text-blue-700">
              {" "}
              Dashboard
            </h1>
            <div className="mt-[10px]">
                <div className="container">
                <Inner/>
                </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
