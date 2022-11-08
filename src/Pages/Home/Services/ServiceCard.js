import React from "react";

const ServiceCard = ({ service }) => {
  console.log(service);
  const { name, image, price, description } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <h2 className="card-title text-center text-lime-500">{name}</h2>
      <figure>
        <img src={image} className="h-64 w-full" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h4 className="text-2xl">{price}</h4>
        <p className='hover:<button className="btn btn-primary">Buy Now</button>'>
          {description.slice(0, 90)}.....
        </p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
