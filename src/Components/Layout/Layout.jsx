import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout() {
  // State to control the display of the sidebar
  let [DisplaySidebar, setDisplaySidebar] = useState(true);

  return (
    <div className="container h-100">
      <div className="row h-100">
        <div
          className={
            DisplaySidebar
              ? "col-lg-2 col-md-3 p-0"
              : "d-none col-lg-2 col-md-3 p-0"
          }
        >
          {/* Sidebar component */}
          <Sidebar />
        </div>
        <div className="col p-0">
          {/* Navbar component */}
          <Navbar
            setDisplaySidebar={setDisplaySidebar}
            DisplaySidebar={DisplaySidebar}
          />
          <div className="p-3">
            {/* Render the nested routes */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
