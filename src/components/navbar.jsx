import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const links = ["home", "about", "shop", "register", "cart"];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navlinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  const Ysabeau = () => {
    return {
      fontFamily: "Ysabeau SC",
      fontOpticalSizing: "auto",
      fontWeight: 700,
      fontStyle: "normal",
    };
  };

  return (
    <nav className="bg-amber-600 w-full h-[100px] flex justify-center">
      <section className="flex flex-row px-3 justify-between m-auto w-full">
        <div className="flex flex-row">
          <img
            src={logo}
            alt="logo"
            className="hidden sm:block w-14 h-14 rounded-md"
          />
          <h1 className="text-gray-50 text-2xl mx-3 my-auto" style={Ysabeau()}>
            SweetMarket
          </h1>
        </div>
        <ul className="hidden flex-row my-auto sm:flex">
          {links.map((link, index) => (
            <li key={link}>
              <NavLink
                className="px-2 text-gray-100 font-md hover:underline"
                style={navlinkStyles}
                to={index !== 0 ? `/${link}` : "/"}
              >
                {index === links.length - 1 ? (
                  <FontAwesomeIcon icon={faShoppingCart} />
                ) : (
                  ""
                )}
                {link.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-row my-auto">
          <NavLink
            className="px-2 text-gray-100 font-md hover:underline"
            style={navlinkStyles}
            to={"/cart"}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            Cart
          </NavLink>
          <div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-100 px-2 font-md"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            {isDropdownOpen && (
              <div className="absolute z-50 top-10 left-0 mt-12 py-2 w-full bg-gray-100 rounded-md ">
                {links.map((link, index) => (
                  <NavLink
                    key={link}
                    to={index !== 0 ? `/${link}` : "/"}
                    className={`block px-4 py-2 text-center text-gray-900 ${
                      index < links.length - 2
                        ? "border-b-2 border-gray-300"
                        : ""
                    } hover:bg-amber-600`}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {index === links.length - 1 ? "" : link.toUpperCase()}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </nav>
  );
}
