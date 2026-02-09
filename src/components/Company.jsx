import React from "react";
import { TiltedLogoCard } from "./ui/TiltedLogoCard";

function Company() {
  const logos = [
    {
      imageSrc: "/oracleLogo.svg",
      altText: "Oracle logo",
      hoverBgClass: "bg-[#00fd74]",
    },
    {
      imageSrc: "/sapLogo.svg",
      altText: "SAP logo",
      hoverBgClass: "bg-blue-400",
    },
    {
      imageSrc: "/workdayLogo.svg",
      altText: "Workday logo",
      hoverBgClass: "bg-yellow-400",
    },
    {
      imageSrc: "/servicenowLogo.svg",
      altText: "ServiceNow logo",
      hoverBgClass: "bg-green-400",
    },
    {
      imageSrc: "/coupaLogo.svg",
      altText: "Coupa logo",
      hoverBgClass: "bg-indigo-400",
    },
    {
      imageSrc: "/jiraLogo.svg",
      altText: "Jira logo",
      hoverBgClass: "bg-sky-400",
    },
    {
      imageSrc: "/anaplanLogo.svg",
      altText: "Anaplan logo",
      hoverBgClass: "bg-red-400",
    },
    {
      imageSrc: "/slackLogo.svg",
      altText: "Slack logo",
      hoverBgClass: "bg-violet-400",
    },
  ];

  return (
    <div className="w-full bg-white py-16 md:py-24 lg:py-32 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-none tracking-tighter max-w-4xl">
          FINALLY, AI THAT UNDERSTANDS YOUR BACK OFFICE.
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-700 max-w-3xl leading-relaxed">
          We don't just integrate with the best, we leverage decades of
          experience to develop AI-native solutions built for their platforms.
          Our deep expertise ensures your data is ready for AI, transforming
          proven technologies into intelligent, future-ready tools designed to
          drive your success.
        </p>

        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
          {logos.map((logo, index) => (
            <TiltedLogoCard
              key={index}
              imageSrc={logo.imageSrc}
              altText={logo.altText}
              hoverBgClass={logo.hoverBgClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Company;
