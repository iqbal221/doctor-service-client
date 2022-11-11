import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import MyReviewCard from "./MyReviewCard";
import MyServiceCard from "./MyServiceCard";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [feedbacks, setFeedbacks] = useState([]);
  const serviceDetails = useLoaderData();
  // console.log(serviceDetails);
  const { name, image2, description2, benefits, price, _id } =
    serviceDetails[0];

  useEffect(() => {
    fetch("https://doctor-service-server-mu.vercel.app/feedback")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFeedbacks(data);
      });
  }, []);

  return (
    <div className="md:px-24 pt-10 pb-16">
      <div className="card bg-base-100 shadow-md p-5 ">
        <div className="">
          {feedbacks ? (
            <div>
              <h1 className="text-center font-bold text-3xl my-10 text-orange-500 italic">
                Reviews With Service
              </h1>
              {feedbacks?.map((feedback) => (
                <MyReviewCard
                  key={feedback?._id}
                  feedback={feedback}
                ></MyReviewCard>
              ))}
            </div>
          ) : (
            <h3 className="text-4xl text-pink-500 text-center py-20">
              Please Added Reviews
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyReview;
