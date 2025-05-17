import React from 'react'
import HeroBanner from '@/components/HeroBanner';
import ServiceSecond from '@/components/ServiceSecond'
import HeroOverlaySection from '@/components/HeroOverlaySection'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image'

const CB = () => {
    const Services = [
        {
            icon: "/qas1.png",
            title: "Discovery & Planning",
            description:
                "Comprehensive analysis of requirements, user research, and creating detailed technical specifications.",
            bg: "bg-[#2C35A5]",
        },
        {
            icon: "/qas2.png",
            title: "Design & Development",
            description:
                "UI/UX design, native/cross-platform development, and integration of essential features.",
            bg: "bg-white",
        },
        {
            icon: "/qas3.png",
            title: "Testing & Launch",
            description:
                "Thorough testing across devices, app store optimization, and deployment to app stores.",
            bg: "bg-[#2C35A5]",
        },
    ];
    return (
        <main className="flex flex-col items-center w-full">
            <HeroBanner title='Mobile App Development'/>
            <ServiceSecond services={Services}/>

            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                        Transform Your Mobile Vision Into <br/> Reality
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        Build powerful, user-friendly mobile applications that deliver exceptional experiences across all platforms.
                        </p>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            View all services
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/pwa1.png" alt="social-media" width={350} height={350} className="object-contain  " />
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/app2.png" alt="megaphone" width={400} height={400} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                        Mobile Development Excellence
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        Comprehensive mobile app development services for iOS and Android platforms.
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                        <li>Native iOS Development</li>
                            <li>Native Android Development</li>
                            <li>Cross-Platform Solutions</li>
                            <li>UI/UX Design</li>
                            <li>App Store Optimization</li>
                            <li>Maintenance & Support</li>
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
