import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
export default function Layout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 p-0">
          <Sidebar />
        </div>
        <div className="col p-0">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
