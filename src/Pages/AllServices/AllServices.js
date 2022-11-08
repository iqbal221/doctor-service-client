import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const AllServices = () => {
  const handleAllServices = () => {
    fetch("http://localhost:5000/all_services")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="text-center mt-6 ">
      <button
        onClick={handleAllServices}
        className="btn btn-outline btn-primary text-white "
      >
        See All Services{" "}
        <BsFillArrowRightCircleFill className="ml-2 text-2xl" />
      </button>
    </div>
  );
};

export default AllServices;
