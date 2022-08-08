import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  mb-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="" src="/image/logo.svg" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav  ms-auto d-flex justify-content-between align-items-center">
              <a
                className="nav-link active navText"
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <a className="nav-link navText" href="#">
                Services
              </a>
              <a className="nav-link navText text-nowrap" href="#">
                About Us
              </a>
              <button id="btn1" className="text-nowrap">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
