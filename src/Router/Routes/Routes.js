import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/SignupAndLogin/Login/Login";
import SignUp from "../../Pages/SignupAndLogin/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all_services",
        element: <AllServices></AllServices>,
        loader: () => fetch("http://localhost:5000/all_services"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
