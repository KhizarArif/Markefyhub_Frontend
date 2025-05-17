import React from "react";

const HeroBanner = ({ title }) => {
    return (
        <section className="relative w-full h-[60vh] flex items-center justify-center text-white text-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/service1.png')" }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#2C35A5] opacity-90"></div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl px-4 w-full">
                <h2 className="text-4xl md:text-4xl font-bold mb-4">{title}</h2>
                <p className="text-lg md:text-xl mb-8 leading-relaxed">
                    Stand Out In This Saturated Digital Landscape With A Custom Fit Website
                </p>

                <div className="flex flex-col justify-center items-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-full bg-white sm:w-[400px] px-6 py-4 text-black rounded-md focus:outline-none"
                    />
                    <button className="bg-white text-[#2C35A5] font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-[#2C35A5] hover:text-white">
                        Get My Free Proposal
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
