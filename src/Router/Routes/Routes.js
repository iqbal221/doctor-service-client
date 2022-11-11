import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AllServiceDetails from "../../Pages/AllServiceDetails/AllServiceDetails";
import AllServices from "../../Pages/AllServices/AllServices";
import Home from "../../Pages/Home/Home";
import MyReview from "../../Pages/MyReview/MyReview";
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
        loader: () =>
          fetch("https://doctor-service-server-mu.vercel.app/all_services"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/all_services/:id",
        element: <AllServiceDetails></AllServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://doctor-service-server-mu.vercel.app/all_services/${params.id}`
          ),
      },
      {
        path: "/my_review",
        element: <MyReview></MyReview>,
        loader: ({ params }) =>
          fetch(`https://doctor-service-server-mu.vercel.app/all_services/`),
      },
    ],
  },
]);

export default router;
