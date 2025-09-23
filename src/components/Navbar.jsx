import React from "react";
import PillNav from "@/components/ui/PillNav";

function Navbar() {
  return (
    // Added classes to make the header sticky with a blurred background effect
    <header className="w-full sticky pt-4 top-0 z-50  ">
      <div className="container mx-auto flex items-center justify-between px-6 py-2">
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

        {/* Centered PillNav - The flex layout now handles centering */}
        <div>
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
        <div className="flex-none">
          <button className="bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 transition-colors duration-300 font-medium">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
