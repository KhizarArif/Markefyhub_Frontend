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
            title: "Content Strategy",
            description:
                "Comprehensive channel analysis, content planning, and target audience research to maximize engagement and reach.",
            bg: "bg-[#2C35A5]",
        },
        {
            icon: "/qas2.png",
            title: "Production & Optimization",
            description:
                "Professional video production, SEO optimization, and thumbnail creation to enhance visibility and click-through rates.",
            bg: "bg-white",
        },
        {
            icon: "/qas3.png",
            title: "Growth & Monetization",
            description:
                "Channel monetization strategies, community engagement, and analytics-driven growth tactics for sustainable success.",
            bg: "bg-[#2C35A5]",
        },
    ];
    return (
        <main className="flex flex-col items-center w-full">
         <HeroBanner title='YouTube Channel Management'/>
            <ServiceSecond services={Services}/>

            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                        Grow Your YouTube <br/>Presence
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        Transform your YouTube channel with our professional management services. Let's create engaging content that grows your audience and drives results.
                        </p>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            View all services
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/yt.png" alt="social-media" width={350} height={350} className="object-contain  " />
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/yt1.png" alt="megaphone" width={400} height={400} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                        YouTube Management <br/>Excellence
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        Comprehensive YouTube channel management services for creators and businesses.
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>Content Strategy & Planning</li>
                            <li>Video SEO Optimization</li>
                            <li>Community Management</li>
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
