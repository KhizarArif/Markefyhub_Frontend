import React from 'react'
import HeroBanner from '@/components/HeroBanner';
import ServiceGrid from '@/components/ServiceGrid';
import HeroOverlaySection from '@/components/HeroOverlaySection'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image'
const features = [
            {
                icon: "/fe.png",
                title: "Responsive Design",
                description:
                    "Building fluid layouts that adapt seamlessly to all devices and screen sizes for optimal user experience.",
                bg: "bg-white",
                textColor: "text-gray-800",
            },
            {
                icon: "/fe1.png",
                title: "Modern Frameworks",
                description:
                    "Expertise in React, Vue, and Angular for building dynamic and interactive web applications.",
                bg: "bg-[#2C35A5]",
                textColor: "text-white",
            },
            {
                icon: "/fe2.png",
                title: "Performance Optimization",
                description:
                    "Implementing best practices for fast loading times, smooth animations, and efficient resource management.",
                bg: "bg-white",
                textColor: "text-gray-800",
            },
            {
                icon: "/fe3.png",
                title: "UI/UX Integration",
                description:
                    "Translating design mockups into pixel-perfect, interactive interfaces with attention to detail.",
                bg: "bg-[#2C35A5]",
                textColor: "text-white",
            },
            {
                icon: "/fe4.png",
                title: "State Management",
                description:
                    "Efficient data flow and state handling using Redux, Vuex, or other state management solutions.",
                bg: "bg-white",
                textColor: "text-gray-800",
            },
            {
                icon: "/fe5.png",
                title: "API Integration",
                description:
                    "Seamless integration with backend services and third-party APIs for dynamic data handling.",
                bg: "bg-[#2C35A5]",
                textColor: "text-white",
            },
        ];

const CB = () => {
    return (
        <main className="flex flex-col items-center w-full">
           <HeroBanner title='Frontend Development'/>
            <ServiceGrid features={features} />

            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/fe6.png" alt="megaphone" width={400} height={400} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            Professional Frontend <br /> Development Services

                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            We create exceptional user interfaces and interactive web experiences using cutting-edge frontend technologies. Our solutions focus on performance, accessibility, and modern design principles.
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>Modern JavaScript & TypeScript Development</li>
                            <li>Component-Based Architecture</li>
                            <li>Cross-Browser Compatibility</li>
                        </ol>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            learn more
                        </button>
                    </div>
                </div>
            </section >

            <HeroOverlaySection />
        </main >
    )
}
export default CB
