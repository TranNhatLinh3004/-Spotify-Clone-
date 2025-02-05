import React, { useState } from "react";
import { assets } from "../../assets/admin-assets/assets";
import axios from "axios";
import { API } from "../../main";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AddAlbumPage(props) {
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [background, setBackground] = useState("black");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("bgColor", background);
      formData.append("image", image);
      const response = await axios.post(`${API}/api/album/add`, formData);
      if (response.status === 200) {
        toast.success("Album added successfully!");
        setName("");
        setDesc("");
        setImage(false);
        setBackground("black");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again later.");
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

      <div className="flex flex-col gap-2  w-[50%]">
        <label htmlFor="title" className="font-bold text-white">
          Album name
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2.5 rounded text-gray-600 outline-green-600"
          placeholder="Type here"
        />
      </div>

      <div className="flex flex-col gap-2  w-[50%]">
        <label htmlFor="title" className="font-bold text-white">
          Album description
        </label>
        <input
          type="text"
          id="desc"
          name="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="p-2.5 rounded text-gray-600 outline-green-600"
          placeholder="Album description"
        />
      </div>

      <div className="flex flex-col gap-2  w-[50%]">
        <label htmlFor="title" className="font-bold text-white">
          Album Background
        </label>
        <input
          type="color"
          value={background}
          onChange={(e) => setBackground(e.target.value)}
        />
      </div>
      <button className="bg-green-600 text-white px-4 py-2 rounded w-[10%] hover:bg-black">
        Add
      </button>
    </form>
  );
}

export default AddAlbumPage;
