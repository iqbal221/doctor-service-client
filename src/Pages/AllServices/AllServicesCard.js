import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const AllServicesCard = ({ allService }) => {
  const { name, price, image, description, _id } = allService;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <h2 className="card-title text-center text-lime-500">{name}</h2>
      <figure>
        <img src={image} className="h-64 w-full" alt="Shoes" />
      </figure>
      <div className="service-card card-body">
        <h4 className="text-2xl">Course: {price}</h4>
        <p className="">{description.slice(0, 100)}.....</p>
        <div className=" flex justify-end items-center hover:text-lime-500 font-bold">
          <Link to={`/all_services/${_id}`}>
            <button>View details</button>
          </Link>
          <GoArrowRight />
        </div>
      </div>
    </div>
  );
};

export default AllServicesCard;
