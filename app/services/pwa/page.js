import React from 'react'
import ServiceSecond from '@/components/ServiceSecond'
import HeroBanner from '@/components/HeroBanner';
import HeroOverlaySection from '@/components/HeroOverlaySection'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image'

const CB = () => {
    const Services = [
        {
            icon: "/qas1.png",
            title: "Planning & Architecture",
            description:
                "Requirements analysis, architecture planning, and PWA feature specification.",
            bg: "bg-[#2C35A5]",
        },
        {
            icon: "/qas2.png",
            title: "Development & Integration",
            description:
                "Progressive enhancement, service worker implementation, and offline functionality.",
            bg: "bg-white",
        },
        {
            icon: "/qas3.png",
            title: "Testing & Deployment",
            description:
                "Cross-platform testing, performance optimization, and app store deployment.",
            bg: "bg-[#2C35A5]",
        },
    ];
    return (
        <main className="flex flex-col items-center w-full">

            <HeroBanner title='Progressive Web App Development' />
            <ServiceSecond services={Services}/>

            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            Transform Your Web App into a <br /> PWA
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Build fast, reliable, and engaging progressive web applications that work across all devices.
                        </p>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            View all services
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/pwa.png" alt="social-media" width={350} height={350} className="object-contain  " />
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/pwa1.png" alt="megaphone" width={350} height={350} className="object-contain rotate-y-180" />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            PWA Development Excellence
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Comprehensive PWA development solutions for modern businesses .
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>Offline Functionality</li>
                            <li>Push Notifications</li>
                            <li> Multi-Platform Integration</li>
                            <li>App-like Experience</li>

                        </ol>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            Learn more
                        </button>
                    </div>
                </div>
            </section >

            <HeroOverlaySection />
        </main >
    )
}

export default CB
