import React, { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";

function SongItem({ name, image, desc, id }) {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playWithId(id)} // Thay vì playWithTrack(track)
      key={id}
      className="min-w-[180px] p-2 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className=" object-cover rounded" src={image} alt="" />
      <p className="text-white font-bold">{name}</p>
      <p className="text-white font-semibold">{desc}</p>
    </div>
  );
}

export default SongItem;
