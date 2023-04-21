import React from "react";
import { Route, Routes } from "react-router-dom";
import Loginpage from "../pages/Loginpage";
import VerificationPage from '../pages/VerificationPage';
import Password from '../pages/Password';
import Website from '../pages/Website';
import Loader from '../components/Loader'
import Dashboard from "../components/Dashboard";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path='/verificationpage' element={<VerificationPage/>}/>
      <Route path="/password" element={<Password />} />
      <Route path="/website" element={<Website />} />
      <Route path="/loader" element={<Loader />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AllRoutes;
