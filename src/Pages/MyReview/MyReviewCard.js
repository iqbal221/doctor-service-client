import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyReviewCard = ({ feedback }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  // handle review

  const handleUpdate = (_id, event) => {
    event.preventDefault();

    const form = event.target;
    const description = form.msg.value;

    fetch(`https://doctor-service-server-mu.vercel.app/feedback/${_id}`, {
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
          const remaining = feedbacks.filter((or) => or._id !== _id);
          const updated = feedbacks.find((or) => or._id === _id);
          const newFeedback = [updated, ...remaining];
          setFeedbacks(newFeedback);
        }
      });
  };

  const handleDelete = (_id) => {
    const proceed = window.confirm("Do you want to delete ?");
    if (proceed) {
      fetch(`https://doctor-service-server-mu.vercel.app/feedback/${_id}`, {
        method: "DELETE",
        // headers: {
        //   authorization: `Bearer ${localStorage.getItem("genius_token")}`,
        // },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire("Deleted Successfully");
            const remainingFeedbacks = feedbacks.filter((or) => or._id !== _id);
            setFeedbacks(remainingFeedbacks);
          }
        });
    }
  };

  return (
    <div>
      <div className="border border-gray w-1/2 mx-auto p-3 mb-4 rounded">
        <div className="flex items-center mb-4">
          <img
            src={feedback?.image}
            className="w-10 h-10 rounded-full"
            alt=""
          />
          <div className="ml-2 flex ">
            <div className="mr-4 ">
              <h4 className="font-bold w-full">{feedback?.name}</h4>
            </div>
          </div>
        </div>
        <p>{feedback?.description}</p>
        <div className="flex pt-3">
          <button
            onClick={() => handleUpdate(feedback._id)}
            className="btn btn-primary btn-xs mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(feedback._id)}
            className="btn btn-error btn-xs"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
