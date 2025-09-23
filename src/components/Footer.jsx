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
            {/* Logo Placeholder */}
            <svg
              className="h-9"
              viewBox="0 0 135 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.3908 0.301758L22.043 27.9077L13.3691 14.3164H2.03027L17.6816 39.6982H26.3555L42.0068 14.3164L33.3329 0.301758H39.3908Z"
                fill="white"
              />
              <path
                d="M19.8652 0.301758L2.51739 27.9077L11.1913 14.3164H22.5302L6.87884 39.6982H15.5527L31.204 14.3164L22.5302 0.301758H19.8652Z"
                fill="white"
                fillOpacity="0.5"
              />
              <path
                d="M54.717 39.6982C64.0481 39.6982 71.5549 32.7482 71.5549 23.3615C71.5549 14.0304 64.0481 7.02502 54.717 7.02502C45.3858 7.02502 37.879 14.0304 37.879 23.3615C37.879 32.7482 45.3858 39.6982 54.717 39.6982ZM54.717 31.7801C59.6322 31.7801 63.6371 28.0537 63.6371 23.3615C63.6371 18.6139 59.6322 14.9427 54.717 14.9427C49.8017 14.9427 45.7968 18.6139 45.7968 23.3615C45.7968 28.0537 49.8017 31.7801 54.717 31.7801Z"
                fill="white"
              />
              <path
                d="M79.3499 7.61865V39.0924H87.2015V7.61865H79.3499Z"
                fill="white"
              />
              <path
                d="M100.088 39.0924C108.647 39.0924 114.76 33.7258 114.76 25.1666V22.4208C114.76 13.8616 108.647 8.43958 100.088 8.43958C91.5287 8.43958 85.416 13.8616 85.416 22.4208V25.1666C85.416 33.7258 91.5287 39.0924 100.088 39.0924ZM100.088 31.2295C95.5358 31.2295 93.3338 28.5363 93.3338 25.1666V22.4208C93.3338 19.0511 95.5358 16.2427 100.088 16.2427C104.64 16.2427 106.842 19.0511 106.842 22.4208V25.1666C106.842 28.5363 104.64 31.2295 100.088 31.2295Z"
                fill="white"
              />
              <path
                d="M125.792 39.6982C130.651 39.6982 134.425 36.6504 134.425 31.8354C134.425 28.1642 132.338 26.2488 127.368 24.3888L124.978 23.5309C122.21 22.5037 121.239 21.6457 121.239 20.2934C121.239 18.9964 122.441 17.8499 124.164 17.8499C125.887 17.8499 127.089 18.8771 127.089 20.6558H134.425C134.148 16.0445 130.045 13.5208 124.164 13.5208C118.837 13.5208 114.168 16.4674 114.168 20.3488C114.168 24.1227 116.633 26.0935 120.962 27.6763L123.411 28.5342C126.124 29.506 127.089 30.5886 127.089 31.9409C127.089 33.4071 125.772 34.4902 124.048 34.4902C122.105 34.4902 120.627 33.1932 120.627 31.3202H113.461C113.852 36.3195 118.506 39.6982 125.792 39.6982Z"
                fill="white"
              />
              <text
                x="50"
                y="25"
                fontFamily="Arial, sans-serif"
                fontSize="30"
                fill="white"
                textAnchor="middle"
              >
                Dayos
              </text>
            </svg>
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
