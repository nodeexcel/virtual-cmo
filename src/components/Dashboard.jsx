import React from "react";
import logo from "../assets/Logo.svg";
import Performance from "../assets/Performance.svg";
import email from "../assets/Email.svg";
import social from "../assets/Social.svg";
import history from "../assets/History.svg";
import analytics from "../assets/Analytics.svg";
import Marketing from "../assets/Marketing.svg";
import logo7 from "../assets/Side.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Maincontent from "./Maincontent";

const leftNavLogo = [
  { src: Marketing, href: "content-marketing" },
  { src: Performance, href: "performance-marketing" },
  { src: email, href: "email-marketing" },
  { src: social, href: "social-management" },
  { src: history, href: "history" },
  { src: analytics, href: "analytics" },
];
const leftNav = [
  {
    text: "Content Marketing",
    src: logo7,
    href: "content-marketing"
  },
  {
    text: "Performance Marketing",
    src: logo7,
    href:"performance-marketing"
  },
  {
    text: "Email Marketing",
    src: logo7,
    href: "email-marketing"
  },
  {
    text: "Social Media Management",
    src: logo7,
    href: "social-management"
  },
  {
    text: "History",
    src: logo7,
    href: "history"
  },
  {
    text: "Analytics",
    src: logo7,
    href: "analytics" 
  },
];
const Contentmarketing = [
  {
    text: "Blogs",
    src: logo7,
  },
  {
    text: "Social Media",
    src: logo7,
  },
  {
    text: "Website SEO",
    src: logo7,
  },
  {
    text: "History",
    src: logo7,
  },
];
const Performancemarketing = [
  {
    text: "Keywords",
    src: logo7,
  },
  {
    text: "Ad Copies",
    src: logo7,
  },
  {
    text: "Google Ads",
    src: logo7,
  },
  {
    text: "Facebook Ads",
    src: logo7,
  },
  {
    text: "History",
    src: logo7,
  },
];


const routes = {
  "performance-marketing":Performancemarketing,
  "content-marketing":Contentmarketing
}

const Inner = () => {
  const navigate = useNavigate();
  const params = useParams();

  const navigationHandler = (to) => {
    navigate(to);
  };
  const dataTobeMapped = routes[params.id] || leftNav

  return (
    <ul class="max-w-md justify-center text-center mt-[18%] ml-[5%]">
      {dataTobeMapped.map((data, index) => {
        return (
          <li class="pb-3" key={index}>
            <div
              class="flex mb-3 items-center justify-between pr-[8%]"
              onClick={() => handleNavbar(index)}
            >
              <div class="min-w-0 ">
                <a
                  class="text-md flex text-black truncate "
                  href={`${data.href}`}
                >
                  {data.text}
                </a>
              </div>
              <div className="">
                <img
                  src={data.src}
                  className={"cursor-pointer"}
                  onClick={() => navigationHandler(data.href)}
                />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};


const Dashboard = () => {
  const navigate = useNavigate();
  const params = useParams(); 
  const navigationHandler = (to) => {
    navigate(`/dashboard/${to}`);
  };
  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className="flex flex-1">
          <div className="flex justify-center text-center item-center">
            <div className="bg-blue-500 w-16 h-screen">
              <img className="mb-[240%]" src={logo} />
              {leftNavLogo.map((data, index) => {
                return (
                  <img 
                    src={data.src}
                    className={`cursor-pointer  ${params.id===data.href && 'bg-blue-900'}`} 
                    onClick={() => navigationHandler(data.href)}
                    key={index}
                  />
                );
              })}
            </div>
          </div>

          <div className="w-64 mr-[6%]   bg-slate-50">
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
          <Maincontent/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
