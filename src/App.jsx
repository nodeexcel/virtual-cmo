import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import BlogsIdea from "./components/Blogs/BlogsIdea";
import BlogsLoader from "./components/Blogs/BlogsLoader";
import BlogsMailed from "./components/Blogs/BlogsMailed";
import BlogsReady from "./components/Blogs/BlogsReady";
import BlogsTopic from "./components/Blogs/Blogstopic";
import Blogstube from "./components/Blogs/Blogstube";

import SocialMail from "./components/socialmedia/Mailed";
import SocialContent from "./components/socialmedia/SocialContent";


const App = () => (
  <>
    {/* <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>

    */}
  {/* <BlogsLoader/> */}
   {/* <BlogsIdea/> */}
    {/* <BlogsTopic/> */}
    {/* <BlogsMailed/> */}
    {/* <SocialMail/> */}
    {/* <SocialContent/> */}
   {/* <Blogstube/> */}
   <BlogsReady/>
  </>
);
export default App;
