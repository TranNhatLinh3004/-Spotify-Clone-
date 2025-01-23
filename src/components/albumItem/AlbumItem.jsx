import React from "react";
import { useNavigate } from "react-router-dom";

function AlbumItem({ image, name, desc, id }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      key={id}
      className="min-w-[180px] p-2 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className=" object-cover rounded" src={image} alt="" />
      <p className="text-white font-bold">{name}</p>
      <p className="text-white font-semibold">{desc}</p>
    </div>
  );
}

export default AlbumItem;
