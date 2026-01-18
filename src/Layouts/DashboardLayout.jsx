import React, { useContext } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router"; // using react-router as per your code
import Swal from "sweetalert2";

// --- Original Assets & Context Paths ---
import logo1 from "../assets/logo.png";
import logotext from "../assets/text.png";
import useRole from "../hooks/useRole";
// Assuming this path based on the target design provided

// --- Icons (Merged from your original + target design) ---
import { RxDashboard } from "react-icons/rx";
import { HiMiniShoppingBag } from "react-icons/hi2";
import {
  FiBookOpen,
  FiFileText,
  FiLayers,
  FiPlusCircle,
  FiUsers,
  FiMenu,
  FiX,
  FiLogOut,
} from "react-icons/fi";
import { MdManageAccounts } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import Loading from "../Components/Loading";
import { AuthContext } from "../context/AuthContext/AuthContext";

/* ---------------- Sidebar Component ---------------- */
const Sidebar = () => {
   const { role, roleLoading } = useRole();
  // Styling from the target design
  const navClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md transition font-medium ${
      isActive
        ? "bg-primary text-white shadow-md"
        : "hover:bg-base-300 text-gray-700"
    }`;

  return (
    <div className="drawer-side z-40">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

      <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content flex flex-col justify-between">
        {/* Top Section */}
        <div>
          {/* Logo - Keeping your original logo setup */}
          <div className="flex items-center justify-between mb-8 pl-2">
            <Link to="/" className="flex items-center gap-2">
              <img className="w-10" src={logo1} alt="Logo Icon" />
              <img className="w-24" src={logotext} alt="Logo Text" />
            </Link>

            <label
              htmlFor="my-drawer-2"
              className="btn btn-square btn-ghost lg:hidden"
            >
              <FiX size={22} />
            </label>
          </div>

          {/* --- Navigation Links --- */}

          {/* 1. Dashboard Home (Active only at exact /dashboard) */}
          <li className="mb-1">
            <NavLink to="/dashboard" end className={navClass}>
              <RxDashboard size={20} />
              <span>Dashboard Home</span>
            </NavLink>
          </li>

          {/* 2. User Routes (Your Original Conditionals) */}
          {role === "user" && (
            <>
              <li className="mb-1">
                <NavLink to="/dashboard/orders" className={navClass}>
                  <HiMiniShoppingBag size={20} />
                  <span>My Orders</span>
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/dashboard/wishlist" className={navClass}>
                  <AiOutlineHeart size={20} />
                  <span>My Wishlist</span>
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/dashboard/invoices" className={navClass}>
                  <FiFileText size={20} />
                  <span>Invoices</span>
                </NavLink>
              </li>
            </>
          )}

          {/* 3. Admin Routes (Your Original Conditionals) */}
          {role === "admin" && (
            <>
              <li className="mb-1">
                <NavLink to="/dashboard/users" className={navClass}>
                  <FiUsers size={20} />
                  <span>Users</span>
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/dashboard/manage-books" className={navClass}>
                  <MdManageAccounts size={20} />
                  <span>Manage Books</span>
                </NavLink>
              </li>
            </>
          )}

          {/* 4. Librarian Routes (Your Original Conditionals) */}
          {role === "librarian" && (
            <>
              <li className="mb-1">
                <NavLink to="/dashboard/add-books" className={navClass}>
                  <FiPlusCircle size={20} />
                  <span>Add Books</span>
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/dashboard/my-books" className={navClass}>
                  <FiBookOpen size={20} />
                  <span>My Books</span>
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/dashboard/my-book-orders" className={navClass}>
                  <FiLayers size={20} />
                  <span>Orders of My Books</span>
                </NavLink>
              </li>
            </>
          )}

          {/* 5. Common Route */}
          <li className="mb-1">
            <NavLink to="/dashboard/profile" className={navClass}>
              <FaUserCircle size={20} />
              <span>My Profile</span>
            </NavLink>
          </li>
        </div>

        {/* Bottom Section: Static Home Link */}
        <div className="border-t border-base-300 pt-4 mt-4">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-2 hover:bg-base-300 rounded-md transition text-error font-medium"
          >
            <FiLogOut size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </ul>
    </div>
  );
};

/* ---------------- Navbar Component ---------------- */
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Do you want to Logout?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#d33",
      denyButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        logout().then(() => {
          Swal.fire("Logged Out Successfully", "", "success");
          navigate("/");
        });
      }
    });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-30 px-4">
      {/* Mobile Toggle */}
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-2" className="btn btn-ghost btn-square">
          <FiMenu size={24} />
        </label>
      </div>

      {/* Page Title */}
      <div className="flex-1">
        <h1 className="text-xl md:text-2xl font-bold ml-2">Dashboard</h1>
      </div>

      {/* User Profile / Logout */}
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar border border-gray-200"
        >
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={user?.photoURL || "https://i.ibb.co/T0h280q/user.png"}
              alt="User"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li className="menu-title px-4 py-2 border-b mb-2">
            <span>{user?.displayName || "User"}</span>
          </li>
          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
          <li>
            <button onClick={handleLogout} className="text-error font-medium">
              <TbLogout2 /> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

/* ---------------- Main Layout ---------------- */
const DashboardLayout = () => {
  // Keeping your exact Hook and Loading logic
  const { role, roleLoading } = useRole();

  if (roleLoading) {
    return <Loading />;
  }

  return (
    <div className="drawer lg:drawer-open bg-base-200">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Content Area */}
      <div className="drawer-content flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Sidebar Area */}
      <Sidebar role={role} />
    </div>
  );
};

export default DashboardLayout;
