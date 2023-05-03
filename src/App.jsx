import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import BlogsIdea from "./components/Blogs/BlogsIdea";
import BlogsLoader from "./components/Blogs/BlogsLoader";
import BlogsMailed from "./components/Blogs/BlogsMailed";
import BlogsReady from "./components/Blogs/BlogsReady";
import BlogsTopic from "./components/Blogs/Blogstopic";
import Blogstube from "./components/Blogs/Blogstube";
import Googleads from "./components/googleads";
import GoogleCopies from "./components/googleads/GoogleCopies";
import GoogleMailed from "./components/googleads/GoogleMailed";
import HeadLines from "./components/googleads/Headlines";
import WorkingCopies from "./components/googleads/WorkingCopies";
import TableKeywords from "./components/keywords/TableKeywords";
import Topkeywords from "./components/keywords/Topkeywords";
import WorkingKeywords from "./components/keywords/WorkingKeywords";

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
   {/* <BlogsReady/> */}
   {/* <Topkeywords/> */}
   {/* <WorkingKeywords/> */}
   {/* <TableKeywords/> */}
   {/* <GoogleCopies/> */}
   {/* <WorkingCopies/> */}
   {/* <GoogleMailed/> */}
   <Googleads/>
  </>
);
export default App;
