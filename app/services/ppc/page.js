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
            title: "Campaign Strategy",
            description:
                "In-depth market analysis, keyword research, and campaign planning to maximize ROI.",
            bg: "bg-[#2C35A5]",
        },
        {
            icon: "/qas2.png",
            title: "Ad Creation & Setup",
            description:
                "Creative ad copy writing, landing page optimization, and campaign structure setup.",
            bg: "bg-white",
        },
        {
            icon: "/qas3.png",
            title: "Optimization & Reporting",
            description:
                "Continuous performance monitoring, bid management, and detailed reporting.",
            bg: "bg-[#2C35A5]",
        },
    ];
    return (
        <main className="flex flex-col items-center w-full">
            <HeroBanner title='PPC Advertising Services' />
            <ServiceSecond services={Services} />

            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#282C4B] leading-snug">
                        Maximize Your Ad <br/>Performance
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        Drive targeted traffic and increase conversions with our professional PPC advertising services.
                        </p>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            View all services
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/ppc1.png" alt="social-media" width={350} height={350} className="object-contain  " />
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/ppc2.png" alt="megaphone" width={350} height={350} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                        PPC Management <br/>Excellence
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        Comprehensive PPC advertising solutions for your business.
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>Google Ads Management</li>
                            <li>Social Media Advertising</li>
                            <li>Display Network Campaigns</li>
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
