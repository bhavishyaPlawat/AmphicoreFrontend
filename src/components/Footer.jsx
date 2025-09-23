import React from "react";

// SVG Icon Components for clarity and reuse
const ArrowUpIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 15l7-7 7 7"
    ></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-2.13-1.82-2.13a1.85 1.85 0 00-1.68 1.21V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.28.93 3.28 3.68z" />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.506 2.506 0 0 1-1.768-1.768C2 15.22 2 12 2 12s0-3.22.42-4.814a2.506 2.506 0 0 1 1.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418ZM9.75 15.5V8.5l6.5 3.5-6.5 3.5Z"
      clipRule="evenodd"
    />
  </svg>
);

// Footer Link Column Component
const FooterLinkColumn = ({ title, links }) => (
  <div>
    <h3 className="font-semibold text-white tracking-wider">{title}</h3>
    <ul className="mt-4 space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="group text-sm relative inline-block overflow-hidden"
          >
            {/* Original Text */}
            <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-gray-300">
              {link.name}
            </span>
            {/* Text on Hover */}
            <span className="block absolute inset-0 transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0 text-yellow-400">
              {link.name}
            </span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

function Footer() {
  const navigation = {
    platform: [
      { name: "Hero Anwers", href: "#" },
      { name: "Hero Actions", href: "#" },
      { name: "Hero Experts", href: "#" },
    ],
    solutions: [
      { name: "IT Management", href: "#" },
      { name: "Accounting", href: "#" },
      { name: "Human Resources", href: "#" },
      { name: "Finance", href: "#" },
      { name: "Procurement", href: "#" },
    ],
    resources: [
      { name: "Use Cases", href: "#" },
      { name: "Blog", href: "#" },
      { name: "News", href: "#" },
      { name: "Partnership", href: "#" },
      { name: "Release Notes", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Security", href: "#" },
      { name: "Trust Center", href: "#" },
    ],
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-gray-400" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        {/* Top section with logo and navigation links */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            {/* Added filter-yellow-400 class for logo */}
            <img
              src="public/logo.svg"
              alt="logo"
              className="filter invert hue-rotate-180 brightness-75 saturate-150"
            />
            <p className="text-white font-semibold text-lg">
              Have questions or want to chat?
            </p>
            <p className="text-gray-300 text-sm">
              Drop us a line →{" "}
              <a
                href="mailto:hello@dayos.com"
                className="font-semibold text-yellow-400 hover:text-yellow-300"
              >
                hello@dayos.com
              </a>
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <FooterLinkColumn
                  title="Platform"
                  links={navigation.platform}
                />
              </div>
              <div className="mt-10 md:mt-0">
                <FooterLinkColumn
                  title="Solutions"
                  links={navigation.solutions}
                />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <FooterLinkColumn
                  title="Resources"
                  links={navigation.resources}
                />
              </div>
              <div className="mt-10 md:mt-0">
                <FooterLinkColumn title="Company" links={navigation.company} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Back to top button */}
            <button
              onClick={handleBackToTop}
              className="group flex items-center gap-2 text-sm font-medium hover:text-white transition-colors duration-300"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-600 group-hover:bg-white group-hover:text-black">
                <ArrowUpIcon />
              </span>
              Back to top
            </button>

            {/* Copyright */}
            <p className="text-xs leading-5 text-center">
              &copy; 2025 Dayos | All rights reserved
            </p>

            {/* Addresses */}
            <div className="hidden lg:flex gap-8 text-xs">
              <div>
                <p>400 Concar Drive</p>
                <p>San Mateo, CA</p>
                <p>94402, USA</p>
              </div>
              <div>
                <p>15 Beach Road,</p>
                <p>2nd Floor</p>
                <p>Singapore, 189677</p>
              </div>
            </div>

            {/* Social and Legal links */}
            <div className="flex items-center gap-x-6">
              <div className="flex gap-x-4">
                <a href="#" className="text-gray-500 hover:text-gray-300">
                  <span className="sr-only">LinkedIn</span>
                  <LinkedinIcon />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-300">
                  <span className="sr-only">X</span>
                  <XIcon />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-300">
                  <span className="sr-only">YouTube</span>
                  <YoutubeIcon />
                </a>
              </div>
              <div className="text-xs flex flex-col items-end gap-y-1">
                <a href="#" className="hover:text-white">
                  Online Terms of Service
                </a>
                <a href="#" className="hover:text-white">
                  Privacy Statement
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
