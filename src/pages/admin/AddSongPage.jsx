import React, { useState } from "react";
import { assets } from "../../assets/admin-assets/assets";
import axios from "axios";
import { API } from "../../main";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddSongPage = () => {
  const [image, setImage] = useState(false);
  const [audio, setAudio] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState("none");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("album", album);
      formData.append("desc", desc);
      formData.append("audio", audio);
      formData.append("image", image);

      const response = await axios.post(`${API}/api/song/add`, formData);
      console.log(response);

      if (response.status === 200) {
        toast.success("🎵 Thêm bài hát thành công!");
        setName("");
        setDesc("");
        setAlbum("none");
        setImage(false);
        setAudio(false);
      } else {
        toast.error("❌ Có lỗi xảy ra, vui lòng thử lại!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <div className="gird place-items-center  mt-[20%]">
      <div className="w-16 h-16 place-self-center animate-spin border-4 border-gray-700 rounded-full border-t-green-600 "></div>
    </div>
  ) : (
    <form
      className="mt-10 flex flex-col items-start gap-8 text-gray-600"
      onSubmit={onSubmitHandler}
    >
      <div className="flex gap-8">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-white">Upload song</p>
          <input
            onChange={(e) => setAudio(e.target.files[0])}
            type="file"
            id="song"
            name="song"
            accept="audio/*"
            hidden
          />
          <label htmlFor="song" className="cursor-pointer">
            <img
              src={audio ? assets.upload_added : assets.upload_song}
              alt=""
              className="w-24 cursor-pointer"
            />
          </label>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-white">Upload image</p>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            name="image"
            accept="image/*"
            hidden
          />
          <label htmlFor="image" className="cursor-pointer">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
              className="w-24 cursor-pointer h-24 object-cover"
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2  w-[50%]">
        <label htmlFor="title" className="font-bold text-white">
          Album
        </label>
        <select
          onChange={(e) => setAlbum(e.target.value)}
          name=""
          id=""
          className="p-2.5 rounded text-gray-600 outline-green-600 w-[20%] "
        >
          <option value="none">None</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="flex flex-col gap-2  w-[50%]">
        <label htmlFor="title" className="font-bold text-white">
          Song name
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2.5 rounded text-gray-600 outline-green-600"
        />
      </div>

      <div className="flex flex-col gap-2  w-[50%]">
        <label htmlFor="title" className="font-bold text-white">
          Song description
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="p-2.5 rounded text-gray-600 outline-green-600"
        />
      </div>
      {/*
      
      */}

      <button className="bg-green-600 text-white px-4 py-2 rounded w-[10%]">
        Add
      </button>
    </form>
  );
};

export default AddSongPage;
