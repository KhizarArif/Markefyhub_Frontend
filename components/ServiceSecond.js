import React from "react";

const ServiceSecond = ({ services }) => {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto space-y-8">
                {services.map((item, index) => {
                    const isWhiteBg = item.bg === "bg-white";

                    return (
                        <div
                            key={index}
                            className={`flex items-start gap-6 p-6 rounded-xl shadow-md ${item.bg}`}
                        >
                            <div
                                className={`w-16 h-16 flex items-center justify-center rounded-full shadow 
                                    ${isWhiteBg ? "bg-[#2C35A5]" : "bg-white border-2 border-[#2C35A5]"}`}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>

                            <div className="space-y-2 max-w-2xl">
                                <h3
                                    className={`text-xl font-bold ${isWhiteBg ? "text-[#2C35A5]" : "text-white"}`}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className={`text-[16px] leading-relaxed ${isWhiteBg ? "text-gray-700" : "text-white"}`}
                                >
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ServiceSecond;
