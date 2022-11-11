import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import { Stories } from "./Stories/Stories";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://doctor-service-server-mu.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="md:px-24 py-36">
        <Services services={services}></Services>
        <Stories></Stories>
      </div>
    </div>
  );
};

export default Home;
