import React from "react";

const HeroOverlaySection = ({
  backgroundImage = "/home9.png",
  heading = "Innovative Digital Solutions for Modern Businesses",
  paragraph = "Are you an influencer ready to launch your own merch? Partner with Symbol Me and start turning your audience into a thriving brand!",
  buttonText = "Send Proposal now",
  onClick,
}) => {
  return (
    <section
      className="w-full py-20 bg-cover bg-center text-white relative mt-3 mb-3"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2C35A5]/80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 leading-snug">
          {heading.split(" ").slice(0, -2).join(" ")} <br className="hidden md:block" />
          {heading.split(" ").slice(-2).join(" ")}
        </h2>

        <p className="text-lg md:text-xl text-white mb-6">
          {paragraph}
        </p>

        <button
          onClick={onClick}
          className="bg-white text-black hover:bg-[#2C35A5] hover:text-white font-semibold px-6 py-4 rounded-md shadow-md hover:shadow-lg transition"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default HeroOverlaySection;
