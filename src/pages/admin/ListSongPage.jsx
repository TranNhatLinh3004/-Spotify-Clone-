import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../main";
function ListSongPage() {
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/song/list");
      setSongs(response.data.songs);
      console.log(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách bài hát:", error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const deleteSong = async (id) => {
    console.log(id);

    try {
      const response = await axios.post(`${API}/api/song/remove`, { id });

      if (response.data.success) {
        toast.success(response.data.message);
        fetchSongs();
      }
    } catch (error) {
      console.error("Lỗi khi xóa bài hát:", error);
      toast.error("Không thể xóa bài hát. Vui lòng thử lại!");
    }
  };

  return (
    <div className="pt-6 w-full ">
      <div
        className="mb-4
     flex  items-center justify-between"
      >
        <h1 className="text-2xl font-bold  text-white"> All Songs List</h1>
        <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full hover:bg-green-500 hover:text-white font-semibold">
          <Link to="/dashboard/add-song">Add Song</Link>
        </button>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Album</th>
              <th className="p-3">Duration</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {songs.length > 0 ? (
              songs.map((song) => (
                <tr
                  key={song._id}
                  className="border-b hover:bg-gray-100 transition duration-200"
                >
                  <td className="p-3">
                    <img
                      src={song.image || "https://via.placeholder.com/50"}
                      alt={song.name || "Unknown"}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  </td>
                  <td className="p-3 font-medium">{song.name || "Unknown"}</td>
                  <td className="p-3 text-gray-600">{song.album || "None"}</td>
                  <td className="p-3 text-gray-600">
                    {song.duration || "--:--"}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => deleteSong(song._id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-3 text-center text-gray-500">
                  No songs available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ListSongPage;
