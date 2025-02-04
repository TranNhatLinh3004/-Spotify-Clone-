import React, { useState, useEffect } from "react";
import { assets } from "../../assets/admin-assets/assets";
import axios from "axios";
import { API } from "../../main";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const UpdateSongPage = () => {
  const songId = useParams().id;

  console.log("linh", songId);

  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState("none");
  const [loading, setLoading] = useState(false);

  // Fetch song data for editing
  useEffect(() => {
    const fetchSongDetails = async () => {
      try {
        const response = await axios.get(`${API}/api/song/details/${songId}`);
        if (response.data.success) {
          const song = response.data.song;

          console.log("linhhhhhhhhhhhhhhhhhhhhh", song);

          setName(song.name);
          setDesc(song.desc);
          setAlbum(song.album);
          setImage(song.image);
          setAudio(song.audio);
        } else {
          toast.error("Không thể tải thông tin bài hát!");
        }
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu bài hát:", error);
      }
    };

    if (songId) {
      fetchSongDetails();
    }
  }, [songId]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("id", songId);
      formData.append("name", name);
      formData.append("album", album);
      formData.append("desc", desc);
      if (audio) formData.append("audio", audio);
      if (image) formData.append("image", image);

      const response = await axios.put(`${API}/api/song/update`, formData);

      if (response.data.success) {
        toast.success("🎵 Cập nhật bài hát thành công!");
      } else {
        toast.error("❌ Có lỗi xảy ra, vui lòng thử lại!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Lỗi khi cập nhật bài hát!");
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <div className="grid place-items-center mt-[20%]">
      <div className="w-16 h-16 animate-spin border-4 border-gray-700 rounded-full border-t-green-600"></div>
    </div>
  ) : (
    <h1>linh</h1>
    // <form
    //   className="mt-10 flex flex-col items-start gap-8 text-gray-600"
    //   onSubmit={onSubmitHandler}
    // >
    //   <div className="flex gap-8">
    //     <div className="flex flex-col gap-4">
    //       <p className="font-bold text-white">Update song</p>
    //       <input
    //         onChange={(e) => setAudio(e.target.files[0])}
    //         type="file"
    //         id="song"
    //         name="song"
    //         accept="audio/*"
    //         hidden
    //       />
    //       <label htmlFor="song" className="cursor-pointer">
    //         <img
    //           src={audio ? assets.upload_added : assets.upload_song}
    //           alt=""
    //           className="w-24 cursor-pointer"
    //         />
    //       </label>
    //     </div>
    //     <div className="flex flex-col gap-4">
    //       <p className="font-bold text-white">Update image</p>
    //       <input
    //         onChange={(e) => setImage(e.target.files[0])}
    //         type="file"
    //         id="image"
    //         name="image"
    //         accept="image/*"
    //         hidden
    //       />
    //       <label htmlFor="image" className="cursor-pointer">
    //         <img
    //           src={image ? URL.createObjectURL(image) : assets.upload_area}
    //           alt=""
    //           className="w-24 cursor-pointer h-24 object-cover"
    //         />
    //       </label>
    //     </div>
    //   </div>
    //   <div className="flex flex-col gap-2 w-[50%]">
    //     <label htmlFor="album" className="font-bold text-white">
    //       Album
    //     </label>
    //     <select
    //       value={album}
    //       onChange={(e) => setAlbum(e.target.value)}
    //       className="p-2.5 rounded text-gray-600 outline-green-600 w-[20%]"
    //     >
    //       <option value="none">None</option>
    //       <option value="2">2</option>
    //       <option value="3">3</option>
    //     </select>
    //   </div>
    //   <div className="flex flex-col gap-2 w-[50%]">
    //     <label htmlFor="title" className="font-bold text-white">
    //       Song name
    //     </label>
    //     <input
    //       type="text"
    //       id="title"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //       className="p-2.5 rounded text-gray-600 outline-green-600"
    //     />
    //   </div>
    //   <div className="flex flex-col gap-2 w-[50%]">
    //     <label htmlFor="desc" className="font-bold text-white">
    //       Song description
    //     </label>
    //     <input
    //       type="text"
    //       id="desc"
    //       value={desc}
    //       onChange={(e) => setDesc(e.target.value)}
    //       className="p-2.5 rounded text-gray-600 outline-green-600"
    //     />
    //   </div>
    //   <button className="bg-blue-600 text-white px-4 py-2 rounded w-[10%]">
    //     Update
    //   </button>
    // </form>
  );
};

export default UpdateSongPage;
