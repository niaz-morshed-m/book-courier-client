import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Books from "../Pages/Books/Books";
import DashboardLayout from "../Layouts/DashboardLayout";
import Coverage from "../Pages/Home/Coverage/Coverage";

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
        }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>
  }
]);
