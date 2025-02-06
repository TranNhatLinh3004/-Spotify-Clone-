import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../main";
function ListAlbumPage(props) {
  const [albums, setAlbums] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchAlbums = async () => {
    try {
      setLoading(true);

      const response = await axios.get(`${API}/api/album/list`);
      setAlbums(response.data.albums);
      console.log(response.data);

      if (response.status === 200) {
        setLoading(false);
      }
    } catch (error) {
      console.error("Lỗi khi lấy danh sách bài hát:", error);
      setLoading(false);
    }
  };
  const confirmDelete = (id) => {
    setSelectedAlbum(id);
    setShowModal(true);
  };
  useEffect(() => {
    fetchAlbums();
  }, []);
  const deleteAlbum = async () => {
    // console.log(id);
    setShowModal(false);

    try {
      const response = await axios.post(`${API}/api/album/remove`, {
        id: selectedAlbum,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        fetchAlbums();
      }
    } catch (error) {
      console.error("Lỗi khi xóa bài hát:", error);
      toast.error("Không thể xóa bài hát. Vui lòng thử lại!");
    }
  };
  const navigate = useNavigate();
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
        <h1 className="text-2xl font-bold  text-white"> All Albums List</h1>
        <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full hover:bg-green-500 hover:text-white font-semibold">
          <Link to="/dashboard/add-album">Add Album</Link>
        </button>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Description</th>
              <th className="p-3">Background</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {albums.length > 0 ? (
              albums.map((item) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-gray-100 transition duration-200"
                >
                  <td className="p-3">
                    <img
                      src={item.image || "https://via.placeholder.com/50"}
                      alt={item.name || "Unknown"}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  </td>
                  <td className="p-3 font-medium text-start">
                    {item.name || "Unknown"}
                  </td>
                  <td className="p-3 text-gray-600">{item.desc || "None"}</td>

                  <td className="p-3 items-start justify-start">
                    <input
                      type="color"
                      value={item.bgColor}
                      readOnly
                      className="w-16"
                    />
                  </td>
                  <td className="p-3 flex gap-3 text-center items-center justify-center">
                    <button
                      onClick={() =>
                        navigate(`/dashboard/update-item/${item._id}`)
                      }
                      className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => confirmDelete(item._id)}
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
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">
              Bạn có chắc chắn muốn xóa album này?
            </h2>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
              >
                Hủy
              </button>
              <button
                onClick={deleteAlbum}
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
export default ListAlbumPage;
