import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import HomePage from "../pages/home/HomePage";
import DisplayAlbum from "../components/display/DisplayAlbum";
import AddSongPage from "../pages/admin/AddSongPage";
import ListSongPage from "../pages/admin/ListSongPage";
import UpdateSongPage from "../pages/admin/UpdateSongPage";

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
        <Route path="update-song/:id" element={<UpdateSongPage />} />
      </Route>
    </Routes>
  );
};

export default Routers;
