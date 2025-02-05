import React from "react";
import { useNavigate } from "react-router-dom";

function AlbumItem({ image, name, desc, _id }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/album/${_id}`)}
      key={_id}
      className="min-w-[180px] p-2 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className=" object-cover rounded" src={image} alt="" />
      <p className="text-white font-bold">{name}</p>
      <p className="text-white font-semibold line-clamp-2">{desc}</p>
    </div>
  );
}

export default AlbumItem;
