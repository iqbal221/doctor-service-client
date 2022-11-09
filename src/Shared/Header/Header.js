import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Contexts/AuthProvider";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  // const handleLogOut = () => {
  //   logOut()
  //     .then(() => {})
  //     .catch((error) => console.error(error));
  // };

  return (
    <div>
      <nav className="">
        <div className="mx-auto sm:px-6 lg:px-24 py-2">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex  items-center">
                <div>
                  <img
                    src={logo}
                    className="w-12 h-12 bg-warning rounded-full  text-lime-500"
                    alt=""
                  />
                </div>

                <div className=" w-auto text-2xl text-white">
                  <span className="text-purple-500	font-bold">
                    FITNESS TRAINER
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className=" hover:bg-orange-300 hover:text-white text-lime-500 px-3 py-2 rounded-md text-md font-medium"
                  >
                    Home
                  </Link>

                  <Link
                    to="/faq"
                    className="hover:bg-orange-300 hover:text-white text-lime-500 px-3 py-2 rounded-md text-md font-medium"
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/blogs"
                    className="hover:bg-orange-300 hover:text-white text-lime-500 px-3 py-2 rounded-md text-md font-medium"
                  >
                    Blogs
                  </Link>

                  {!user && !user?.uid ? (
                    <>
                      <Link to="/login">
                        <button className="btn btn-sm btn-outline btn-warning">
                          Login
                        </button>
                      </Link>
                      <Link to="/register">
                        <button className="btn btn-sm btn-outline btn-warning">
                          Register
                        </button>
                      </Link>
                    </>
                  ) : (
                    <Link className="text-warning ">
                      Email:{" "}
                      <span className="text-success ml-2">{user?.email}</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            {/* {user && user.uid ? (
              <div className="dropdown dropdown-end hidden md:block">
                <label tabIndex={0}>
                  <div className="avatar online placeholder hover:cursor-pointer">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                      <img src={user?.photoURL} alt="..." />
                    </div>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-60"
                >
                  <li>
                    <Link>
                      Profile:
                      <span>{user?.displayName}</span>
                    </Link>
                  </li>
                  <li>
                    <Link>Settings</Link>
                  </li>
                  <li>
                    <Link>
                      <button onClick={handleLogOut}>Logout</button>
                    </Link>
                  </li>

                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Darkmode</span>
                      <input
                        type="checkbox"
                        className="toggle toggle-primary"
                        checked
                      />
                    </label>
                  </div>
                </ul>
              </div>
            ) : (
              <label tabIndex={0}>
                <div className="avatar online placeholder hover:cursor-pointer">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-12"></div>
                </div>
              </label>
            )} */}
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div className="flex justify-between items-center pr-3">
                <div ref={ref} className="px-2  space-y-1 sm:px-3">
                  <Link
                    to="/"
                    className=" hover:bg-gray-700 hover:text-white text-warning px-3 py-2 rounded-md text-md font-medium"
                  >
                    Home
                  </Link>

                  <Link
                    to="/coursedetails"
                    className="hover:bg-gray-700 hover:text-white text-warning px-3 py-2 rounded-md text-md font-medium"
                  >
                    Courses
                  </Link>

                  <Link
                    to="/faq"
                    className="hover:bg-gray-700 hover:text-white text-warning px-3 py-2 rounded-md text-md font-medium"
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/blogs"
                    className="hover:bg-gray-700 hover:text-white text-warning px-3 py-2 rounded-md text-md font-medium"
                  >
                    Blogs
                  </Link>
                  {/* {!user && !user?.uid ? (
                    <>
                      <Link to="/login">
                        <button className="btn btn-sm btn-outline btn-warning">
                          Login
                        </button>
                      </Link>
                      <Link to="/register">
                        <button className="btn btn-sm btn-outline btn-warning">
                          Register
                        </button>
                      </Link>
                    </>
                  ) : (
                    <span></span>
                  )} */}
                </div>
                <div>
                  {/* {user && user.uid ? (
                    <div className="dropdown dropdown-end block md:hidden">
                      <label tabIndex={0}>
                        <div className="avatar online placeholder hover:cursor-pointer">
                          <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                            <img src={user?.photoURL} alt="..." />
                          </div>
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-60"
                      >
                        <li>
                          <Link>
                            Profile:
                            <span>{user?.displayName}</span>
                          </Link>
                        </li>
                        <li>
                          <Link>Settings</Link>
                        </li>
                        <li>
                          <Link>
                            <button onClick={handleLogOut}>Logout</button>
                          </Link>
                        </li>
                        <div className="form-control">
                          <label className="label cursor-pointer">
                            <span className="label-text">Darkmode</span>
                            <input
                              type="checkbox"
                              className="toggle toggle-primary"
                              checked
                            />
                          </label>
                        </div>
                      </ul>
                    </div>
                  ) : (
                    <label tabIndex={0}>
                      <div className="avatar online placeholder hover:cursor-pointer">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12"></div>
                      </div>
                    </label>
                  )} */}
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Header;
