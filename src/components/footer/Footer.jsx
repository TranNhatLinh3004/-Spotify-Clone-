import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="bg-transparent text-white py-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <Link to="#" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                For the Record
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Communities</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <Link to="#" className="hover:text-white">
                For Artists
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Developers
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Advertising
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Investors
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Vendors
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Useful links</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <Link to="#" className="hover:text-white">
                Support
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Free Mobile App
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Spotify Plans</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <Link to="#" className="hover:text-white">
                Premium Individual
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Premium Student
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Spotify Free
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <div className="gap-10 hidden md:flex flex-wrap text-gray-400 text-sm">
          <Link to="#" className="hover:text-white w-fit">
            Legal
          </Link>
          <Link to="#" className="hover:text-white w-fit">
            Safety & Privacy
          </Link>
          <Link to="#" className="hover:text-white w-fit">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:text-white w-fit">
            Cookies
          </Link>
          <Link to="#" className="hover:text-white w-fit">
            About Ads
          </Link>
          <Link to="#" className="hover:text-white w-fit">
            Accessibility
          </Link>
        </div>

        <div className="flex space-x-4 mt-6 md:mt-0">
          <Link to="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram text-2xl"></i>
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter text-2xl"></i>
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook text-2xl"></i>
          </Link>
        </div>
        <div className="text-center text-gray-400 text-sm mt-0">
          &copy; 2025 Spotify
        </div>
      </div>
    </footer>
  );
}

export default Footer;
