import React from 'react';
import logo from "../../assets/Capwswsture-Photoroom.png"
import { Link, NavLink } from 'react-router';
import { IoMdPersonAdd } from 'react-icons/io';
import { MdOutlineLogin } from 'react-icons/md';
const NavBar = () => {


const links = <>
<li>
    <NavLink to="/">Home</NavLink>
</li>
<li>
    <NavLink to="/books">Books</NavLink>
</li>
<li>
    <NavLink to="/dashboard">Dashboard</NavLink>
</li>
</>


    return (
      <div className="navbar bg-base-100 shadow-sm">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img
            className="btn btn-ghost lg:ml-0 md:ml-0 ml-[-15px] md:[h-40px] lg:h-[40px] h-[30px]"
            src={logo}
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/register">
            {" "}
            <button className="btn lg:btn-md md:btn-md btn-sm bg-primary text-accent border-5 border-primary">
              <span className="mr-1">
                <IoMdPersonAdd />
              </span>{" "}
              Register
            </button>
          </Link>
          <Link to="/login">
            {" "}
            <button className="btn m-1 lg:btn-md md:btn-md btn-sm bg-primary text-accent border-5 border-primary">
              <span className="text-[18px] font-semibold">
                <MdOutlineLogin />
              </span>{" "}
              Login
            </button>
          </Link>
        </div>
      </div>
    );
};

export default NavBar;