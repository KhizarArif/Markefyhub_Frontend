import React from "react";

const services = [
  {
    icon: "/sevice1.png",
    title: "Custom Web Development",
    description:
      "Tailored web solutions built with cutting-edge technologies to meet your specific business needs.",
  },
  {
    icon: "/sevice2.png",
    title: "WordPress Development",
    description:
      "Custom WordPress websites with powerful CMS features and responsive designs.",
  },
  {
    icon: "/sevice3.png",
    title: "E-commerce Solutions",
    description:
      "Scalable online stores with secure payment gateways and inventory management systems.",
  },
  {
    icon: "/sevice1.png",
    title: "Web Hosting Services",
    description:
      "Reliable hosting solutions with 99.9% uptime guarantee and expert technical support.",
  },
  {
    icon: "/sevice2.png",
    title: "Website Maintenance",
    description:
      "Regular updates, security patches, and performance optimization for your website.",
  },
  {
    icon: "/sevice2.png",
    title: "API Integration",
    description:
      "Seamless integration of third-party APIs and custom functionality development.",
  },
];

const ServiceGridSection = () => {
  return (
    <section className="bg-[#2C35A5] py-20 px-4 text-white w-full mt-3 mb-3">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          We make sure that your every <br className="hidden md:block" />
          trip is comfortable
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white text-[#2C35A5] p-6 rounded-xl flex items-start gap-4"
          >
            <div className="bg-[#2C35A5] p-3 rounded-full">
              <img src={item.icon} alt={item.title} className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceGridSection;
