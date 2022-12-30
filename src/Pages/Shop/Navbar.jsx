import React, { useState } from "react";
import { BsCartCheck } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-30 bg-white border-b-2 mb-5">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">HEALTH OS SHOP</a>
      </div>
      <div className="flex-none gap-2">
        <div className="indicator mr-5">
          <span className="indicator-item badge badge-primary">99+</span>
          <button className="btn btn-sm border rounded-lg bg-accent"><BsCartCheck></BsCartCheck> </button>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
