import React from "react";
import logo from "../../assets/Images/Logo-Klavis.png";
import CreateLogo from "../../assets/Images/Icons/Add_Folder.png";
import MangeLogo from "../../assets/Images/Icons/Mange_Folder.png";
import AdministartorLogo from "../../assets/Images/Icons/user-shield.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex-shrink-0 p-3 bg-white w-100 h-100 rounded sidebar d-flex flex-column justify-content-between">
      <div>
        {/* Logo */}
        <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
          <img src={logo} alt="logo" />
        </div>
        <ul className="list-unstyled ps-0">
          {/* Create button */}
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed flex-row-reverse justify-content-between w-100"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              <div className="d-flex gap-2 align-items-center">
                <img
                  src={CreateLogo}
                  alt="CreateLogo"
                  width="20px"
                  height="20px"
                />
                Create
              </div>
            </button>
            <div className="collapse" id="dashboard-collapse"></div>
          </li>
          {/* Manage button  */}
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed flex-row-reverse justify-content-between w-100"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="true"
            >
              <div className="d-flex gap-2 align-items-center">
                <img
                  src={MangeLogo}
                  alt="MangeLogo"
                  width="20px"
                  height="20px"
                />
                Manage
              </div>
            </button>
            <div className="collapse show" id="home-collapse">
              {/* Administration link */}
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <Link to="" className="link-dark rounded">
                    <div className="d-flex gap-2 align-items-center">
                      <img
                        src={AdministartorLogo}
                        alt="AdministartorLogo"
                        width="20px"
                        height="20px"
                      />
                      Administration
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="helpChatContainer">
        {/* Help section */}
        <div className="d-flex align-items-center gap-2 ">
          <i className="fa-regular fa-circle-question c-gray fs-4"></i>
          <span className="fs-5">Help</span>
        </div>
        {/* Chat section */}
        <div className="d-flex align-items-center gap-2 my-2">
          <i className="fa-regular fa-message c-gray fs-4"></i>
          <span className="fs-5">Chat</span>
        </div>
      </div>
    </div>
  );
}
