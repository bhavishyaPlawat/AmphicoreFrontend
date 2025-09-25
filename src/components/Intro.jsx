import React from "react";

function Intro() {
  return (
    <div className="bg-black text-white rounded-t-[3rem] md:rounded-t-[4rem] py-16 md:py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16 md:mb-32">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              AI.
            </h2>
            <p className="text-lg text-neutral-300 max-w-sm">
              The technology no one can afford to ignore–but most struggle to
              implement securely, understand fully, or use effectively.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              GAP.
            </h2>
            <p className="text-lg text-neutral-300 max-w-sm">
              The Gap between technology, skills and people resources.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              CLOSED.
            </h2>
            <p className="text-lg text-neutral-300 max-w-sm">
              Real solutions. Real people. Real outcomes.
            </p>
          </div>
        </div>

        <div className="mb-16 md:mb-32">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-none tracking-tighter">
            WE'RE REVOLUTIONIZING
            <br />
            THE WAY GOOD WORK GETS
            <br />
            DONE.
          </h1>
          <p className="text-lg mt-8 sm:text-xl lg:text-2xl leading-snug tracking-tight text-neutral-300">
            You don’t need theoretical AI. You don’t need legacy apps disguised
            as AI.
            <br />
            <br /> You need "real" AI that works now—AI that delivers real value
            to your enterprise today, no matter where you are on your digital
            transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:mb-32">
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl lg:text-7xl font-black leading-none tracking-tighter">
              INTRODUCING
              <br />
              HERO
            </h2>
            <p className="text-xl font-semibold">
              Your Shortcut to Innovation Starts Here.
            </p>
            <p className="text-lg text-neutral-300 max-w-md">
              Hero is about more than cutting costs—it’s about unlocking
              potential. Boost productivity with a personalized, adaptive AI
              agent that learns and evolves with your team.
            </p>
            <p className="text-lg font-bold italic">
              This isn’t just a return on investment—it’s a return on
              innovation.
            </p>
            <button className="bg-white text-black font-bold py-3 px-6 rounded-md self-start hover:bg-neutral-200 transition-colors">
              Book an intro
            </button>
          </div>
          <div>
            <img
              src="/intro.jpg"
              alt="Hero Dashboard UI"
              className="rounded-xl shadow-2xl shadow-blue-500/10 w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-16 md:mt-32 text-left mb-16 md:mb-32">
          <div className="max-w-xl flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tighter">
              Supercharge your ERP and HCM with Agentic AI
            </h2>
            <p className="text-lg text-neutral-300">
              Transform how your team works with AI-powered automation, instant
              intelligence, and expert support.
            </p>
            <button className="bg-neutral-800 text-white font-semibold py-3 px-5 rounded-lg self-start flex items-center gap-2 hover:bg-neutral-700 transition-colors">
              More details
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-full aspect-square mb-6">
              <video
                src="https://a.storyblok.com/f/314917/x/168e5e4f12/ai_solutions-loop.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <h3 className="text-3xl font-bold tracking-tighter mb-4">
              ANSWERS
            </h3>
            <p className="text-lg text-neutral-300 max-w-sm">
              Agents that provide real-time, analyst-level insights across your
              critical business data without waiting for reports or manual
              analysis.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-full aspect-square mb-6">
              <video
                src="https://a.storyblok.com/f/314917/x/af2195bef1/x_as_a_service-loop.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <h3 className="text-3xl font-bold tracking-tighter mb-4">
              ACTIONS
            </h3>
            <p className="text-lg text-neutral-300 max-w-sm">
              Turnkey workflows, built by our Forward-Deployed engineers,
              automate repetitive tasks, improve accuracy, and accelerate
              decision-making across operations.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-full aspect-square mb-6">
              <video
                src="https://a.storyblok.com/f/314917/x/ab45a0caa2/professional_services-loop.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <h3 className="text-3xl font-bold tracking-tighter mb-4">
              EXPERTS
            </h3>
            <p className="text-lg text-neutral-300 max-w-sm">
              Don’t settle for just keeping the lights on. We ensure your data
              and applications are AI-ready, so you unlock maximum ROI from your
              Agents and existing systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
