import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import Business from "./pages/Businesspage";



const App = () => (
  <>
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
   {/* <Business/> */}
    {/* <SocialPlatform/> */}
    
    {/* <BlogsLoader/> */}
    {/* <BlogsIdea/> */}
    {/* <SocialMediaPost/> */}
    {/* <SocialTheme/> */}
  </>
);
export default App;
