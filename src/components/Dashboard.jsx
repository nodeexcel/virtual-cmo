import React from "react";
import logo from "../assets/Frame8.png";
import logo1 from "../assets/Frame9.png";
import logo2 from "../assets/Frame10.png";
import logo3 from "../assets/Frame11.png";
import logo4 from "../assets/Frame12.png";
import logo5 from "../assets/Frame13.png";
import logo6 from "../assets/Frame14.png";
import logo7 from "../assets/Frame15.png";

const leftNavLogo = [
   {src:logo6},
   {src:logo1},
   {src:logo2},
   {src:logo3},
   {src:logo4},
   {src:logo5},
];
const leftNav = [
  {
    text: "Content Marketing",
    src: logo7 ,
  },
  {
    text: "Performance Marketing",
    src:  logo7 ,
  },
  {
    text: "Email Marketing",
    src:  logo7 ,
  },
  {
    text: "Social Media Management",
    src:  logo7 ,
  },
  {
    text: "History",
    src:  logo7 ,
  },
  {
    text: "Analytics",
    src:  logo7 ,
  },
];
const Optionnav=[{
   text: "Blogs",
   src: logo7 ,
 },
 {
   text: "Social Media",
   src: logo7 ,
 },
 {
   text: "Website SEO",
   src: logo7 ,
 },
 {
   text: "History",
   src: logo7 ,
 },]

const Inner = () => (
  <ul class="max-w-md justify-center text-center mt-[18%] ml-[5%]">
   {leftNav.map((data,index)=>{
      return(
         <li class="pb-3">
         <div class="flex mb-3 items-center justify-between pr-[8%]" onClick={()=>handleNavbar(index)}>
           <div class="min-w-0 ">
             <p class="text-md flex text-black truncate ">{data.text}</p>
           </div>
           <div className="">
             <img src={data.src} />
           </div>
         </div>
       </li>
      )
   })}
  </ul>
);

const handleNavbar =(i)=>{
   console.log(i,'>>>>>>')
}
const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className="flex flex-1">
          <div className="flex justify-center text-center item-center">
            <div className="bg-blue-500 w-16 h-screen">
              <img className="mb-[240%]" src={logo} />
                  {leftNavLogo.map((data,index)=>{
                     return(
                        <img src={data.src}  onClick={()=>handleNavbar(index)}/>
                     )
                  })}
            </div>
          </div>

          <div className="w-64  bg-slate-50">
            <h1 className="  flex justify-center text-center font-bold mt-[42%] ">
              Company Name
            </h1>
            <h1 className="flex justify-center text-center mt-[10%] font-bold text-blue-700">
              {" "}
              Dashboard
            </h1>
            <div className="mt-[10px]">
              <div className="container">
                <Inner />
                <div className=" ml-[5%] mt-[20%]">
                  <h2 className="text-md item-center flex  text-center py-2">
                    Current Plan
                  </h2>
                  <h2 className="text-md item-center flex text-center py-2">
                    Settings
                  </h2>
                  <h2 className="text-md item-center flex  text-center  py-2">
                    Logout
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
