import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Books from "../Pages/Books/Books";
import DashboardLayout from "../Layouts/DashboardLayout";
import Coverage from "../Pages/Home/Coverage/Coverage";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
            path:"/coverage",
            element: <Coverage></Coverage>,
            loader: ()=> fetch("coverage.json").then(res=> res.json())
            
        },
        {
            path: "/books",
            element: <Books></Books>
        },
        {
            path:"/register",
            element: <Register></Register>
        },
        {
            path: "/login",
            element: <Login></Login>
        }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>
  }
]);
