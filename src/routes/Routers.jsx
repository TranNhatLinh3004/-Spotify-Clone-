import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import HomePage from "../pages/home/HomePage";
import DisplayAlbum from "../components/display/DisplayAlbum";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Routers;
