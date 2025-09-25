import React, { forwardRef } from "react";
import PillNav from "./ui/PillNav";
const Navbar = forwardRef(({ theme }, ref) => {
  const isDark = theme === "dark";
  const navClass = isDark
    ? "bg-black/80 backdrop-blur-md"
    : "bg-white/80 backdrop-blur-md";
  const buttonClass = isDark
    ? "bg-white text-black hover:bg-gray-200 focus:ring-gray-300"
    : "bg-black text-white hover:bg-gray-800 focus:ring-gray-300";
  // This class will invert the logo's color for the dark theme
  const logoClass = isDark ? "filter invert" : "";
  return (
    <header
      ref={ref}
      className={`w-full sticky top-0 pt-4 pb-4 z-50 transition-colors duration-300 ${navClass}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-2">
        <div className="flex-none">
          <div className="logo">
            <img
              src="public/logo.svg"
              alt="logo"
              className={`h-8 w-auto transition-all duration-300 ${logoClass}`}
            />
          </div>
        </div>
        <div className="hidden md:block">
          <PillNav
            items={[
              { label: "Home", href: "#" },
              { label: "About", href: "#" },
              { label: "Services", href: "#" },
              { label: "Contact", href: "#" },
            ]}
            className="custom-nav"
            ease="power2.easeOut"
            baseColor={isDark ? "#ffffff" : "#000000"}
            pillColor={isDark ? "#000000" : "#ffffff"}
            hoveredPillTextColor={isDark ? "#000000" : "#ffffff"}
            pillTextColor={isDark ? "#ffffff" : "#000000"}
          />
        </div>
        <div className="flex-none">
          <button
            className={`px-5 py-2.5 rounded-full transition-colors duration-300 font-medium ${buttonClass}`}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
});
export default Navbar;
