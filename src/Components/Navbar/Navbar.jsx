import React from "react";
import Avatar from "../../assets/Images/client-sm-1.jpg";

export default function Navbar({ setDisplaySidebar, DisplaySidebar }) {
  return (
    <nav className="nav mb-3 p-2 px-3 bg-white w-100 d-flex align-items-center justify-content-between">
      {/* Left section of the navbar */}
      <div className="d-flex gap-3 align-items-center justify-content-center">
        {/* Sidebar toggle button */}
        <button
          className="border-0 bg-transparent"
          onClick={() => {
            // Toggle the display of the sidebar
            setDisplaySidebar(!DisplaySidebar);
          }}
        >
          <i className="fa-solid fa-bars text-info fs-5" id="openTap"></i>
        </button>
        {/* Welcome message */}
        <span className="fs-5 fw-medium">Welcome, Mohamed</span>
      </div>
      {/* Right section of the navbar */}
      <div className="d-flex align-items-center gap-3">
        {/* Magnifying glass icon */}
        <i className="fa-solid fa-magnifying-glass text-info fs-5"></i>
        {/* Bell icon */}
        <i className="fa-regular fa-bell text-info fs-5"></i>
        {/* Gear icon */}
        <i className="fa-solid fa-gear text-info fs-5"></i>
        {/* Avatar image */}
        <img
          src={Avatar}
          width="30px"
          height="30px"
          className="w-100 rounded-circle"
          alt="Avatar"
        />
      </div>
    </nav>
  );
}
