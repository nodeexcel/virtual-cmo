import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import BlogsIdea from "./components/Blogs/BlogsIdea";
import BlogsLoader from "./components/Blogs/BlogsLoader";
import BlogsMailed from "./components/Blogs/BlogsMailed";
import BlogsTopic from "./components/Blogs/Blogstopic";
import SocialMail from "./components/socialmedia/Mailed";


const App = () => (
  <>
    {/* <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>

    */}
  <BlogsLoader/>
  
   {/* <BlogsIdea/> */}
    {/* <BlogsTopic/> */}
    {/* <BlogsMailed/> */}
  </>
);
export default App;
