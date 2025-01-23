import React from "react";

function Dashboard(props) {
  return (
    <div className="flex min-h-screen bg-green-500">
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          Admin Dashboard
        </h1>
        <div className="flex space-x-6 mt-8">
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
          <h2 className="text-2xl font-semibold text-gray-800">
            Recent Activities
          </h2>
          <ul className="space-y-4 mt-4">
            <li className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-50">
              User JohnDoe added a new song
            </li>
            <li className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-50">
              User JaneDoe updated profile
            </li>
            <li className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-50">
              User Admin created a new playlist
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
