import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Home/Banner/Banner";
import AllServicesCard from "./AllServicesCard";

const AllServices = () => {
  const allServices = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <h2 className="text-3xl pt-20 text-center text-orange-400 font-bold ">
        All Services
      </h2>
      <div className="md:px-24 px-2 pt-16 pb-20 grid md:grid-cols-3 grid-cols-1 gap-10">
        {allServices?.map((allService) => (
          <AllServicesCard
            key={allService._id}
            allService={allService}
          ></AllServicesCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
