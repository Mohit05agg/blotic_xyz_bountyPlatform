import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import menu from "../../../assets/menu-full.png";
import right_arrow from "../../../assets/right-arrow-white.png";
import FollowUsComponent from "../FooterSection/followUsComponent";

function NavbarComponent() {
  var [sidebar_w, setSidebar_w] = useState("w-0");
  return (
    <div className="md:w-1/2 z-50">
      <div className="my-auto md:hidden p-4">
        <img
          onClick={() => {
            setSidebar_w("w-screen");
          }}
          src={menu}
          alt="menu_icon"
          className="w-8 h-8 z-50"
        />
        <div
          className={`fixed right-0 top-0 pt-28 h-screen ${sidebar_w} bg-black flex flex-col bg-opacity-90 transition-all duration-500 justify-start items-start`}
        >
          <div
            onClick={() => {
              setSidebar_w("w-0");
            }}
            className="absolute top-2 left-0 p-3"
          >
            <img src={right_arrow} alt="right_arrow_icon" className="w-5 h-5" />
          </div>

          <button className="border-b-2 border-gray-300 border-opacity-0 p-3 text-2xl text-slate-100 w-full focus:border-opacity-100 transition-all duration-500 font-medium text-left">
            <Link to={"/events"}>Events</Link>
          </button>
          <button className="border-b-2 border-gray-300 border-opacity-0 p-3 text-2xl text-gray-500 w-full  transition-all duration-500 font-medium text-left cursor-none ">
            <Link to={"/Learning"}>Learning</Link>
          </button>
          <button className="border-b-2 border-gray-300 border-opacity-0 p-3 text-2xl text-gray-500 w-full  transition-all duration-500 font-medium text-left cursor-none ">
            <Link to={"/Profile"}>Profile</Link>
          </button>
          <button className="border-b-2 border-gray-300 border-opacity-0 p-3 text-2xl text-gray-500 w-full  transition-all duration-500 font-medium text-left cursor-none ">
            <Link to={"UserProfileform"}>Community</Link>
          </button>
          <button className="border-b-2 border-gray-300 border-opacity-0 p-3 text-2xl text-gray-500 w-full  transition-all duration-500 font-medium text-left cursor-none ">
            <Link to={"/contact-us"}>Contact Us</Link>
          </button>
          <div className="w-full absolute bottom-14">
            <FollowUsComponent />
          </div>
        </div>
      </div>

      <div className="my-auto px-20  bg-transparent z-50 hidden md:block h-full">
        <ul className="justify-between my-auto pt-8 flex">
          <li>
            <Link
              className="border-b-2 border-gray-300 border-opacity-0 text-white hover:border-opacity-100 transition-all duration-500 font-medium"
              to={"/events"}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              className="border-b-2 border-gray-300 border-opacity-0 text-gray-200  transition-all duration-500 font-medium"
              to={"/Learning"}
            >
              Learning
            </Link>
          </li>
          <li>
            <Link
              className="border-b-2 border-gray-300 border-opacity-0 text-gray-200  transition-all duration-500 font-medium "
              to={"/Profile"}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              className="border-b-2 border-gray-300 border-opacity-0 text-gray-200  transition-all duration-500 font-medium "
              to={"/UserProfileform"}
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              className="border-b-2 border-gray-300 border-opacity-0 text-gray-200  transition-all duration-500 font-medium"
              to={"/contact-us"}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              className="border-b-2 border-gray-300 border-opacity-0 text-gray-200  transition-all duration-500 font-medium"
              to={"/contact-us"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarComponent;
