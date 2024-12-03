import React from "react";
import Navbar from "../navbar/Navbar";
import { albumsData } from "../../assets/frontend-assets/assets";
import { songsData } from "../../assets/frontend-assets/assets";
import AlbumItem from "../albumItem/AlbumItem";
import SongItem from "../songItem/SongItem";
function DisplayHome() {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((album) => (
            <AlbumItem key={album.id} {...album} />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((song) => (
            <SongItem key={song.id} {...song} />
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
