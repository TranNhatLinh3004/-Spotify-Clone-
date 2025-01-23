import React, { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import Display from "../../components/display/Display";
import Sidebar from "../../components/sidebar/Sidebar";
import Player from "../../components/player/Player";
function HomePage() {
  const { audioRef, track } = useContext(PlayerContext); // Dùng PlayerContext thay vì PlayerContextProvider
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio
        className="hidden"
        ref={audioRef}
        src={track.file}
        preload="auto"
        controls
      ></audio>
    </div>
  );
}

export default HomePage;
