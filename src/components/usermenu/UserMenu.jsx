import { useState, useRef, useEffect } from "react";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Đóng menu khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Icon để mở menu */}
      <button onClick={toggleMenu} className="p-2 rounded-full bg-gray-800">
        C
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-48 bg-black text-white rounded-lg shadow-lg"
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
};

export default UserMenu;
