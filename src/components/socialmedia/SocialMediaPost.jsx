import React from "react";
import { SocialCentre } from "./SocialMedia";
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/Instagram.png";
import Store from "../../assets/Facebookstore.png";

import Blogs from "../../assets/SocialContent.png";
import ProgressBar from "../common/ProgressBar";

const SocialMediaPost = ({ setSocialMedia }) => {
  return (
    <div className="w-[85%] m-auto h-screen mt-[2%] bg-slate-50 ">
      <div className="w-[100%] h-[13%] mt-[1%] px-8 py-8 text-md  m-auto border-1 rounded-lg text-centre bg-blue-200 text-black flex ">
        Here you go, I have generated the social media posts.
      </div>
      <ProgressBar percent={80} />
      <div className="flex m-auto ">
        <div className=" p-5 mt-[4%] h-screen items-center justify-center  w-[65%]">
          <div className="w:1/2 flex m-auto">
            <img className="w-[15%] mr-2 " src={Facebook} />
            <h2 className="text-bold mt-2 text-3xl">Facebook</h2>
          </div>
          <h2 className="text-blue-500 font-bold text-left ml-2">
            Promotional Post
          </h2>
          <p className="flex justify-center text-left text-xs mb-2 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <img src={Store} />
        </div>
        <div className=" p-5 mt-[4%] h-screen items-center justify-center  w-[65%]">
          <div className="w:1/2 flex m-auto">
            <img className="w-[15%] mr-2" src={Instagram} />
            <h2 className="text-bold mt-2 text-3xl">Instagram</h2>
          </div>
          <h2 className="text-blue-500 font-bold text-left ml-2">
            Promotional Post
          </h2>
          <p className="flex justify-center text-left  text-xs mt-2 mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <img src={Store} />
        </div>
      </div>
      <div className="flex justify-center  mt-[-40%]">
        <button
          onClick={() => setSocialMedia(5)}
          class="bg-blue-700 text-sm rounded-lg  mr-[8%] hover:bg-blue-500 text-slate-200 flex items-center justify-center hover:text-white py-1 px-4 ring-1 border border-blue-500 hover:border-transparent "
        >
          Send this post to email
        </button>
        <button class="bg-transparent text-sm rounded-lg font-bold mr-[8%] hover:bg-blue-500 text-blue-700 flex items-center justify-center hover:text-white py-1 px-4 ring-1 border border-blue-500 hover:border-transparent ">
          Publish on my Social media
        </button>
      </div>
    </div>
  );
};
export default SocialMediaPost;
