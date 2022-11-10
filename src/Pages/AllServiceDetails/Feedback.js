import React from "react";

const Feedback = ({ feedback, handleDelete, handleUpdate }) => {
  return (
    <div>
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

export default Feedback;
