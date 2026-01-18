import React, { useEffect, useState } from "react";
import logo from "../../assets/Capwswsture-Photoroom.png";
import { Link, NavLink, useNavigate } from "react-router";
import {
  HiOutlineHome,
  HiOutlineBookOpen,
  HiOutlineInformationCircle,
  HiOutlineViewGrid,
  HiOutlineUserAdd,
  HiOutlineLogin,
  HiOutlineLogout,
  HiOutlineSun,
  HiOutlineMoon,
} from "react-icons/hi";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import Aos from "aos";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const links = (
    <>
      <li>
        <NavLink to="/" className="flex items-center gap-2">
          <HiOutlineHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/books" className="flex items-center gap-2">
          <HiOutlineBookOpen />
          Books
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="flex items-center gap-2">
          <HiOutlineInformationCircle />
          About
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard" className="flex items-center gap-2">
            <HiOutlineViewGrid />
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  // Theme state
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // Logout
  const handleLogout = () => {
    Swal.fire({
      title: "Do you want to Logout?",
      showDenyButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Logged Out Successfully");
        logout();
        navigate("/");
      }
    });
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="
        sticky top-2 z-50 navbar flex-wrap lg:flex-nowrap
        bg-base-100/60 backdrop-blur-md border border-white/20 shadow-sm rounded-xl
        w-full lg:w-[80%] mx-auto my-4 px-2 lg:px-0
      "
    >
      {/* LEFT */}
      <div className="navbar-start gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
            <li>
              <button onClick={toggleTheme} className="flex items-center gap-2">
                {theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
                {theme === "dark" ? "Light" : "Dark"}
              </button>
            </li>
          </ul>
        </div>

        <img src={logo} alt="logo" className="h-7 lg:h-[40px]" />
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1">{links}</ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-1 sm:gap-3 flex-wrap">
        {/* THEME ICON */}
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
          {theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
        </button>

        {/* AUTH */}
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="avatar cursor-pointer mr-3">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} alt="profile" />
              </div>
            </div>

            <ul className="menu dropdown-content bg-base-100 rounded-box shadow w-48 mt-3 p-2">
              <li className="text-sm font-semibold px-2">
                {user.displayName || "User"}
              </li>
              <li>
                <Link to="/dashboard/profile">My Profile</Link>
              </li>
              <div className="divider my-1"></div>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-error flex items-center gap-2"
                >
                  <HiOutlineLogout />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link to="/register">
              <button className="btn btn-xs sm:btn-md btn-primary flex items-center gap-1">
                <HiOutlineUserAdd />
                <span className="hidden sm:inline">Register</span>
              </button>
            </Link>
            <Link to="/login">
              <button className="btn btn-xs sm:btn-md btn-primary flex items-center gap-1 mr-3">
                <HiOutlineLogin />
                <span className="hidden sm:inline">Login</span>
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
