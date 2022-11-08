import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="md:px-24 py-36">
        <Services services={services}></Services>
      </div>
    </div>
  );
};

export default Home;
