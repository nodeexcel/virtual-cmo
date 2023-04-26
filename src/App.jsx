import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import Blogs from "./components/Blogs";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

const App = () => (
  <>
    <BrowserRouter>
      <AllRoutes />
      
    </BrowserRouter>


  </>
);
export default App;
