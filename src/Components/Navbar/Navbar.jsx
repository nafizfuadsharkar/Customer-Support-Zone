import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar max-w-[1200px] mx-auto bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>Home</li>
              <li>FAQ</li>
              <li>ChangeLog</li>
              <li>Blog</li>
              <li>DownLoad</li>
              <li>Contact</li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CS - Ticket System</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3 font-stretch-125% items-center">
            <li>Home</li>
            <li>FAQ</li>
            <li>ChangeLog</li>
            <li>Blog</li>
            <li>DownLoad</li>
            <li>Contact</li>
            <a className="btn">+ New Ticket</a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
