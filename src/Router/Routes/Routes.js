import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServiceDetails from "../../Pages/AllServiceDetails/AllServiceDetails";
import AllServices from "../../Pages/AllServices/AllServices";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import MyReview from "../../Pages/MyReview/MyReview";
import Login from "../../Pages/SignupAndLogin/Login/Login";
import SignUp from "../../Pages/SignupAndLogin/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
      {
        path: "/all_services/:id",
        element: <AllServiceDetails></AllServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all_services/${params.id}`),
      },
      {
        path: "/my_review",
        element: (
          <PrivateRoutes>
            <MyReview></MyReview>
          </PrivateRoutes>
        ),
        loader: () => fetch(`http://localhost:5000/all_services/`),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoutes>
            <AddService></AddService>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
