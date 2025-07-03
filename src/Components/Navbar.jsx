import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => (
  <nav className="text-white p-5 bg-gradient-to-l from-cyan-900 via-emerald-400 to-lime-900">
    <div className="container mx-auto flex justify-between">
      <Link to="/" className="text-4xl italic font-serif font-extralight">
        ShopMart!
      </Link>
      <button className="bg-orange-800 px-2 py-2 rounded-lg focus:outline-none hover:bg-red-700 cursor-pointer">
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
