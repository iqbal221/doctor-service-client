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
        description: msg,
        image: user.photoURL,
        email: user.email,
        name: user.displayName,
      };
      fetch("http://localhost:5000/feedback", {
        method: "POST",
        headers: {
          "content-type": "application/json",
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
    fetch("http://localhost:5000/feedback")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeedbacks(data);
      });
  }, []);

  // handle review

  const handleUpdate = (id, event) => {
    event.preventDefault();

    const form = event.target;
    const description = form.msg.value;

    fetch(`http://localhost:5000/feedback/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("genius_token")}`,
      },
      body: JSON.stringify(description),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = feedbacks.filter((or) => or._id !== id);
          const updated = feedbacks.find((or) => or._id === id);
          const newFeedback = [updated, ...remaining];
          setFeedbacks(newFeedback);
        }
      });
  };

  const handleDelete = (_id) => {
    const proceed = window.confirm("Do you want to delete ?");
    if (proceed) {
      fetch(`http://localhost:5000/feedback/${_id}`, {
        method: "DELETE",
        // headers: {
        //   authorization: `Bearer ${localStorage.getItem("genius_token")}`,
        // },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingFeedbacks = feedbacks.filter((or) => or._id !== _id);
            setFeedbacks(remainingFeedbacks);
          }
        });
    }
  };

  return (
    <>
      <div className="md:px-24 pt-10 pb-16">
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
      <div className="md:px-24 pt-10 pb-16">
        <div className="card bg-base-100 shadow-md p-5 ">
          <h1 className="text-center font-bold text-4xl my-10 text-orange-500 italic">
            Reviews From Client
          </h1>
          {feedbacks?.map((feedback) => (
            <Feedback
              key={feedback?._id}
              feedback={feedback}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            ></Feedback>
          ))}
          <div>
            <form onSubmit={handleReview}>
              <textarea
                name="msg"
                type="text"
                className="textarea textarea-primary  w-1/2 h-48"
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
