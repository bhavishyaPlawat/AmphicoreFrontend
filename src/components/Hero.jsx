import React from "react";

function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center overflow-hidden">
      <div className="w-full grid grid-cols-1 md:grid-cols-10 gap-y-10 items-center">
        {/* Left Column: Text Content */}
        <div className="text-content md:col-span-5 order-1 md:order-1 px-6 sm:px-12 lg:px-24 flex flex-col justify-center h-full pt-10 md:pt-0">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-black leading-none tracking-tighter">
            AGENTIC COPILOT <br /> FOR YOUR <br /> ENTERPRISE
          </h1>
          <p className="mt-8 text-lg md:text-xl text-black max-w-lg">
            The business apps you depend on, the support you deserve, and the AI
            you've been waiting for - all in one platform.
          </p>
        </div>

        {/* Right Column: Video */}
        <div className="video-content md:col-span-5 order-2 md:order-2 w-full h-full flex items-center">
          <div className="w-full h-auto">
            <video
              className="w-full h-full object-cover"
              src="https://a.storyblok.com/f/314917/x/1fc22db7b3/1721996743-hero-latest.webm"
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
