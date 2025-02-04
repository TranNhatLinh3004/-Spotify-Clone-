import React from "react";
import { assets } from "../../assets/admin-assets/assets";
import { Link, NavLink } from "react-router-dom";

function SidebarAdmin(props) {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-200 ease-in-out">
      <div className="text-white flex items-center space-x-2 px-4">
        {/* <span className="text-2xl font-extrabold">Admin</span> */}

        <Link to="/dashboard">
          <img
            src={assets.logo}
            alt="Error Logo"
            className="mt-5 w-[max(10vw, 100px)] hidden sm:block"
          />
        </Link>

        <Link to="/dashboard">
          <img
            src={assets.logo_small}
            alt="Error Logo"
            className="mt-5 w-[max(5vw, 40px)] sm:hidden block"
          />
        </Link>
      </div>

      <nav className="flex flex-col gap-4 pl-6">
        {/* <NavLink
          to="/dashboard/add-song"
          className="py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 bg-white text-black flex items-center
          drop-shadow-[-4px_4px_#1db954]

          hover:drop-shadow-[-0px_0px_#1db954]

          hover:text-white
          "
        >
          <img src={assets.add_song} alt="" className="w-6 mr-2" />
          Add Song
        </NavLink> */}
        <NavLink
          to="/dashboard/list-song"
          className="py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 bg-white text-black flex items-center
          drop-shadow-[-4px_4px_#1db954]

          hover:drop-shadow-[-0px_0px_#1db954]

          hover:text-white
          "
        >
          <img src={assets.add_song} alt="" className="w-6 mr-2" />
          List Song
        </NavLink>
        <NavLink
          href="/dashboard"
          className="py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 bg-white text-black flex items-center
          drop-shadow-[-4px_4px_#1db954]

          hover:drop-shadow-[-0px_0px_#1db954]

          hover:text-white
          "
        >
          <img src={assets.add_song} alt="" className="w-6 mr-2" />
          Add Album
        </NavLink>
        <NavLink
          href="/dashboard"
          className="py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 bg-white text-black flex items-center
          drop-shadow-[-4px_4px_#1db954]

          hover:drop-shadow-[-0px_0px_#1db954]

          hover:text-white
          "
        >
          <img src={assets.add_song} alt="" className="w-6 mr-2" />
          List Album
        </NavLink>
      </nav>
    </div>
  );
}

export default SidebarAdmin;
