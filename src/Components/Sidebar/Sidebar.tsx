import React from "react";
import logo from "../../assets/Images/Logo-Klavis.png";
import CreateLogo from "../../assets/Images/Icons/Add_Folder.png";
import MangeLogo from "../../assets/Images/Icons/Mange_Folder.png";
import AdministartorLogo from "../../assets/Images/Icons/user-shield.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex-shrink-0 p-3 bg-white w-100 h-100 rounded sidebar">
      <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
        <img src={logo} alt="logo" />
      </div>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed flex-row-reverse justify-content-between px-4 w-100"
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
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed flex-row-reverse justify-content-between px-4 w-100"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse"
            aria-expanded="true"
          >
            <div className="d-flex gap-2 align-items-center">
              <img src={MangeLogo} alt="MangeLogo" width="20px" height="20px" />
              Mangae
            </div>
          </button>
          <div className="collapse show" id="home-collapse">
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
  );
}
