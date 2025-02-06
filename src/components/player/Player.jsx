import React, { useState, useContext, useRef } from "react";
import shuffle_icon from "../../assets/frontend-assets/shuffle.png";
import prev_icon from "../../assets/frontend-assets/prev.png";
import play_icon from "../../assets/frontend-assets/play.png";
import pause_icon from "../../assets/frontend-assets/pause.png";
import next_icon from "../../assets/frontend-assets/next.png";
import loop_icon from "../../assets/frontend-assets/loop.png";
import plays_icon from "../../assets/frontend-assets/plays.png";
import mic_icon from "../../assets/frontend-assets/mic.png";
import queue_icon from "../../assets/frontend-assets/queue.png";
import speaker_icon from "../../assets/frontend-assets/speaker.png";
import volumn_icon from "../../assets/frontend-assets/volume.png";
import mini_icon from "../../assets/frontend-assets/mini-player.png";
import zoom_icon from "../../assets/frontend-assets/zoom.png";
import { PlayerContext } from "../../context/PlayerContext";

function Player() {
  const {
    previous,
    next,
    seeBar,
    seeBg,
    time,
    togglePlayPause,
    playStatus,
    track,
    seekSong,
    audioRef,
    songsData,
    setSongsData,
  } = useContext(PlayerContext);

  const [volume, setVolume] = useState(1);

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return track ? (
    <div className="h-[10%]  flex justify-between items-center text-white px-4 fixed bottom-0 left-0 right-0">
      <div className="hidden md:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.album}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={shuffle_icon} alt="" />
          <img
            onClick={previous}
            className="w-4 cursor-pointer"
            src={prev_icon}
            alt=""
          />
          <img
            onClick={togglePlayPause}
            className="w-4 cursor-pointer"
            src={playStatus ? pause_icon : play_icon}
            alt={playStatus ? "Pause" : "Play"}
          />
          <img
            onClick={next}
            className="w-4 cursor-pointer"
            src={next_icon}
            alt=""
          />
          <img className="w-4 cursor-pointer" src={loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-2  w-auto md:w-[40vw]">
          <p>
            {time?.currentTime.minutes}:
            {String(time?.currentTime?.seconds || 0).padStart(2, "0")}
          </p>
          <div
            onClick={(e) => seekSong(e)}
            ref={seeBg}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seeBar}
              className="bg-green-500 border-none h-1 rounded-full"
            />
          </div>
          <p>
            {time?.totalTime.minutes || 0}:{time?.totalTime.seconds || "00"}
          </p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-2 opacity-75">
        <img className="w-4 cursor-pointer" src={plays_icon} alt="" />
        <img className="w-4 cursor-pointer" src={mic_icon} alt="" />
        <img className="w-4 cursor-pointer" src={queue_icon} alt="" />
        <img className="w-4 cursor-pointer" src={speaker_icon} alt="" />
        <div className="flex items-center gap-2 ">
          <img className="w-4 cursor-pointer" src={volumn_icon} alt="" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume * 100}
            onChange={handleVolumeChange}
            className="w-20 cursor-pointer"
          />
        </div>
        <img className="w-4 cursor-pointer" src={mini_icon} alt="" />
        <img className="w-4 cursor-pointer" src={zoom_icon} alt="" />
      </div>
    </div>
  ) : null;
}

export default Player;
