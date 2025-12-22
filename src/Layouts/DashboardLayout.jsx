import React from 'react';

 
import logo1 from '../assets/logo.png'
import logotext from '../assets/text.png'
import { Link, NavLink, Outlet } from 'react-router';
import { RxDashboard } from 'react-icons/rx';
import { HiMiniShoppingBag } from 'react-icons/hi2';
import { FiBookOpen, FiFileText, FiLayers, FiPlusCircle, FiUsers } from 'react-icons/fi';
import {  MdManageAccounts } from 'react-icons/md';
import useRole from '../hooks/useRole';
import Loading from '../Components/Loading';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

const DashboardLayout = () => {
    const {role, roleLoading} = useRole()
console.log(role)
    if(roleLoading){
        return <Loading></Loading>
    }
    return (
      <div className="max-w-11/12 mx-auto">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Navbar */}
            <nav className="navbar w-full bg-base-300">
              <label
                htmlFor="my-drawer-4"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                {/* Sidebar toggle icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M9 4v16"></path>
                  <path d="M14 10l2 2l-2 2"></path>
                </svg>
              </label>

              <Link to='/dashboard'>
                {" "}
                <div className="px-4 btn btn-ghost">
                  <p className="font-medium text-xl">BookCourier Dashboard</p>
                </div>
              </Link>
            </nav>
            {/* Page content here */}
            <div className="p-4">
              <Outlet></Outlet>
            </div>
          </div>

          <div className="drawer-side is-drawer-close:overflow-visible">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
              {/* Sidebar content here */}
              <ul className="menu w-full grow">
                {/* List item */}
                <li>
                  <Link to="/">
                    <button
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex"
                      data-tip="Homepage"
                    >
                      {/* Home icon */}
                      <img className="w-12" src={logo1} alt="" />
                      <img
                        src={logotext}
                        className="is-drawer-close:hidden w-30"
                        alt=""
                      />
                    </button>
                  </Link>
                </li>
                {/* List item */}

                <li>
                  {role === "user" && (
                    <NavLink to="/dashboard/orders">
                      <button
                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center justify-start gap-1"
                        data-tip="My Order"
                      >
                        {/* Settings icon */}
                        <HiMiniShoppingBag />
                        <span className="is-drawer-close:hidden">
                          My Orders
                        </span>
                      </button>
                    </NavLink>
                  )}
                  {role === "user" && (
                    <NavLink to="/dashboard/wishlist">
                      <button
                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center justify-start gap-1"
                        data-tip="My Wishlist"
                      >
                        {/* Settings icon */}
                        <AiOutlineHeart />
                        <span className="is-drawer-close:hidden">
                          My Wishlist
                        </span>
                      </button>
                    </NavLink>
                  )}
                  {role === "user" && (
                    <NavLink to="/dashboard/invoices">
                      <button
                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center justify-start gap-1"
                        data-tip="Invoices"
                      >
                        {/* Settings icon */}
                        <FiFileText />
                        <span className="is-drawer-close:hidden">Invoices</span>
                      </button>
                    </NavLink>
                  )}
                  {role === "admin" && (
                    <NavLink to="/dashboard/users">
                      <button
                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center justify-start gap-1"
                        data-tip="Users"
                      >
                        {/* Settings icon */}
                        <FiUsers />
                        <span className="is-drawer-close:hidden">Users</span>
                      </button>
                    </NavLink>
                  )}
                  {role === "admin" && (
                    <NavLink to="/dashboard/manage-books">
                      <button
                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center justify-start gap-1"
                        data-tip="Manage Books"
                      >
                        {/* Settings icon */}
                        <MdManageAccounts />
                        <span className="is-drawer-close:hidden">
                          Manage Books
                        </span>
                      </button>
                    </NavLink>
                  )}
                  {role === "librarian" && (
                    <NavLink to="/dashboard/add-books">
                      <button
                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center justify-start gap-1"
                        data-tip="Add Books"
                      >
                        {/* Settings icon */}
                        <FiPlusCircle />
                        <span className="is-drawer-close:hidden">
                          Add Books
                        </span>
                      </button>
                    </NavLink>
                  )}
                  {role === "librarian" && (
                    <NavLink to="/dashboard/my-books">
                      <button
                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center justify-start gap-1"
                        data-tip="My Books"
                      >
                        {/* Settings icon */}
                        <FiBookOpen />
                        <span className="is-drawer-close:hidden">My Books</span>
                      </button>
                    </NavLink>
                  )}
                  {role === "librarian" && (
                    <NavLink to="/dashboard/my-book-orders">
                      <button
                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center justify-start gap-1"
                        data-tip="Orders of My Books"
                      >
                        {/* Settings icon */}
                        <FiLayers />
                        <span className="is-drawer-close:hidden">
                          Orders of My Books
                        </span>
                      </button>
                    </NavLink>
                  )}

                  <NavLink to="/dashboard/profile">
                    <button
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center justify-start gap-1"
                      data-tip="My Profile"
                    >
                      {/* Settings icon */}
                      <FaUserCircle />
                      <span className="is-drawer-close:hidden">My Profile</span>
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DashboardLayout;