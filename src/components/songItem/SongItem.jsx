import React, { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoPauseCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function SongItem({ name, image, desc, _id }) {
  const navigate = useNavigate();
  const { playWithId, track, playStatus, togglePlayPause } =
    useContext(PlayerContext);

  const handleClick = () => {
    if (track._id === _id) {
      // If clicking the same song, toggle play/pause
      togglePlayPause();
    } else {
      // If clicking a different song, play it
      playWithId(_id);
    }
  };

  const handleNavigate = () => {
    navigate(`/song/${_id}`); // Navigate to detail page
  };

  // Check if this specific song is currently playing
  const isThisSongPlaying = track._id === _id && playStatus;

  return (
    <div
      key={_id}
      className="group min-w-[180px] p-2 rounded cursor-pointer hover:bg-[#ffffff26] relative"
      onClick={handleNavigate} // Clicking the whole item navigates to detail
    >
      <div className="relative">
        <img className="object-cover rounded" src={image} alt="" />
        <div
          onClick={(e) => {
            e.stopPropagation(); // Prevent the navigation from triggering
            handleClick();
          }}
          className={`${
            isThisSongPlaying ? "block" : "hidden group-hover:block"
          } absolute bottom-6 right-2 transform translate-y-4 opacity-100 transition-all duration-300 ease-out z-40`}
        >
          <span className="absolute bg-black rounded-full h-6 w-6 bottom-2 right-2 transform -translate-x-1/2 -translate-y-1/2"></span>
          <i className="absolute bottom-6 right-2 transform translate-y-4">
            {isThisSongPlaying ? (
              <IoPauseCircleSharp size={50} color="#1db954" />
            ) : (
              <AiFillPlayCircle size={50} color="#1db954" />
            )}
          </i>
        </div>
      </div>
      <p className="text-white font-bold">{name}</p>
      <p className="text-white font-semibold line-clamp-2">{desc}</p>
    </div>
  );
}

export default SongItem;
