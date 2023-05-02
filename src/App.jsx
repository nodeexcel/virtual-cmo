import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import BlogsIdea from "./components/Blogs/BlogsIdea";
import BlogsLoader from "./components/Blogs/BlogsLoader";
import BlogsMailed from "./components/Blogs/BlogsMailed";
import BlogsTopic from "./components/Blogs/Blogstopic";


const App = () => (
  <>
    {/* <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>

    */}
    <BlogsMailed/>
    {/* <BlogsTopic/> */}
    {/* <BlogsIdea/> */}
    {/* <BlogsIdea/> */}
  </>
);
export default App;
