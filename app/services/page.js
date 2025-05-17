"use client"
import { React, useState } from 'react'
import Image from 'next/image'
import Feedback from '@/components/Feedback';
import '@fortawesome/fontawesome-free/css/all.min.css';
const services = [
    {
        title: "Expert Development",
        description:
            "Our experienced team delivers cutting-edge web solutions using the latest technologies and best practices for optimal performance.",
        bg: "bg-[#2C35A5]",
        icon: "/sevice1.png",
    },
    {
        title: "Results-Driven Marketing",
        description:
            "Strategic digital marketing solutions that drive real business growth through SEO, PPC, and social media optimization.",
        bg: "bg-white",
        icon: "/sevice2.png",
    },
    {
        title: "24/7 Technical Support",
        description:
            "Round-the-clock support and maintenance ensure your digital platforms remain secure, updated, and performing optimally.",
        bg: "bg-[#2C35A5]",
        icon: "/sevice3.png",
    },
];

const Services = () => {
    const [activeFAQ, setActiveFAQ] = useState(null);
    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };
    return (
        <main className="flex flex-col items-center w-full">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center max-w-7xl w-full px-4 py-16 mx-auto gap-10">
                <div className="flex-1 space-y-6 max-w-[450px]">
                    <h1 className="text-4xl min-w-[100%] font-bold leading-tight text-[#282C4B]">
                        Transform Your Business <br/> Through Digital Innovation
                    </h1>
                    <p className="text-[#6E6A74] leading-relaxed text-xl">
                        We are the top digital marketing agency for branding corp. We offer a full range of services to help clients improve their search engine rankings and drive more traffic to their websites.
                    </p>
                    <div className="flex flex-col gap-4 mt-4">
                        <button className="bg-[#2C35A5] w-[42%] text-white px-6 py-3 rounded-md h-[4rem]">
                            Our services
                        </button>
                    </div>
                </div>

                <div className="ml-[20%] flex justify-center">
                    <Image src="/sf.png" alt="social-media" width={500} height={400} className="object-contain" />
                </div>
            </section>

            {/* Logos Section */}
            <section className="w-full flex flex-wrap justify-center items-center gap-10 py-10 px-4 bg-[#EBF1F9]">
                {['/main1.png', '/main2.png', '/main3.png', '/main4.png', '/main1.png', '/main2.png', '/main3.png'].map((logo, index) => (
                    <div key={index} className="w-30 h-20 relative">
                        <Image src={logo} alt={`logo-${index}`} width={400} height={300} objectFit="contain" />
                    </div>
                ))}
            </section>

            <section className="w-full bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto space-y-8">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-start gap-6 p-6 rounded-xl shadow-md ${item.bg}`}
                        >
                            <div
                                className={`w-16 h-16 flex items-center justify-center rounded-full ${item.bg === "bg-white" ? "bg-[#2C35A5]" : "bg-white"
                                    } shadow`}
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={28}
                                    height={28}
                                    className="object-contain"
                                />
                            </div>

                            {/* Text */}
                            <div className="space-y-2 max-w-2xl">
                                <h3
                                    className={`text-xl font-bold ${item.bg === "bg-white" ? "text-[#2C35A5]" : "text-white"
                                        }`}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className={`text-[16px] leading-relaxed ${item.bg === "bg-white" ? "text-gray-700" : "text-white"
                                        }`}
                                >
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works Section */}
            <section className="w-full py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#282C4B] mb-12">How It Works</h2>
                    <div className="flex flex-col md:flex-row gap-12">

                        {/* Left Section: Steps */}
                        <div className="flex flex-col gap-12 w-full md:w-3/5">

                            {/* Step 01 */}
                            <div className="flex items-start gap-6">
                                <span className="text-8xl font-bold text-[#2C35A5] mt-4">01</span>
                                <div className="bg-white p-6 rounded-xl shadow-md w-full h-[20vh]">
                                    <div className="flex gap-7">
                                        <Image src="/sevice4.png" alt="icon-1" width={30} height={30} />
                                        <h3 className="text-xl font-semibold text-[#2C35A5] mt-4">Requirements Analysis</h3>
                                    </div>
                                    <p className="text-gray-600 mt-2 text-[16px] leading-relaxed">
                                        We gather your content management needs and analyze requirements for your custom CMS solution.
                                    </p>
                                </div>
                            </div>

                            {/* Step 02 */}
                            <div className="flex items-start gap-6 flex-row-reverse">
                                <span className="text-8xl font-semibold text-[#2C35A5] mt-4">02</span>
                                <div className="bg-[#2C35A5] p-6 rounded-xl shadow-md w-full h-[20vh] text-white">
                                    <div className="flex gap-7">
                                        <Image src="/sevice5.png" alt="icon-2" width={30} height={30} />
                                        <h3 className="text-xl font-semibold mt-4">CMS Architecture Design</h3>
                                    </div>
                                    <p className="mt-2 text-[16px] leading-relaxed">
                                        Our experts design a scalable CMS architecture tailored to your content workflow and business needs.
                                    </p>
                                </div>
                            </div>

                            {/* Step 03 */}
                            <div className="flex items-start gap-6">
                                <span className="text-8xl font-bold text-[#2C35A5] mt-4">03</span>
                                <div className="bg-white p-6 rounded-xl shadow-md w-full h-[20vh]">
                                    <div className="flex gap-7">
                                        <Image src="/sevice4.png" alt="icon-3" width={30} height={30} />
                                        <h3 className="text-xl font-semibold text-[#2C35A5] mt-4">Development & Launch</h3>
                                    </div>
                                    <p className="text-gray-600 mt-2 text-[16px] leading-relaxed">
                                        We develop and deploy your custom CMS with comprehensive training and ongoing support.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Illustration */}
                        <div className="w-full md:w-2/5 flex justify-center items-center ">
                            <Image src="/sevice6.png" alt="How It Works Illustration" width={450} height={600} className="object-contain" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="w-full py-18 bg-[#FAFAFA]">
                <div className="max-w-7xl w-full mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-10">
                        <div className="max-w-4xl w-full px-4 md:px-0">
                            <h2 className="text-3xl font-bold text-[#282C4B] leading-snug text-left">
                                Our Expert Services <br />
                                That Grow Traffic & Increase <br />
                                Revenue
                            </h2>
                        </div>


                        <div className='flex flex-col gap-3'>
                            <div className="max-w-4xl w-full px-4 md:px-0">
                                <p className="text-[#6E6A74] text-xl text-left mt-4 leading-relaxed">
                                    We are the top digital marketing agency for branding corp. We offer a full range of services to help clients improve their search engine rankings and drive more traffic to their websites.
                                </p>
                            </div>


                            <div className="flex justify-center gap-4 mt-6">
                                <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-[#2C35A5]">
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <button className="w-10 h-10 rounded-full bg-[#2C35A5] text-white flex items-center justify-center">
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: '/home3.png', title: 'Content Strategy' },
                            { icon: '/home4.png', title: 'App Development' },
                            { icon: '/home5.png', title: 'Web Development' }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-white rounded-xl h-[120%] shadow-md p-8 flex flex-col items-center text-center">
                                <Image src={service.icon} alt={service.title} width={80} height={150} className="object-contain" />
                                <h3 className="text-xl font-semibold mt-8">{service.title}</h3>
                                <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                                    We are the top digital marketing agency for branding corp.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section
                className="w-full py-20 bg-cover bg-center text-white relative mt-3"
                style={{ backgroundImage: "url('/home9.png')" }}
            >
                <div className="absolute inset-0 bg-[#2C35A5]/80"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-10">Showcase some impressive numbers.</h2>
                    <div className="flex flex-wrap justify-center gap-16">
                        <div>
                            <p className="text-5xl font-bold">860+</p>
                            <p className="text-xl">Projects</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">55+</p>
                            <p className="text-xl">Clients</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">10+</p>
                            <p className="text-xl">Awards</p>
                        </div>
                    </div>
                </div>
            </section>
                    <Feedback/>

        </main>
    )
}

export default Services
