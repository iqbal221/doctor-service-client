import React from "react";
import ServiceCard from "./ServiceCard";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Services = ({ services }) => {
  return (
    <div>
      <h2 className="text-3xl text-center text-orange-400 font-bold mb-16">
        Do not wait, Start immediately
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center mt-6 ">
        <Link to={"/all_services"}>
          <button className="btn btn-outline btn-primary text-white ">
            See All Services{" "}
            <BsFillArrowRightCircleFill className="ml-2 text-2xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
