import React from "react";
import { Route, Routes } from "react-router-dom";
import Loginpage from "../pages/Loginpage";
import VerificationPage from '../pages/VerificationPage';
import Password from '../pages/Password';
import Website from '../pages/Website';


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path='/verificationpage' element={<VerificationPage/>}/>
      <Route path="/password" element={<Password />} />
      <Route path="/website" element={<Website />} />
    </Routes>
  );
};

export default AllRoutes;
