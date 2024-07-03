import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";

export default function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCartClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      {/* upper nav */}
      <div className="flex items-center justify-between bg-orange-200 h-14 px-5 md:px-20 relative">
        <div className="flex items-center">
          <img className="w-10" src={logo} alt="img" />
          <span className="font-bold text-xl md:text-3xl">Shopsy</span>
        </div>

        {/* input and button */}
        <div className="hidden md:flex items-center gap-5 ">
          <input
            type="text"
            placeholder="search"
            className="outline-none border-orange-300 border-2 rounded-3xl p-1 pl-3 pr-9 absolute left-2/3"
          />
          <IoSearchSharp className="absolute right-52 mr-2  text-gray-400" />
        </div>
        <button
          className="bg-orange-500 px-3 py-2 rounded-3xl"
          onClick={handleCartClick}
        >
          <FaShoppingCart className="text-white text-lg" />
        </button>
      </div>
      {/* upper nav */}

      {/* lower nav */}
      <div className="hidden md:flex shadow-md h-10 items-center justify-center gap-10">
        <a href="##" className="hover:text-orange-400">Home</a>
        <a href="##" className="hover:text-orange-400">Top Rated</a>
        <a href="##" className="hover:text-orange-400">Kids Wear</a>
        <a href="##" className="hover:text-orange-400">Mens Wear</a>
        <a href="##" className="hover:text-orange-400">Electronics</a>
        {/* drop */}
        <div className="relative">
          <button
            className="flex items-center focus:outline-none hover:text-orange-400"
            onClick={handleDropdownToggle}
          >
            Trending Products <AiFillCaretDown className="ml-1" />
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
              <a
                href="##"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-400"
              >
                Trending Products
              </a>
              <a
                href="##"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-400"
              >
                Best Selling
              </a>
            </div>
          )}
        </div>
        {/* drop */}
      </div>
      {/* lower nav */}

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-8 rounded-lg shadow-lg w-80">
            <h2 className="text-2xl font-bold mb-4">Order Details</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-1 font-semibold">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold">Address</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded-md w-full"
              >
                Order Now
              </button>
              <button
                type="button"
                className="mt-4 w-full text-center text-gray-500"
                onClick={handleClosePopup}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Popup */}
    </div>
  );
}

