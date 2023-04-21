import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import Dashboard from "./components/Dashboard";

const App = () => (
  <BrowserRouter>
    <AllRoutes />
  </BrowserRouter>
  
);
export default App;
