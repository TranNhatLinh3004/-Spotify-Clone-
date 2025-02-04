import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import HomePage from "../pages/home/HomePage";
import DisplayAlbum from "../components/display/DisplayAlbum";
import AddSongPage from "../pages/admin/AddSongPage";
import ListSongPage from "../pages/admin/ListSongPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="album/:id" element={<DisplayAlbum />} />
      </Route>
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="add-song" element={<AddSongPage />} />
        <Route path="list-song" element={<ListSongPage />} />
      </Route>
    </Routes>
  );
};

export default Routers;
