import React from "react";
import { useLoaderData } from "react-router-dom";
import AllServices from "../AllServices/AllServices";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="md:px-24 py-36">
        <Services services={services}></Services>
        <AllServices></AllServices>
      </div>
    </div>
  );
};

export default Home;
