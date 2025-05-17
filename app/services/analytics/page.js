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
            title: "Data Collection & Setup",
            description:
                "Implementation of tracking tools, data collection setup, and KPI definition.",
            bg: "bg-[#2C35A5]",
        },
        {
            icon: "/qas2.png",
            title: "Analysis & Insights",
            description:
                "In-depth data analysis, pattern identification, and actionable insights generation.",
            bg: "bg-white",
        },
        {
            icon: "/qas3.png",
            title: "Reporting & Optimization",
            description:
                "Custom report creation, performance monitoring, and optimization recommendations.",
            bg: "bg-[#2C35A5]",
        },
    ];
    return (
        <main className="flex flex-col items-center w-full">
            <HeroBanner title='Analytics & Reporting Services'/>
            <ServiceSecond services={Services} />
            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#282C4B] leading-snug">
                        Transform Data into <br/>Decisions
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        Leverage advanced analytics and reporting to drive informed business decisions and improve ROI.
                        </p>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            View all services
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/ars1.png" alt="social-media" width={350} height={350} className="object-contain  " />
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/ars2.png" alt="megaphone" width={450} height={450} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            Analytics Excellence
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        Comprehensive analytics and reporting solutions for data-driven success
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>Custom Dashboard Creation</li>
                            <li>Multi-Channel Analytics</li>
                            <li>Conversion Tracking</li>
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
