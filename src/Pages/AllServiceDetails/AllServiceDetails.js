import React from "react";
import { useLoaderData } from "react-router-dom";

const AllServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { name, image2, description2, benefits, price } = serviceDetails[0];
  console.log(serviceDetails);

  return (
    <div className="md:px-24 pt-10 pb-20">
      <div className="card bg-base-100 shadow-lg pb-10">
        <div className="card-body">
          <h2 className="card-title">
            Course Name: <span className="text-lime-500 text-3xl">{name}</span>
          </h2>
          <h4 className="font-bold text-xl italic pt-4">Summary</h4>
          <p className="py-6">{description2}</p>
          <img className="h-1/3" src={image2} alt="" />
          <br />
          <h4 className="font-bold text-orange-500 text-xl">
            Benefits of {name}
          </h4>
          <p className="py-4">{benefits}</p>
          <h2 className="text-3xl font-bold">Course Fee: {price}</h2>
        </div>
      </div>
    </div>
  );
};

export default AllServiceDetails;
