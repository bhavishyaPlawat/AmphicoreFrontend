import React, { useState, useRef, useEffect } from "react";

// Data for the carousel cards
const cardData = [
  {
    title: "Accounting",
    description:
      "Empower your team with AI to reduce manual workloads, manage month-end close, and achieve more with fewer resources.",
    // Using a placeholder for the 3D-style image
    imageSrc: "https://placehold.co/600x400/e2e8f0/e2e8f0?text=",
  },
  {
    title: "Human Resources",
    description:
      "Simplify HR with employee self-service powered by AI. Answer policy questions, manage benefits, and ensure satisfaction across the board.",
    imageSrc: "https://placehold.co/600x400/fecdd3/fecdd3?text=",
  },
  {
    title: "Procurement",
    description:
      "Prevent costly errors before they happen. Agentic AI analyzes procurement data, flags duplicates, and connects the dots between contracts, invoices, and payments.",
    imageSrc: "https://placehold.co/600x400/bae6fd/bae6fd?text=",
  },
  {
    title: "Information Technology",
    description:
      "Reduce ticket resolution times and empower your IT helpdesk with AI-powered agents that can solve common issues and escalate complex ones.",
    imageSrc: "https://placehold.co/600x400/d1fae5/d1fae5?text=",
  },
  {
    title: "Sales Operations",
    description:
      "Streamline your sales process, from quote-to-cash. Our AI helps manage contracts, track commissions, and provide insights to close deals faster.",
    imageSrc: "https://placehold.co/600x400/e9d5ff/e9d5ff?text=",
  },
];

// Reusable Card Component
const ServiceCard = ({ title, description, imageSrc }) => (
  <div className="flex-shrink-0 w-[90%] sm:w-[45%] md:w-[31%] bg-white rounded-2xl overflow-hidden shadow-sm mr-6">
    <div className="bg-zinc-100 h-48 flex items-center justify-center">
      <img
        src={imageSrc}
        alt={title}
        className="w-32 h-32 object-contain rounded-lg"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/128x128/cccccc/ffffff?text=Image";
        }}
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
      <p className="text-zinc-600 leading-relaxed mb-4">{description}</p>
      <button className="bg-zinc-100 text-zinc-800 font-medium py-2 px-4 rounded-lg hover:bg-zinc-200 transition-colors">
        More details
      </button>
    </div>
  </div>
);

// Carousel Component
function BusinessSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const calculateCardWidth = () => {
      if (carouselRef.current?.firstChild) {
        const cardElement = carouselRef.current.firstChild;
        const cardMargin = parseFloat(
          window.getComputedStyle(cardElement).marginRight
        );
        setCardWidth(cardElement.offsetWidth + cardMargin);
      }
    };
    calculateCardWidth();
    window.addEventListener("resize", calculateCardWidth);
    return () => window.removeEventListener("resize", calculateCardWidth);
  }, []);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < cardData.length - 1; // Adjust based on how many cards are visible

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    // This logic can be adapted for showing multiple cards at once
    if (canGoNext) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="w-full relative py-16">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
      >
        {cardData.map((card, index) => (
          <ServiceCard key={index} {...card} />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-8 space-x-3">
        <button
          onClick={handlePrev}
          disabled={!canGoPrev}
          className="bg-white p-2 rounded-md shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          disabled={!canGoNext}
          className="bg-white p-2 rounded-md shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Business() {
  return (
    <div className="w-full bg-[#f1f1f1] py-20 px-8 md:py-28 md:px-14 overflow-hidden">
      {/* Pill at the top */}
      <div className="flex justify-center mb-8">
        <div className="bg-zinc-300 text-zinc-700 text-sm font-medium px-5 py-2 rounded-full cursor-pointer">
          Hero Experts
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-7xl font-bold text-center text-black tracking-tighter leading-none max-w-5xl mx-auto">
        RUN A BETTER BUSINESS WITH DAYOS.
      </h1>

      {/* Paragraph Content */}
      <p className="mt-8 text-lg md:text-xl text-zinc-800 max-w-3xl mx-auto text-center leading-relaxed">
        The Dayos approach provides coverage across the core business functions
        within your organization. We ensure that the critical departments
        supporting your enterprise thrive, unlocking competitive advantages not
        possible with traditional approaches.
      </p>

      {/* NEW: Slider Section */}
      <BusinessSlider />
    </div>
  );
}

export default Business;
