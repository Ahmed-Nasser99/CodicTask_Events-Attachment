import React from "react";

export default function Navbar() {
  return (
    <nav className="nav mb-3 p-2 bg-white w-100">
      <div className="d-flex gap-3 align-items-center justify-content-center">
        <i className="fa-solid fa-bars text-info fs-5" id="openTap"></i>
        <span className="fs-5 fw-medium">Welcome, Mohamed</span>
      </div>
    </nav>
  );
}
