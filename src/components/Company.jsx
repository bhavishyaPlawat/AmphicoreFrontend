import React from "react";
import { TiltedLogoCard } from "./ui/TiltedLogoCard"; // Assuming you export it

function Company() {
  const logos = [
    {
      imageSrc: "/oracleLogo.svg",
      altText: "Oracle logo",
      captionText: "Oracle",
      hoverBgClass: "bg-[#00fd74] ", // Custom hover color
    },
    {
      imageSrc: "/sapLogo.svg",
      altText: "SAP logo",
      captionText: "SAP",
      hoverBgClass: "bg-pink-500", // Custom hover color
    },
    {
      imageSrc: "/workdayLogo.svg",
      altText: "Workday logo",
      captionText: "Workday",
      hoverBgClass: "bg-blue-500", // Custom hover color
    },
    {
      imageSrc: "/servicenowLogo.svg",
      altText: "ServiceNow logo",
      captionText: "ServiceNow",
      hoverBgClass: "bg-orange-500", // Custom hover color
    },
    {
      imageSrc: "/coupaLogo.svg",
      altText: "Coupa logo",
      captionText: "Coupa",
      hoverBgClass: "bg-purple-500", // Custom hover color
    },
    {
      imageSrc: "/jiraLogo.svg",
      altText: "Jira logo",
      captionText: "Atlassian Jira",
      hoverBgClass: "bg-green-500", // Custom hover color
    },
    {
      imageSrc: "/anaplanLogo.svg",
      altText: "Anaplan logo",
      captionText: "Anaplan",
      hoverBgClass: "bg-pink-500", // Custom hover color
    },
    {
      imageSrc: "/slackLogo.svg",
      altText: "Slack logo",
      captionText: "Slack",
      hoverBgClass: "bg-blue-500", // Custom hover color
    },
  ];

  return (
    <div className="w-full rounded-t-[3rem] bg-white py-20 px-8 md:px-14">
      <h1 className="max-w-4xl text-[8vw] font-bold leading-none tracking-tight text-black md:text-[5vw] lg:text-[4.5vw]">
        FINALLY, AI THAT UNDERSTANDS YOUR BACK OFFICE.
      </h1>
      <p className="mt-10 max-w-3xl text-xl font-medium leading-relaxed text-zinc-600 md:text-2xl">
        We don't just integrate with the best, we leverage decades of experience
        to develop AI-native solutions built for their platforms. Our deep
        expertise ensures your data is ready for AI, transforming proven
        technologies into intelligent, future-ready tools designed to drive your
        success.
      </p>

      {/* Grid container for the logos */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {logos.map((logo, index) => (
          <TiltedLogoCard key={index} {...logo} />
        ))}
      </div>
    </div>
  );
}

export default Company;
