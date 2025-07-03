import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => (
  <nav className="text-white p-5 bg-gradient-to-l from-purple-900 via-blue-800 to-violet-950">
    <div className="container mx-auto flex justify-between">
      <Link to="/" className="text-4xl italic font-serif font-extralight">
        ShopMart!
      </Link>
      <button className="bg-gray-800 px-2 py-2 rounded focus:outline-none hover:bg-red-700 cursor-pointer">
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
