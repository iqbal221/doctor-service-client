import React from "react";
import doctor from "../../../assets/image/doctor.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner md:flex flex-column-reverse  md:px-24 px-2 md:pb-0 pb-3">
      <img src={doctor} alt="" className="md:pt-24 pt-2 pl-8 " />
      <div className="md:pt-36 pt-2 text-white  md:pl-10 pl-2">
        <h1 className="md:text-5xl text-3xl font-bold mb-6">
          Hi, I am Dr Rafia
        </h1>
        <p className="text-yellow-300 mb-4	">
          {" "}
          Physical ability or physical fitness is a state of health and
          well-being and more specifically, it is the ability to perform various
          sports, occupations and daily activities. Physical fitness is
          generally achieved through proper nutrition, tolerable levels of
          vigorous physical exercise, and adequate rest.
        </p>
        <span className="mr-4">
          <button className="btn btn-warning">KNOW MORE</button>
        </span>
        <button className="btn btn-outline btn-accent">CONTACT US</button>
      </div>
    </div>
  );
};

export default Banner;
