import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => (
  <nav className="text-white p-5 bg-gray-500">
    <div className="container mx-auto flex justify-between">
      <Link to="/" className="font-bold font-serif italic text-2xl">
        Shopify!
      </Link>
      <button className="bg-orange-700 px-2 py-2 rounded focus:outline-none cursor-pointer">
        <Link to="/cart">
          <div className="flex justify-between gap-2">
            <p className="pt-1">
              <IoCartOutline />
            </p>
            Cart ({cartCount})
          </div>
        </Link>
      </button>
    </div>
  </nav>
);

export default Navbar;
