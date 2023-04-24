import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

const App = () => (
  <>
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>

    {/* <Sidebar/> */}
  </>
);
export default App;
