import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import google from "../../../assets/image/google.png";
import facebook from "../../../assets/image/fb.png";
import github from "../../../assets/image/github.jpg";
import { toast } from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const { userLogin, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        if (email === user.email) {
          toast.success("Login successfully");
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLoginWithGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  // const handleLoginWithGithub = () => {
  //   loginWithGithub()
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //       navigate("/");
  //     })
  //     .catch((error) => console.error(error));
  // };

  return (
    <div className="hero pb-10 bg-base-150 ">
      <div className="hero-content flex-col   ">
        <div className="text-center lg:text-left">
          <h3 className="text-2xl  font-bold">Login now!</h3>
        </div>
        <div className="login-card card flex-shrink-0 md:w-96 w-80 max-w-sm shadow-2xl bg-gray">
          <form onSubmit={handleLogin} className="card-body mb-0 pb-2">
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
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link
                  href="#"
                  className="label-text-alt link link-hover"
                  alt="..."
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-primary">Login</button>
            </div>
            <small className="text-center">
              Don't have an account? please
              <Link className="text-lime-500 ml-2 text-center" to="/signup">
                Sign Up
              </Link>
            </small>
            <p className="text-red-500">{error}</p>
          </form>
          <p className="pb-2 m-0 text-center text-gray-400">Sign In with</p>
          <div className="flex justify-center pb-5 pointer">
            <button onClick={handleLoginWithGoogle}>
              <img
                className="w-12 h-12 border rounded-md p-2 "
                src={google}
                alt=""
              />
            </button>
            <img
              className="w-12 h-12 border rounded-md p-2 mx-6"
              src={facebook}
              alt=""
            />
            <button>
              <img
                className="w-12 h-12 border rounded-md p-2"
                src={github}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
