import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Books from "../Pages/Books/Books";
import DashboardLayout from "../Layouts/DashboardLayout";
import Coverage from "../Pages/Home/Coverage/Coverage";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import BookDetails from "../Pages/BookDetails/BookDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../Pages/Dashboard/DashBoardHome/DashboardHome";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import Payment from "../Pages/Payment/Payment";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";
import PaymentFailed from "../Pages/Payment/PaymentFailed";
import Invoices from "../Pages/Invoice/Invoices";
import Users from "../Pages/Dashboard/Users/Users";
import ManageBooks from "../Pages/Dashboard/ManageBooks/ManageBooks";
import AddBooks from "../Pages/AddBooks/AddBooks";
import MyBooks from "../Pages/Dashboard/MyBooks/MyBooks";
import MyBookOrders from "../Pages/Dashboard/MyBookOrders/MyBookOrders";
import MyProfile from "../Pages/Profile/MyProfile";
import AdminRoute from "./AdminRoute";
import LibrarianRoute from "./LibrarianRoute";
import MyWishlist from "../Pages/Dashboard/MyWishlist/MyWishlist";
import { FaCircleInfo } from "react-icons/fa6";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/coverage",
        element: <Coverage></Coverage>,
        loader: () => fetch("coverage.json").then((res) => res.json()),
      },
      {
        path: "/books",
        element: <Books></Books>,
      },
      {
        path: "book/details/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>,
      },

      {
        path: "/dashboard/orders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/payment-success",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/dashboard/payment-cancelled",
        element: <PaymentFailed></PaymentFailed>,
      },
      {
        path: "/dashboard/invoices",
        element: (
          <PrivateRoute>
            <Invoices></Invoices>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <Users></Users>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-books",
        element: (
          <AdminRoute>
            <ManageBooks></ManageBooks>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-books",
        element: (
          <LibrarianRoute>
            <AddBooks></AddBooks>
          </LibrarianRoute>
        ),
      },
      {
        path: "/dashboard/my-books",
        element: (
          <LibrarianRoute>
            <MyBooks></MyBooks>
          </LibrarianRoute>
        ),
      },
      {
        path: "/dashboard/my-book-orders",
        element: (
          <LibrarianRoute>
            <MyBookOrders></MyBookOrders>
          </LibrarianRoute>
        ),
      },
      {
        path: "/dashboard/wishlist",
        element: (
          <PrivateRoute>
            <MyWishlist></MyWishlist>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="my-20">
        <p className="flex justify-center items-center gap-2 font-bold text-2xl">
          <span className="">
            <FaCircleInfo />
          </span>
          404 Not Found
        </p>
        <p className="text-center">The page you are requested is not found</p>
      </div>
    ),
  },
]);
