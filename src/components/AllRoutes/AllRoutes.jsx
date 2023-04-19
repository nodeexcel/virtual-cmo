import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Password, VerificationPage, Website } from "../../pages";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VerificationPage />} />
        <Route path="/password" element={<Password />} />
        <Route path="/website" element={<Website />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
