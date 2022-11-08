import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import "./Main.css";
import Home from "../../Pages/Home/Home";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet>
        <Home></Home>
      </Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
