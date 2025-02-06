import React, { useEffect, useRef, useState } from "react";
import arrow_left from "../../assets/frontend-assets/left_arrow.png";
import arrow_right from "../../assets/frontend-assets/right_arrow.png";
import bell_icon from "../../assets/frontend-assets/bell.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) && // Không phải menu
        iconRef.current &&
        !iconRef.current.contains(event.target) // Không phải icon
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="z-20 bg-transparent fixed w-[89%] md:w-[72%]  top-0 pt-2 mt-2 pr-2 md:pr-0">
      <div className="w-full flex justify-between items-center front-semibold ">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={arrow_left}
            alt=""
          />{" "}
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="font-semibold cursor-pointer text-black bg-white px-4 py-1 text-[15px] rounded-2xl hidden md:block hover:transition hover:ease-in-out hover:scale-105">
            Explore Premium
          </p>
          <p className="font-semibold cursor-pointer bg-black text-white px-4 py-1 text-[15px] rounded-2xl hidden md:block hover:transition hover:ease-in-out hover:scale-105 hover:underline">
            Install App
          </p>
          <img className="w-6 cursor-pointer" src={bell_icon} alt="" />
          <button
            onClick={toggleMenu}
            ref={iconRef}
            className="cursor-pointer bg-blue-600 rounded-full p-2 h-8 w-8 text-white flex items-center justify-center
          shadow-[-0px_0px_0px_5px_#666666]"
          >
            L
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-8">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">
          Music
        </p>
        <p className="bg-black text-white  px-4 py-1 rounded-2xl cursor-pointer">
          Podcasts
        </p>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 right-0 mt-2 w-48 bg-black text-white rounded-lg shadow-lg p-2"
        >
          <ul>
            <li className="p-2 hover:bg-gray-700 cursor-pointer">Account</li>
            <li className="p-2 hover:bg-gray-700 cursor-pointer">Profile</li>
            <li className="p-2 hover:bg-gray-700 cursor-pointer">
              Upgrade to Premium
            </li>
            <li className="p-2 hover:bg-gray-700 cursor-pointer">Support</li>
            <li className="p-2 hover:bg-gray-700 cursor-pointer">Download</li>
            <li className="p-2 hover:bg-gray-700 cursor-pointer">Settings</li>
            <li className="p-2 hover:bg-red-600 cursor-pointer">Log out</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
