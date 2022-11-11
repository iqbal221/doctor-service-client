import React from "react";

const Feedback = ({ feedback, serviceDetails, handleDelete, handleUpdate }) => {
  console.log(feedback.serviceId);
  console.log(serviceDetails._id);

  return (
    <div>
      {feedback?.serviceId === serviceDetails._id ? (
        <div className="border border-gray w-1/2 p-3 mb-4 rounded">
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
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Feedback;
