import React from "react";
import PillNav from "./ui/PillNav";

function Navbar() {
  return (
    <header className="w-full">
      <div className="container mx-auto relative flex items-center px-6 py-2">
        {/* Logo */}
        <div className="flex-none">
          <div className="logo">
            <img
              src="public/logo.svg" // Make sure this path is correct
              alt="logo"
              className="h-8 w-auto"
            />
          </div>
        </div>

        {/* Centered PillNav */}
        <div className="transform translate-x-60 -translate-y-8">
          <PillNav
            items={[
              { label: "Home", href: "#" },
              { label: "About", href: "#" },
              { label: "Services", href: "#" },
              { label: "Contact", href: "#" },
            ]}
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
          />
        </div>

        {/* Get Started Button */}
        <div className="flex-none ml-auto">
          <button className="bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 transition-colors duration-300 font-medium">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
