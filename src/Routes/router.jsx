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
      {
        path:"/profile",
        element: <MyProfile></MyProfile>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>,
      },

      {
        path: "/dashboard/orders",
        element: <MyOrders></MyOrders>,
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
        element: <PaymentFailed></PaymentFailed>
      },
      {
        path: "/dashboard/invoices",
        element: <Invoices></Invoices>
      },
      {
        path: '/dashboard/users',
        element: <Users></Users>
      },
      {
        path: '/dashboard/manage-books',
        element: <ManageBooks></ManageBooks>
      },
      {
        path: '/dashboard/add-books',
        element: <AddBooks></AddBooks>
      },
      {
        path: '/dashboard/my-books',
        element: <MyBooks></MyBooks>
      },
      {
        path: '/dashboard/my-book-orders',
        element: <MyBookOrders></MyBookOrders>
      }
    ],
  },
]);
