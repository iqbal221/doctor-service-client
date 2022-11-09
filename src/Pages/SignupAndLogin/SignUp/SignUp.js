import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const { createUser, userProfileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photourl = form.photourl.value;
    const password = form.password.value;

    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleUpdateProfile(name, photourl);
        toast.success("Registration Successfull");
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  const handleUpdateProfile = (name, photourl) => {
    const profile = {
      displayName: name,
      photoURL: photourl,
    };
    userProfileUpdate(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero  bg-base-100 pb-10">
      <div className="hero-content flex-col   ">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl  font-bold">Sign Up</h1>
        </div>
        <div className="login-card card flex-shrink-0 md:w-96 w-80 max-w-lg shadow-2xl bg-white">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photourl"
                type="photourl"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <small className="text-center">
              Already have an account? please
              <Link className="text-lime-500 ml-2" to="/login">
                Login
              </Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
