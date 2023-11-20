import React from "react";
import Avatar from "../../assets/Images/client-sm-1.jpg";

export default function Navbar() {
  return (
    <nav className="nav mb-3 p-2 px-3 bg-white w-100 d-flex align-items-center justify-content-between">
      <div className="d-flex gap-3 align-items-center justify-content-center">
        <i className="fa-solid fa-bars text-info fs-5" id="openTap"></i>
        <span className="fs-5 fw-medium">Welcome, Mohamed</span>
      </div>
      <div className="d-flex align-items-center gap-3">
        <i className="fa-solid fa-magnifying-glass text-info fs-5"></i>
        <i className="fa-regular fa-bell text-info fs-5"></i>
        <i className="fa-solid fa-gear text-info fs-5"></i>
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
