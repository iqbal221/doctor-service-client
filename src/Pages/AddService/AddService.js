import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthProvider";

const AddService = () => {
  const { user } = useContext(AuthContext);

  const handleAddService = (event) => {
    event.preventDefault();

    if (user?.uid) {
      const form = event.target;
      const name = form.name.value;
      const image = form.image.value;
      const image2 = form.image2.value;
      const price = form.price.value;
      const benefits = form.benefits.value;
      const description = form.description.value;
      const description2 = form.description2.value;
      console.log(
        name,
        image,
        image2,
        price,
        benefits,
        description,
        description2
      );

      const serviceInfo = {
        name,
        image,
        image2,
        price,
        benefits,
        description,
        description2,
      };
      fetch("https://doctor-service-server-mu.vercel.app/all_services", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("fitness_trainer")}`,
        },
        body: JSON.stringify(serviceInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged === true) {
            Swal.fire(`Service added successfully`);
            form.reset();
          }
        });
    } else {
      Swal.fire(`Please login first for add service`);
    }
  };
  return (
    <div className="md:px-24 px-2 pt-16 pb-16">
      <div className="card w-full bg-base-100 shadow-lg pb-16">
        <div className="card-body  mx-auto">
          <h2 className="card-title text-3xl text-orange-500 mb-6">
            Add Service
          </h2>
          <form
            onSubmit={handleAddService}
            className="grid md:grid-cols-3 grid-cols-1 gap-4"
          >
            <input
              defaultValue={user.email}
              readOnly
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered w-full max-w-xs "
            />
            <input
              name="name"
              type="text"
              placeholder="service name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="image"
              type="text"
              placeholder="image/photo url"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="image2"
              type="text"
              placeholder="image 2/photo url 2"
              className="input input-bordered w-full max-w-xs"
            />

            <input
              name="price"
              type="text"
              placeholder="price"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="benefits"
              type="text"
              placeholder="benefits"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="description"
              type="text"
              placeholder="description"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="description2"
              type="text"
              placeholder="description 2"
              className="input input-bordered w-full max-w-xs"
            />
            <br></br>
            <div className="card-actions justify-start">
              <button className="btn btn-primary mt-3">Add Service</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
