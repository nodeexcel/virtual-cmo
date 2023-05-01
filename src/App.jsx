import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import BlogsIdea from "./components/Blogs/BlogsIdea";
import BlogsLoader from "./components/Blogs/BlogsLoader";


const App = () => (
  <>
    {/* <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
    */}
    <BlogsLoader/>
    {/* <BlogsIdea/> */}
  </>
);
export default App;
