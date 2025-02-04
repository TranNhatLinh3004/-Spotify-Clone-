import React from "react";
import { Link, Outlet } from "react-router-dom";
import SidebarAdmin from "../../components/sidebar/SidebarAdmin";
import NavbarAdmin from "../../components/navbar/NavbarAdmin";

function Dashboard(props) {
  return (
    <div className="flex">
      <SidebarAdmin />
      <div className="w-[83.35%] flex min-h-screen absolute right-0 bg-gray-700">
        <div className="flex-1 p-8">
          <NavbarAdmin />

          <Outlet />
          {/* <div className="flex space-x-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h2 className="text-lg text-gray-600">Total Users</h2>
              <p className="text-3xl font-bold text-gray-800">500</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h2 className="text-lg text-gray-600">Total Songs</h2>
              <p className="text-3xl font-bold text-gray-800">150</p>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-white">
              Recent Activities
            </h2>
            <ul className="space-y-4 mt-4">
              <li className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-50">
                <Link to="/dashboard/add-song">
                  User JohnDoe added a new song
                </Link>
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-50">
                User JaneDoe updated profile
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-50">
                User Admin created a new playlist
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
