import React from "react";
import { Route, Routes } from "react-router-dom";
import Learning from "../Pages/Learning/Learning";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";

export default () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/dashboard" element={<Dashboard />} />
    <Route exact path="/learning" element={<Learning />} />
    <Route path="/learning/:id" element={<Learning />} />
  </Routes>
);
