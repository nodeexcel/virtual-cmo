import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import SocialMediaPost from "./components/socialmedia/SocialMediaPost";
import SocialPlatform from "./components/socialmedia/SocialPlatforms";
import SocialTheme from "./components/socialmedia/SocialTheme";


const App = () => (
  <>
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
   
    {/* <SocialPlatform/> */}
    
    {/* <BlogsLoader/> */}
    {/* <BlogsIdea/> */}
    {/* <SocialMediaPost/> */}
    {/* <SocialTheme/> */}
  </>
);
export default App;
