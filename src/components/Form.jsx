import React from "react";

function Form() {
  return (
    <div className="bg-white text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        {/* Left Side: Content */}
        <div className="flex flex-col justify-center p-10 md:p-20 bg-[#a67fae]">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6 text-zinc-900">
            Let's build the future of your back office.
          </h2>
          <p className="text-xl text-zinc-700">
            Request a demo and we'll show you how Dayos can transform your
            enterprise.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="bg-blue-300 p-10 md:p-20 flex items-center">
          <form className="w-full max-w-md mx-auto">
            <div className="mb-8">
              <label
                htmlFor="name"
                className="block text-black font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-transparent border-b-2 border-neutral-700 focus:border-blue-500 outline-none pb-2 text-white"
                required
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="email"
                className="block text-black font-semibold mb-2"
              >
                Work Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-transparent border-b-2 border-neutral-700 focus:border-blue-500 outline-none pb-2 text-white"
                required
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="company"
                className="block text-black font-semibold mb-2"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full bg-transparent border-b-2 border-neutral-700 focus:border-blue-500 outline-none pb-2 text-white"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-black font-semibold mb-2"
              >
                How can we help?
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full bg-transparent border-b-2 border-neutral-700 focus:border-blue-500 outline-none pb-2 text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-bold py-4 px-8 rounded-full text-lg hover:bg-neutral-200 transition-all duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
