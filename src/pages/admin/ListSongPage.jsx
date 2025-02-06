import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../main";
function ListSongPage() {
  const [songs, setSongs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const fetchSongs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/api/song/list`);
      setSongs(response.data.songs);

      if (response.status === 200) {
        setLoading(false);
      }
    } catch (error) {
      console.error("Lỗi khi lấy danh sách bài hát:", error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const deleteSong = async () => {
    // console.log(id);
    setShowModal(false);

    try {
      const response = await axios.post(`${API}/api/song/remove`, {
        id: selectedSong,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        fetchSongs();
      }
    } catch (error) {
      console.error("Lỗi khi xóa bài hát:", error);
      toast.error("Không thể xóa bài hát. Vui lòng thử lại!");
    }
  };
  const confirmDelete = (id) => {
    setSelectedSong(id);
    setShowModal(true);
  };
  return loading ? (
    <div className="gird place-items-center  mt-[20%]">
      <div className="w-16 h-16 place-self-center animate-spin border-4 border-gray-700 rounded-full border-t-green-600 "></div>
    </div>
  ) : (
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
                  <td className="p-3 flex gap-2 text-center items-center justify-center">
                    <button
                      onClick={() =>
                        navigate(`/dashboard/update-song/${song._id}`)
                      }
                      className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => confirmDelete(song._id)}
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition"
                    >
                      Delete
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
      {/* Modal Xác Nhận Xóa */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">
              Bạn có chắc chắn muốn xóa bài hát này?
            </h2>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
              >
                Hủy
              </button>
              <button
                onClick={deleteSong}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ListSongPage;
