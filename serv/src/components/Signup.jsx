import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useForm } from "react-hook-form";
import backgroundImage from "../assets/signup.jpg";

import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const { createUser, login } = useContext(AuthContext);

  //redirecting to homepage or specific page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        // Signed up
        const user = result.user;
        alert("Account Created Successfully !");
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="max-w-md shadow-2xl w-full rounded-2xl mx-auto items-center justify-center my-52 text-white border-[1px]"
        style={{
          backdropFilter: "blur(10px)", // Apply blur effect to the background
          backgroundColor: "transparent", // Add a semi-transparent white background for better contrast
        }}
      >
        <Link to="/" className="btn btn-sm btn-circle btn-ghost ml-5">
          <IoIosArrowBack />
        </Link>
        <h3 className="font-semibold text-lg text-center">Signup</h3>

        <div className="modal-action flex flex-col justify-center mt-0">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* Name */}
            <div className="form-control" method="dialog">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="Name"
                placeholder="Name"
                className="input text-black"
                {...register("Name")}
              />
            </div>
            {/* email */}
            <div className="form-control" method="dialog">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input text-black"
                {...register("email")}
              />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input text-black"
                {...register("password")}
              />
              <label className="label mt-1">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-white"
                >
                  Forgot password?
                </a>
              </label>
            </div>

            {/* error txt */}

            {/* login btn */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Signup"
                className="btn bg-yellow border-none"
              />
            </div>
            <p className="text-center mt-5 font-normal text-sm">
              Have an account?{" "}
              <button
                className="underline text-green-700 ml-1 "
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Login Now
              </button>
            </p>
          </form>

          {/* social signin */}
          <div className="text-center space-x-3 mb-4">
            <button className="btn btn-circle hover:bg-yellow border-0">
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-yellow border-0">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle hover:bg-yellow border-0">
              <FaGithub />
            </button>
          </div>
        </div>
        <Modal />
      </div>
    </div>
  );
};

export default Signup;
