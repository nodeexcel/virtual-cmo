import React from "react";
import logo from "../assets/Logo.svg";
import Performance from "../assets/Performance.svg";
import email from "../assets/Email.svg";
import social from "../assets/Social.svg";
import history from "../assets/History.svg";
import analytics from "../assets/Analytics.svg";
import Marketing from "../assets/Marketing.svg";
import DownArrow from "../assets/DownArrow.svg";
import logo7 from "../assets/Side.svg";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const leftNavLogo = [
  { src: Marketing, href: "content-marketing", text: "Content Marketing" },
  {
    src: Performance,
    href: "performance-marketing",
    text: "Performance Marketing",
  },
  { src: email, href: "email-marketing", text: "Email Marketing" },
  { src: social, href: "social-management", text: "Social Media Management" },
  { src: history, href: "history", text: "History" },
  { src: analytics, href: "analytics", text: "Analytics" },
];
const leftNav = [
  {
    text: "Content Marketing",
    src: logo7,
    href: "content-marketing",
  },
  {
    text: "Performance Marketing",
    src: logo7,
    href: "performance-marketing",
  },
  {
    text: "Email Marketing",
    src: logo7,
    href: "email-marketing",
  },
  {
    text: "Social Media Management",
    src: logo7,
    href: "social-management",
  },
  {
    text: "History",
    src: logo7,
    href: "history",
  },
  {
    text: "Analytics",
    src: logo7,
    href: "analytics",
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
    path: "keywords",
  },
  {
    text: "Google Ads",
    src: logo7,
    path: "google-ads",
  },
  {
    text: "Ad Copies",
    src: logo7,
    path: "ad-copies",
  },
  {
    text: "Facebook Ads",
    src: logo7,
    path: "facebook-ads",
  },
  {
    text: "History",
    src: logo7,
    path: "history",
  },
];

const routes = {
  "performance-marketing": Performancemarketing,
  "content-marketing": Contentmarketing,
};

const Inner = ({ navOptions, setNavOptions }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [selectedSection, setSelectedSection] = useState();

  //   const dataTobeMapped = routes[params.id] || leftNav

  return (
    <ul className="max-w-md justify-center text-center mt-[18%] ml-[5%]">
      {navOptions.map((data, index) => {
        return (
          <li className="pb-3" key={index}>
            <div
              className="flex mb-3 items-center justify-between pr-[8%]"
              //   onClick={() => handleNavbar(index)}
            >
              <div className="min-w-0 ">
                <a
                  className={`text-md flex text-black truncate ${
                    data.text === selectedSection && "font-bold"
                  }`}
                  //   href={`${data.href}`}
                >
                  {data.text}
                </a>
              </div>
              <div className="">
                {data.text === selectedSection ? (
                  <img
                    src={DownArrow}
                    className={"cursor-pointer"}
                    onClick={() => {
                      if (data?.href) {
                        setNavOptions(routes[data.href]);
                      }
                      navigate(`${pathname}/${data.path}`);
                    }}
                  />
                ) : (
                  <img
                    src={data.src}
                    className={"cursor-pointer"}
                    onClick={() => {
                      if (data?.href) {
                        setNavOptions(routes[data.href]);
                      }
                      setSelectedSection(data.text);
                      navigate(`${pathname}/${data.path}`);
                    }}
                  />
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const MainLayout = () => {
  const navigate = useNavigate();
  const params = useParams();
  const navigationHandler = (to) => {
    navigate(`/${to}`);
  };
  const [navOptions, setNavOptions] = useState(leftNav);
  const [currentNav, setCureentNav] = useState("Dashboard");
  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className="flex flex-1">
          <div className="flex justify-center text-center item-center">
            <div className="bg-blue-500 w-16 h-screen">
              <img
                className="mb-[240%]"
                src={logo}
                onClick={() => {
                  navigate("/");
                  setCureentNav("Dashboard");
                  setNavOptions(leftNav);
                }}
              />
              {leftNavLogo.map((data, index) => {
                return (
                  <img
                    src={data.src}
                    className={`cursor-pointer  ${
                      currentNav === data.text && "bg-blue-900"
                    }`}
                    onClick={() => {
                      if (data?.href && routes[data.href]) {
                        setNavOptions(routes[data.href]);
                        navigationHandler(data.href);
                      }
                      setCureentNav(data.text);
                    }}
                    key={index}
                  />
                );
              })}
            </div>
          </div>

          <div className="w-64    bg-slate-50">
            <h1 className="  flex justify-center text-center font-bold mt-[42%] ">
              Company Name
            </h1>
            <h1 className="flex justify-center text-center mt-[10%] font-bold text-blue-700">
              {" "}
              {currentNav}
            </h1>
            <div className="mt-[10px]">
              <div className="container">
                <Inner
                  navOptions={navOptions}
                  setNavOptions={setNavOptions}
                  currentNav={currentNav}
                />
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
          <div className="w-[100%] bg-blue-50 flex items-center justify-center">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
