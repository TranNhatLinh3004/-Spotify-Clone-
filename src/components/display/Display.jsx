import React, { useContext, useEffect, useRef } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { PlayerContext } from "../../context/PlayerContext";
import DisplaySong from "./DisplaySong";

function Display() {
  const displayRef = useRef(null);
  const location = useLocation();
  // console.log(location);
  // console.log(id);
  const { albumData } = useContext(PlayerContext);
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split("/").pop() : "";

  const bgColor =
    isAlbum && Array.isArray(albumData)
      ? albumData.find((album) => album._id === albumId)?.bgColor || "#121212"
      : "#121212";

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(to bottom, ${bgColor} 0%, #121212 100%)`;
    } else {
      displayRef.current.style.background = "#121212";
    }
  });

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route
          path="/album/:id"
          element={<DisplayAlbum />}
          album={albumData.find((album) => album.id === albumId)}
        />
        <Route
          path="/song/:id"
          element={<DisplaySong />}
          // album={albumData.find((album) => album.id === albumId)}
        />
      </Routes>
    </div>
  );
}

export default Display;
