import React from "react";
import { Route, Routes } from "react-router-dom";
import {  Password, Random, VerificationPage, Website } from "../pages";

const AllRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<VerificationPage />} />
      <Route path="/password" element={<Password />} />
      <Route path="/website" element={<Website />} />
      <Route path="/random" element={<Random />} />
    </Routes>
  );
};

export default AllRoutes;
