import React, { useRef, useState } from "react";

// Custom TiltedCard component with cursor-following tilt effect
export const TiltedLogoCard = ({ imageSrc, altText, hoverBgClass }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / (rect.height / 2)) * -15;
    const rotateY = (mouseX / (rect.width / 2)) * 15;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform("");
  };

  return (
    <div
      ref={cardRef}
      className={`relative h-[120px] w-full max-w-[300px] sm:h-[140px] sm:max-w-[325px] overflow-hidden rounded-[2.5rem] sm:rounded-[3.2rem] transition-all duration-300 ease-out cursor-pointer ${
        isHovered ? hoverBgClass : "bg-black"
      }`}
      style={{
        transform:
          transform ||
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex h-full w-full items-center justify-center p-6">
        <img
          src={imageSrc}
          alt={altText}
          className="h-10 sm:h-12 w-auto max-w-full object-contain"
          style={{
            // 👇 KEY CHANGE IS HERE 👇
            filter: isHovered
              ? "brightness(0) invert(0)"
              : "brightness(0) invert(1)",
            transform: "translateZ(20px)",
            transition: "filter 0.3s ease-out", // Add a transition for the filter
          }}
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"
        style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.3s" }}
      />
    </div>
  );
};
