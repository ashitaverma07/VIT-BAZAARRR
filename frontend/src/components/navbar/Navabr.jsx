import React from "react";
import { NavLink } from "react-router-dom";

import { useState, useEffect } from "react";

import "flowbite";
import { Navbar } from "flowbite-react/lib/esm/components/Navbar";
import { useNavigate } from "react-router-dom";

import { Dropdown } from "flowbite-react/lib/esm/components/Dropdown";
import { Avatar } from "flowbite-react/lib/esm/components/Avatar";
import { useAuth } from "../../Contexts/AuthContext";

const Navabr = () => {
  const navigate = useNavigate();

  const { authUser, setAuthUser, isloggedin, setIsloggedin } = useAuth();
  const Logout = async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      setIsloggedin(false);
      navigate("/");
    } catch (err) {
      console.log(err);
      window.alert("You need to first log in.");
    }
  };

  return (
    <div className="dark ">
      <Navbar fluid={true} rounded={false}>
        <div className=" sm:absolute">
          <Navbar.Brand href="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              VIT Bazaar
            </span>
          </Navbar.Brand>
        </div>
        <div className="flex md:order-2 ">
          <NavLink
            to="/profile"
            active={true}
            className=" text-lg text-neutral-400 hover:text-neutral-200"
          >
            <img
              className=" rounded-full w-10"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt=""
            />
          </NavLink>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink
            to="/Home"
            active={true}
            className=" text-lg text-neutral-400 hover:text-neutral-200"
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className="text-lg text-neutral-400 hover:text-neutral-200"
          >
            Bazaar Aid
          </NavLink>
          <NavLink
            to="/contact"
            className="text-lg text-neutral-400 hover:text-neutral-200"
          >
            Contact
          </NavLink>
          <NavLink
            to="/testimonials"
            className="text-lg text-neutral-400 hover:text-neutral-200"
          >
            Events
          </NavLink>
          <NavLink
            to="/form"
            active={true}
            className=" text-lg text-neutral-400 hover:text-neutral-200"
          >
            Post Item
          </NavLink>
          {isloggedin ? (
            <button
              onClick={Logout}
              className="text-lg text-neutral-400 hover:text-neutral-200"
            >
              LogOut
            </button>
          ) : (
            <NavLink
              to="/signin"
              className="text-lg text-neutral-400 hover:text-neutral-200"
            >
              Login
            </NavLink>
          )}
        </Navbar.Collapse>
        {/* </div> */}
      </Navbar>
    </div>
  );
};

export default Navabr;
