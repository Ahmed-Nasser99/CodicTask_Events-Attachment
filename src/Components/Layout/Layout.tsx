import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
export default function Layout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
