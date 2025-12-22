import React, { useEffect, useState } from 'react';
import logo from "../../assets/Capwswsture-Photoroom.png"
import { Link, NavLink, useNavigate } from 'react-router';
import { IoMdPersonAdd } from 'react-icons/io';
import { MdOutlineLogin, MdOutlineLogout } from 'react-icons/md';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import Aos from 'aos';
const NavBar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const links = (
    <>
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
  );

  // 🌙 Theme State
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  // handle logout function
  const handleLogout = () => {
    Swal.fire({
      title: "Do you want to Logout?",
      showDenyButton: true,
      customClass: {
        confirmButton: "my-confirm-btn",
        denyButton: "my-deny-btn",
      },
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
    <div className="sticky top-0 left-0 w-full z-50 navbar bg-base-100/50 backdrop-blur-md border border-white/20 shadow-sm rounded-xl">
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
            <div
              className="tooltip tooltip-bottom mx-1 lg:hidden"
              data-tip={
                theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
            >
              <span className='mr-2 text-xs ml-2'>Theme</span>
              <input
                type="checkbox"
                className="toggle toggle-xs"
                onChange={handleThemeToggle}
                checked={theme === "dark"}
              />
            </div>
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
        <div
          className="tooltip tooltip-bottom mx-4 hidden lg:block"
          data-tip={
            theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
          }
        >
          <input
            type="checkbox"
            className="toggle toggle-sm"
            onChange={handleThemeToggle}
            checked={theme === "dark"}
          />
        </div>

        {user && (
          <Link to="/dashboard/profile">
            <div
              className="avatar relative group m-4 tooltip tooltip-bottom"
              data-tip="My Profile"
            >
              <div className="w-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer">
                <img src={user.photoURL} alt="User profile avatar" />
              </div>
            </div>
          </Link>
        )}
        {user ? (
          <button
            onClick={handleLogout}
            className="btn m-1 lg:btn-md md:btn-md btn-xs bg-primary text-accent border-5 border-primary"
          >
            <span className="text-[18px] font-semibold">
              <MdOutlineLogout />
            </span>{" "}
            Logout
          </button>
        ) : (
          <>
            <Link to="/register">
              {" "}
              <button className="btn lg:btn-md md:btn-md btn-xs bg-primary text-accent border-5 border-primary">
                <span className="mr-1">
                  <IoMdPersonAdd />
                </span>{" "}
                Register
              </button>
            </Link>
            <Link to="/login">
              {" "}
              <button className="btn m-1 lg:btn-md md:btn-md btn-xs bg-primary text-accent border-5 border-primary">
                <span className="text-[18px] font-semibold">
                  <MdOutlineLogin />
                </span>{" "}
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;