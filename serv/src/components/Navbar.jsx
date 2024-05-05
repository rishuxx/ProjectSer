import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import "../App.css";
import Modal from "./Modal";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const { user } = useAuth();
  const [cart, refetch] = useCart();

  // handle scroll fnc

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        // Check if window is defined
        const offset = window.scrollY;
        if (offset > 0) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li className="lg:text-white font-semibold mr-4">
        <a href="/">HOME</a>
      </li>
      <li tabIndex={0} className="lg:text-white  font-semibold mr-4">
        <details>
          <summary>SERVICES</summary>
          <ul className="p-1  text-gray-600">
            <li>
              <a href="/painting">Painting</a>
            </li>
            <li>
              <a href="electrician">Electrician</a>
            </li>
            <li>
              <a href="plumbing">Plumbing</a>
            </li>
            <li>
              <a href="cleaning">Cleaning</a>
            </li>
          </ul>
        </details>
      </li>

      <li className="lg:text-white  font-semibold mr-4">
        <details>
          <summary>REAPIR</summary>
          <ul className="p-1 text-gray-600">
            <li>
              <a>AC Reapir</a>
            </li>
            <li>
              <a>TV Reapir</a>
            </li>
            <li>
              <a>R.O</a>
            </li>
            <li>
              <a>Cooler/Fan</a>
            </li>
            <li>
              <a>Washing Machine </a>
            </li>
          </ul>
        </details>
      </li>

      <li className="lg:text-white  font-semibold mr-4">
        <details>
          <summary>ONDEMAND</summary>
          <ul className="p-1  text-gray-600">
            <li>
              <a>Salon</a>
            </li>

            <li>
              <a>Decors</a>
            </li>

            <li>
              <a>Menpower Services</a>
            </li>
          </ul>
        </details>
      </li>

      <li className="lg:text-white  font-semibold mr-4">
        <a>CONTACT</a>
      </li>
    </>
  );

  return (
    <header className="max-w-[1620px]  container mx-auto pt-4 font-medium fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out">
      <div
        className={`navbar xl:px-1 ${
          isSticky
            ? "shadow-2xl bg-gray-400/30 backdrop-blur-lg rounded-xl w-full text-white transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52 font-black absolute top-16 left-0">
              {navItems}
            </ul>
          </div>
          <a href="/">
            <img
              src={logo}
              alt="Logo for Company"
              className="w-36 ml-12"
              loading="lazy"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {/* cart Items */}
          <Link to="cart">
            <motion.ul
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost btn-circle mr-8 lg:flex  hidden items-center justify-center"
              >
                <div className="indicator">
                  <Icon
                    icon="solar:cart-check-outline"
                    className="size-8 text-white cursor-pointer hover:text-yellow-500 duration-100 transition-all ease-in-out"
                  />
                  <span className="badge badge-sm bg-yellow border-none indicator-item">
                    {cart.length}
                  </span>
                </div>
              </div>
            </motion.ul>
          </Link>
          {/* Login button */}

          {user ? (
            <Profile user={user} />
          ) : (
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn px-5 text-black flex items-center gap-2 mr-12"
            >
              Login
            </button>
          )}

          <Modal />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
