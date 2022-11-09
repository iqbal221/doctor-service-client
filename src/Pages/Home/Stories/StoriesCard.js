import React from "react";
import "./StoriesCard.css";

const StoriesCard = ({ story }) => {
  const { name, image, designation, description } = story;
  return (
    <div className="card bg-base-100 shadow-md p-5 hover:bg-lime-500 hover:text-white hover:pointer">
      <div className="flex items-center mb-4">
        <img className="w-20 h-20 rounded-full" src={image} alt="" />
        <div className="ml-6">
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm">{designation}</p>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default StoriesCard;
