import React from "react";
import { Link, Outlet } from 'react-router-dom'
import {
  AiOutlineShoppingCart,
  AiFillShop,
  AiFillDashboard,
  AiOutlineUser,
  AiOutlineInbox,
} from "react-icons/ai";
import { RiLogoutCircleLine, RiArrowDropRightLine } from "react-icons/ri";
import { HiMenuAlt1 } from "react-icons/hi";

import logo from "../Images/logo.png";

const Admin = () => {
  return (
    <div>
          <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
      <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden"
        >
          <HiMenuAlt1 className="h-3/4 w-3/4"></HiMenuAlt1>
         
        </label>
        <div className="p-4">
        <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu  py-8 px-2 w-60 border bg-white text-secondary">
          <li className="pb-5">
            <img src={logo} alt="Logo" />
          </li>
          <hr className="my-2" />
          <Link to='/admin/shop' className=" p-3 rounded-sm w-full hover:border-l-4 hover:border-primary flex justify-between items-center">
            <span className="flex justify-center items-center">
              <AiFillShop></AiFillShop>
              <li className="ml-2">SHOP</li>
            </span>
            <RiArrowDropRightLine className="h-8 w-8 p-0 m-0"></RiArrowDropRightLine>
          </Link>
          <Link to='/admin' className=" p-3 rounded-sm w-full hover:border-l-4 hover:border-primary flex justify-between items-center">
            <span className="flex justify-center items-center">
              <AiFillDashboard></AiFillDashboard>
              <li className="ml-2" >DASHBOARD</li>
            </span>
            <RiArrowDropRightLine className="h-8 w-8 p-0 m-0"></RiArrowDropRightLine>
          </Link>
          <hr className="my-2" />
          <Link to='/admin/customer' className=" p-3 rounded-sm w-full hover:border-l-4 hover:border-primary flex justify-between items-center">
            <span className="flex justify-center items-center">
              <AiOutlineUser></AiOutlineUser>
              <li className="ml-2">CUSTOMERS</li>
            </span>

            <RiArrowDropRightLine className="h-8 w-8 p-0 m-0"></RiArrowDropRightLine>
          </Link>
          <hr className="my-2" />

          <button className=" p-3 rounded-sm w-full hover:border-l-4 hover:border-primary flex justify-between items-center">
            <span className="flex justify-center items-center">
              <AiOutlineShoppingCart></AiOutlineShoppingCart>
              <li className="ml-2">ORDERS</li>
            </span>

            <RiArrowDropRightLine className="h-8 w-8 p-0 m-0"></RiArrowDropRightLine>
          </button>

          <Link to='/admin/products' className=" p-3 rounded-sm w-full hover:border-l-4 hover:border-primary flex justify-between items-center">
            <span className="flex justify-center items-center">
              <AiOutlineInbox></AiOutlineInbox>
              <li className="ml-2">PRODUCTS</li>
            </span>

            <RiArrowDropRightLine className="h-8 w-8 p-0 m-0"></RiArrowDropRightLine>
          </Link>
          <hr className="my-2" />
          <Link to='/' className=" p-3 rounded-sm w-full hover:border-l-4 hover:border-primary flex justify-between items-center">
            <span className="flex justify-center items-center">
              <RiLogoutCircleLine className=" text-primary"></RiLogoutCircleLine>
              <li className="ml-2 text-primary">LOGOUT</li>
            </span>

          </Link>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Admin;
