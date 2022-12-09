import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import Feedback from "./Feedback";
import Swal from "sweetalert2";

const AllServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [feedbacks, setFeedbacks] = useState([]);
  const serviceDetails = useLoaderData();
  const { name, image2, description2, benefits, price, _id } =
    serviceDetails[0];

  const handleReview = (event) => {
    event.preventDefault();

    if (user?.uid) {
      const form = event.target;
      const msg = form.msg.value;

      const comments = {
        serviceId: _id,
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        description: msg,
      };
      fetch("https://doctor-service-server-mu.vercel.app/feedback", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("fitness_trainer")}`,
        },
        body: JSON.stringify(comments),
      })
        .then((res) => res.json())
        .then((data) => setFeedbacks(data));
    } else {
      Swal.fire(`Please login first for comments`);
    }
  };

  useEffect(() => {
    fetch("https://doctor-service-server-mu.vercel.app/feedback")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeedbacks(data);
      });
  }, []);

  return (
    <>
      <div className="md:px-24 px-2 pt-10 md:pb-16 pb-10">
        <div className="card bg-base-100 shadow-lg pb-10">
          <div className="card-body">
            <h2 className="card-title">
              Course Name:{" "}
              <span className="text-lime-500 text-3xl">{name}</span>
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
      <div className="md:px-24 px-2 pt-10 pb-16">
        <div className="card bg-base-100 shadow-md md:p-5 p-2 ">
          <h1 className="text-center font-bold text-4xl my-10 text-orange-500 italic">
            Reviews From Client
          </h1>
          {feedbacks?.map((feedback) => (
            <Feedback
              serviceDetails={serviceDetails[0]}
              key={feedback?._id}
              feedback={feedback}
            ></Feedback>
          ))}
          <div>
            <form onSubmit={handleReview}>
              <textarea
                name="msg"
                type="text"
                className="textarea textarea-primary  md:w-1/2 w-full h-48"
                placeholder="Comments here....."
              ></textarea>
              <br></br>
              <button className="btn btn-outline btn-primary mt-3 ">
                Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllServiceDetails;
