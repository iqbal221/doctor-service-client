import React from "react";

const MyServiceCard = ({ feedback, singleService }) => {
  console.log(feedback);
  console.log(singleService);
  return (
    <div>
      {/* {feedback?.name} */}
      {singleService.name}
    </div>
  );
};

export default MyServiceCard;
