import React, { useContext, useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { useParams } from "react-router-dom";
// import { albumsData, songsData } from "../../assets/frontend-assets/assets";
import spotify_logo from "../../assets/frontend-assets/spotify_logo.png";
import clock_icon from "../../assets/frontend-assets/clock_icon.png";
import { PlayerContext } from "../../context/PlayerContext";

function DisplayAlbum(props) {
  const { id } = useParams();
  // const albumData = albumsData[id];

  console.log(id);

  const [albumsData, setAlbumsData] = useState("");

  const { playWithId, songsData, albumData } = useContext(PlayerContext);

  useEffect(() => {
    albumData.map((album) => {
      if (album._id === id) {
        setAlbumsData(album);
      }
    });
  }, []);

  const filteredSongs = songsData.filter(
    (song) => song.album === albumsData.name
  );

  return albumsData ? (
    <>
      <Navbar />
      <div className="mt-28 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumsData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumsData.name}
          </h2>
          <h4>{albumsData.desc}</h4>
          <p className="mt-1 ">
            <img className="w-5 h-5 inline-block" src={spotify_logo} alt="" />
            <b className="ml-2">Spotify</b>
            {/* <span className="ml-2">• 1,232,523 likes</span> */}
            <b className="ml-2 text-[#a7a7a7]">• 30 songs, </b>
            <b className="ml-1 text-[#a7a7a7]">about 2hr 30 min</b>
          </p>
        </div>
      </div>
      <div className="w-[95%] flex justify-between  gird grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] ">
        <p className="flex-1 ">
          <b className="mr-4">#</b>Title
        </p>
        <p className="flex-1 ">Album</p>
        <p className="hidden sm:block flex-1 ">Date Added</p>
        <img className="m-auto w-4  " src={clock_icon} alt="" />
      </div>
      <hr />
      {filteredSongs.map((song) => (
        <div
          onClick={() => playWithId(song._id)}
          className="w-[96%] flex  items-center justify-between gird grid-cols-3 sm:grid-cols-4 mt-6 mb-4  pl-2 text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer "
          key={song.id}
        >
          <p className="text-white flex-1">
            <b className="mr-4 text-[#a7a7a7]">{song.id}</b>
            <img className="w-10 mr-5 inline" src={song.image} alt="" />
            {song.name}
          </p>
          <p className="text-[15px] flex-1">{albumsData.name}</p>
          <p className="hidden sm:block flex-1 ">5 days ago</p>
          <p className="text-[15px] text-center">{song.duration}</p>
        </div>
      ))}
    </>
  ) : null;
}

export default DisplayAlbum;
