import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";


const App = () => (
  <>
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
   
  </>
);
export default App;
