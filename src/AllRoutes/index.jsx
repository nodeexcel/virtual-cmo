import React from "react";
import { Route, Routes } from "react-router-dom";
import Loginpage from "../pages/Loginpage";
import VerificationPage from '../pages/VerificationPage';
import Password from '../pages/Password';
import Website from '../pages/Website';
import Loader from '../components/Loader';
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import BlogsPage from "../pages/BlogsPage";
import KeywordsPage from "../pages/KeywordsPage";
import GoogleAdsPage from "../pages/GoogleAdsPage";
import SocialMediaPage from "../pages/SocialMediaPage";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard/>}/>
        <Route path="/content-marketing" >
          <Route index element={<BlogsPage/>}/>
          <Route index path="blogs" element={<BlogsPage/>}/>
          <Route  path="social-media" element={<SocialMediaPage/>}/>
        </Route>
      <Route path="performance-marketing" >
        <Route index  element={<KeywordsPage/>}/>
        <Route index path="keywords" element={<KeywordsPage/>}/>
        <Route path="google-ads" element={<GoogleAdsPage/>}/>
      </Route>
      </Route>
      <Route  path="/onboarding" element={<Loginpage />} />
        <Route path='verificationpage' element={<VerificationPage/>}/>
        <Route path="password" element={<Password />} />
        <Route path="website" element={<Website />} />
        <Route path="loader" element={<Loader />} />
    </Routes>
  );
};


export default AllRoutes;
