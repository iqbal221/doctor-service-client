import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

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
