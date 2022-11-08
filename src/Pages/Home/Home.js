import React from "react";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="md:px-24 py-20">
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
