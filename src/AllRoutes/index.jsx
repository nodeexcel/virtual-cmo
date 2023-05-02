import React from "react";
import { Route, Routes } from "react-router-dom";
import Loginpage from "../pages/Loginpage";
import VerificationPage from '../pages/VerificationPage';
import Password from '../pages/Password';
import Website from '../pages/Website';
import Loader from '../components/Loader'
import Dashboard from "../components/Dashboard";
// import BlogsLoader from "../components/BlogsLoader";
// import BlogsIdea from "../components/BlogsIdea";
import MainLayout from "../layout/MainLayout";
import Maincontent from "../components/Maincontent";
import BlogsPage from "../pages/BlogsPage";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Maincontent/>}/>
        <Route path="content-marketing" element={<BlogsPage/>}>
          <Route path="blogs" element={<BlogsPage/>}/>
          {/* <Route path="blogs" element={<BlogsIdea/>}/> */}
        </Route>
      <Route path="performance-marketing"/>
      </Route>
      <Route  path="/onboarding" element={<Loginpage />} />
        <Route path='verificationpage' element={<VerificationPage/>}/>
        <Route path="password" element={<Password />} />
        <Route path="website" element={<Website />} />
        <Route path="loader" element={<Loader />} />
      {/* <Route path="/blogsLoader" element={<BlogsLoader />}  /> */}
      {/* <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:id" element={<Dashboard />}  /> */}
    </Routes>
  );
};


export default AllRoutes;
