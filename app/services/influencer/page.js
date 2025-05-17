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
            title: "Strategy & Research",
            description:
                "Developing comprehensive influencer marketing strategies aligned with your brand goals.",
            bg: "bg-[#2C35A5]",
        },
        {
            icon: "/qas2.png",
            title: "Influencer Selection",
            description:
                "Identifying and vetting relevant influencers based on audience demographics and engagement rates.",
            bg: "bg-white",
        },
        {
            icon: "/qas3.png",
            title: "Campaign Management",
            description:
                "Campaign execution, performance tracking, and ROI measurement across platforms.",
            bg: "bg-[#2C35A5]",
        },
    ];
    return (
        <main className="flex flex-col items-center w-full">
            <HeroBanner title='Influencer Marketing Services' />
            <ServiceSecond services={Services} />

            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#282C4B] leading-snug">
                            Amplify Your Brand with <br /> Influencers
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Connect with your target audience through authentic influencer partnerships and strategic campaigns.
                        </p>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            View all services
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/i1.png" alt="social-media" width={400} height={400} className="object-contain  " />
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/i2.png" alt="megaphone" width={400} height={400} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            Influencer Marketing <br />Excellence
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Comprehensive influencer marketing solutions for your brand.
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>Influencer Discovery & Vetting</li>
                            <li>Campaign Strategy Development</li>
                            <li>Content Collaboration</li>
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
