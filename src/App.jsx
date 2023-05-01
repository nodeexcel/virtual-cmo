import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import BlogsIdea from "./components/BlogsIdea";
import BlogsLoader from "./components/BlogsLoader";


const App = () => (
  <>
    {/* <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
    */}
    {/* <BlogsLoader/> */}
    <BlogsIdea/>
  </>
);
export default App;
