import React from "react";
import blogs from "../assets/Blogs.png";
import blog2 from "../assets/Blog2.png";

const Blogs = () => {
  return (
    <div className="w-[65%]">
      <div class="flex justify-center text-center m-auto">
        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style="width: 45%"
          >
            {" "}
            45%
          </div>
        </div>

        <div class="lg:w-full md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              class="object-cover object-center w-full h-full block"
              src={blogs}
            />
          </a>
        </div>
        <div class="lg:w-full md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              class="object-cover object-center w-full h-full block"
              src={blog2}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
