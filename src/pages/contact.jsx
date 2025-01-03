import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="h-full px-10 pt-20 md:pt-32 lg:pt-40 lg:flex lg:items-center lg:justify-center">
      <div className="flex flex-col items-center">
        <h1
          data-aos="fade-right"
          className="text-[28px] font-semibold mb-5 lg:text-[42px]"
        >
          Contact <span className="text-[#5067FF]">Me</span>
        </h1>
        <p
          data-aos="fade-right"
          className="text-[16px] text-center mb-8 lg:text-[20px]"
        >
          Feel free to reach out via the form below
        </p>
        <form
          data-aos="fade-up"
          className="w-full max-w-lg bg-[#0B131D] p-8 rounded-lg shadow-md border border-[#5067FF]"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 rounded-lg bg-[#222831] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#5067FF]"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 rounded-lg bg-[#222831] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#5067FF]"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 rounded-lg bg-[#222831] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#5067FF]"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#5067FF] text-white font-semibold hover:bg-[#2f4bff] focus:outline-none focus:ring-2 focus:ring-[#5067FF]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
