
//     const features = [
//         {
//             icon: "/fe.png",
//             title: "Responsive Design",
//             description:
//                 "Building fluid layouts that adapt seamlessly to all devices and screen sizes for optimal user experience.",
//             bg: "bg-white",
//             textColor: "text-gray-800",
//         },
//         {
//             icon: "/fe1.png",
//             title: "Modern Frameworks",
//             description:
//                 "Expertise in React, Vue, and Angular for building dynamic and interactive web applications.",
//             bg: "bg-[#2C35A5]",
//             textColor: "text-white",
//         },
//         {
//             icon: "/fe2.png",
//             title: "Performance Optimization",
//             description:
//                 "Implementing best practices for fast loading times, smooth animations, and efficient resource management.",
//             bg: "bg-white",
//             textColor: "text-gray-800",
//         },
//         {
//             icon: "/fe3.png",
//             title: "UI/UX Integration",
//             description:
//                 "Translating design mockups into pixel-perfect, interactive interfaces with attention to detail.",
//             bg: "bg-[#2C35A5]",
//             textColor: "text-white",
//         },
//         {
//             icon: "/fe4.png",
//             title: "State Management",
//             description:
//                 "Efficient data flow and state handling using Redux, Vuex, or other state management solutions.",
//             bg: "bg-white",
//             textColor: "text-gray-800",
//         },
//         {
//             icon: "/fe5.png",
//             title: "API Integration",
//             description:
//                 "Seamless integration with backend services and third-party APIs for dynamic data handling.",
//             bg: "bg-[#2C35A5]",
//             textColor: "text-white",
//         },
//     ];

import React from "react";

const ServiceGrid = ({ features = [] }) => {
    return (
        <section className="w-full bg-white py-16 px-4 ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-xl h-[45vh] shadow-md ${item.bg} transition duration-300`}
                    >
                        <div className="w-30 h-30 mb-4">
                            <img
                                src={item.icon}
                                alt={item.title}
                                className={`w-full h-full object-contain ${
                                    item.bg === "bg-[#2C35A5]" ? "invert brightness-0" : ""
                                }`}
                            />
                        </div>
                        <h3 className={`text-xl font-bold mt-10 mb-2 ${item.textColor}`}>
                            {item.title}
                        </h3>
                        <p className={`text-md text-[#6E6A74] leading-relaxed ${item.textColor}`}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceGrid;
