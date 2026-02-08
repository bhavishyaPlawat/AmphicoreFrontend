import React, { forwardRef, useState } from "react";
import PillNav from "./ui/PillNav";

const Navbar = forwardRef(({ theme }, ref) => {
  const isDark = theme === "dark";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Platform", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Plans", href: "#" },
    { label: "Partnership", href: "#" },
    { label: "Company", href: "#" },
  ];

  const navClass = isDark
    ? "bg-black/80 backdrop-blur-md"
    : "bg-white/80 backdrop-blur-md";
  const buttonClass = isDark
    ? "bg-white text-black hover:bg-gray-200"
    : "bg-black text-white hover:bg-gray-800";
  const logoClass = isDark ? "filter invert" : "";

  return (
    <header
      ref={ref}
      className={`w-full sticky top-0 z-50 transition-colors duration-300 ${navClass}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/logo.svg"
            alt="Dayos logo"
            className={`h-7 w-auto transition-all duration-300 ${logoClass}`}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center">
          <PillNav
            items={navItems}
            baseColor={isDark ? "#ffffff" : "#000000"}
            pillColor={isDark ? "#000000" : "#ffffff"}
            hoveredPillTextColor={isDark ? "#000000" : "#ffffff"}
            pillTextColor={isDark ? "#ffffff" : "#000000"}
          />
        </div>

        {/* Mobile Menu Toggle & Desktop Button */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <button
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${buttonClass}`}
            >
              Get Started
            </button>
          </div>
          <div className="lg:hidden">
            <PillNav
              items={navItems.slice(0, 1)} // Show only one item for hamburger icon
              onMobileMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              baseColor={isDark ? "#ffffff" : "#000000"}
              pillColor={isDark ? "#000000" : "#ffffff"}
            />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block px-4 text-center py-2 rounded-md text-base font-medium ${
                  isDark
                    ? "text-white hover:bg-gray-700"
                    : "text-black hover:bg-gray-200"
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              className={`w-full mt-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${buttonClass}`}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
});

export default Navbar;
