import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import HomePage from "../pages/home/HomePage";
import DisplayAlbum from "../components/display/DisplayAlbum";
import AddSongPage from "../pages/admin/AddSongPage";
import ListSongPage from "../pages/admin/ListSongPage";
import UpdateSongPage from "../pages/admin/UpdateSongPage";
import AddAlbumPage from "../pages/admin/AddAlbumPage";
import ListAlbumPage from "../pages/admin/ListAlbumPage";
import DisplaySong from "../components/display/DisplaySong";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="album/:id" element={<DisplayAlbum />} />
        <Route path="song/:id" element={<DisplaySong />} />
      </Route>
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="add-song" element={<AddSongPage />} />
        <Route path="add-album" element={<AddAlbumPage />} />

        <Route path="list-song" element={<ListSongPage />} />
        <Route path="list-album" element={<ListAlbumPage />} />
        <Route path="update-song/:id" element={<UpdateSongPage />} />
      </Route>
    </Routes>
  );
};

export default Routers;
