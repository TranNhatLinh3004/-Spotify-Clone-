import React from "react";
import shuffle_icon from "../../assets/frontend-assets/shuffle.png";
import prev_icon from "../../assets/frontend-assets/prev.png";
import play_icon from "../../assets/frontend-assets/play.png";
import next_icon from "../../assets/frontend-assets/next.png";
import loop_icon from "../../assets/frontend-assets/loop.png";

import plays_icon from "../../assets/frontend-assets/plays.png";
import mic_icon from "../../assets/frontend-assets/mic.png";
import queue_icon from "../../assets/frontend-assets/queue.png";
import speaker_icon from "../../assets/frontend-assets/speaker.png";
import volumn_icon from "../../assets/frontend-assets/volume.png";
import mini_icon from "../../assets/frontend-assets/mini-player.png";
import zoom_icon from "../../assets/frontend-assets/zoom.png";

function Player() {
  return (
    <div className="h-[10%] bg-pink flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex  items-center gap-4">
        <img
          className="w-12"
          src="https://images.pexels.com/photos/14004581/pexels-photo-14004581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="">
          <p>Song Title</p>
          <p>Artist</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={shuffle_icon} alt="" />
          <img className="w-4 cursor-pointer" src={prev_icon} alt="" />{" "}
          <img className="w-4 cursor-pointer" src={play_icon} alt="" />{" "}
          <img className="w-4 cursor-pointer" src={next_icon} alt="" />{" "}
          <img className="w-4 cursor-pointer" src={loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <p>0:00</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <div className="bg-green-500 border-none  h-1 rounded-full w-[30%]"></div>{" "}
          </div>
          <p>3:00</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4 cursor-pointer" src={plays_icon} alt="" />
        <img className="w-4 cursor-pointer" src={mic_icon} alt="" />{" "}
        <img className="w-4 cursor-pointer" src={queue_icon} alt="" />{" "}
        <img className="w-4 cursor-pointer" src={speaker_icon} alt="" />{" "}
        <img className="w-4 cursor-pointer" src={volumn_icon} alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className="w-4 cursor-pointer" src={mini_icon} alt="" />
        <img className="w-4 cursor-pointer" src={zoom_icon} alt="" />{" "}
      </div>
    </div>
  );
}

export default Player;
