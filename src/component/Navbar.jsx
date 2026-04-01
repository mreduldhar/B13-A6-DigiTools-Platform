import React from "react";
import cartIcon from "../assets/products/shopping-cart-01.svg";

const Navbar = () => {
  return (
    <nav className="navbar flex items-center justify-between bg-base-100 shadow-sm  py-4 px-6 sticky top-0 z-50">
      <div className="navbar-start">
        <a className="text-3xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
          DigiTools
        </a>
      </div>
      {/* Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-8">
          {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map(
            (item) => {
              return (
                <li>
                  <a className="font-medium hover:text-purple-600 cursor-pointer">
                    {item}
                  </a>
                </li>
              );
            },
          )}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        <a className="font-medium cursor-pointer">Login</a>
        <div className="cart-icon">
          <img src={cartIcon} alt="Cart Icon" />
        </div>
        <a className="btn font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:bg-purple-700 text-white py-3 px-4 border-none rounded-full cursor-pointer">
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
