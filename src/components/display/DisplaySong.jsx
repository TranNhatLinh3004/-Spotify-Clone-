import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { songData, songsData } from "../../assets/frontend-assets/assets";
import spotify_logo from "../../assets/frontend-assets/spotify_logo.png";
import clock_icon from "../../assets/frontend-assets/clock_icon.png";
import { PlayerContext } from "../../context/PlayerContext";
import Navbar from "../navbar/Navbar";
import SongItem from "../songItem/SongItem";
import Footer from "../footer/Footer";
function DisplaySong(props) {
  const { id } = useParams();
  // const albumData = albumsData[id];

  const [songData, setSongData] = useState("");

  const { playWithId, songsData } = useContext(PlayerContext);
  useEffect(() => {
    songsData.map((song) => {
      if (song._id === id) {
        setSongData(song);
      }
    });
  }, [id]);

  const filteredSongs = songsData.filter(
    (song) => song.album === songData.album
  );
  return songData ? (
    <div>
      <Navbar />
      <div className="mt-28 flex gap-8 flex-col md:flex-row md:items-end">
        <img
          className="w-[100%]  h-auto md:w-44 rounded"
          src={songData.image}
          alt=""
        />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {songData.name}
          </h2>
          <h4>{songData.desc}</h4>
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
        <p className="flex-1 hidden sm:block">Album</p>
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
          <p className="text-[15px] flex-1 hidden sm:block">{song.name}</p>
          <p className="hidden sm:block flex-1 ">5 days ago</p>
          <p className="text-[15px] text-center">{song.duration}</p>
        </div>
      ))}

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">You might also like</h1>
        <div className="flex overflow-auto">
          {songsData.map((song) => (
            <SongItem key={song._id} {...song} />
          ))}
        </div>
      </div>

      <div className="h-20"></div>
      <Footer />
    </div>
  ) : null;
}

export default DisplaySong;
