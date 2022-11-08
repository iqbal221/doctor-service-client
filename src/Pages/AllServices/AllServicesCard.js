import React from "react";
import { GoArrowRight } from "react-icons/go";

const AllServicesCard = ({ allService }) => {
  const { name, price, image, description } = allService;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <h2 className="card-title text-center text-lime-500">{name}</h2>
      <figure>
        <img src={image} className="h-64 w-full" alt="Shoes" />
      </figure>
      <div className="service-card card-body">
        <h4 className="text-2xl">{price}</h4>
        <p className="">{description.slice(0, 90)}.....</p>
        <div className=" flex justify-end items-center hover:text-lime-500 font-bold">
          <button>Show details</button>
          <GoArrowRight />
        </div>
      </div>
    </div>
  );
};

export default AllServicesCard;
