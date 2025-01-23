import React from "react";
import home_icon from "../../assets/frontend-assets/home.png";
import search_icon from "../../assets/frontend-assets/search.png";
import stack_icon from "../../assets/frontend-assets/stack.png";
import arrow_icon from "../../assets/frontend-assets/arrow.png";
import plus_icon from "../../assets/frontend-assets/plus.png";

function Sidebar() {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex bg-green-500">
      <div className="bg-[#121212] h-[15%] rounded flex justify-around flex-col ">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={home_icon} alt="" />
          <p className="font-bold">
            <a href="/">Home</a>
          </p>
        </div>{" "}
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded ">
        <div className="flex items-center p-4 justify-between ">
          <div className="flex items-center gap-3">
            <img className="w-8" src={stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <img className="w-5" src={arrow_icon} alt="" />
            <img className="w-5" src={plus_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start grap-1 pl-4">
          <h1 className="">Create your first playlist</h1>
          <p>It's easy we will help you</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start grap-1 pl-4">
          <h1 className="">Create your first playlist</h1>
          <p>It's easy we will help you</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Create Playlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
