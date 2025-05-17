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
            title: "Strategy Development",
            description:
                "Comprehensive content strategy planning, audience research, and topic ideation.",
            bg: "bg-[#2C35A5]",
        },
        {
            icon: "/qas2.png",
            title: "Content Creation",
            description:
                "Professional content creation across various formats including blogs, articles, and social media.",
            bg: "bg-white",
        },
        {
            icon: "/qas3.png",
            title: "Distribution & Analysis",
            description:
                "Strategic content distribution, performance tracking, and optimization based on analytics.",
            bg: "bg-[#2C35A5]",
        },
    ];
    return (
        <main className="flex flex-col items-center w-full">
            <HeroBanner title='Content Marketing Services' />
            <ServiceSecond services={Services} />

            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#282C4B] leading-snug">
                        Transform Your Content <br/>Strategy
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        Drive engagement and conversions with our professional content marketing services. Let's create compelling content that resonates with your audience.
                        </p>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            View all services
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/c1.png" alt="social-media" width={400} height={400} className="object-contain  " />
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/c2.png" alt="megaphone" width={400} height={400} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                        Content Marketing <br/>Excellence
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        Comprehensive content marketing solutions for your business
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>Strategic Content Planning</li>
                            <li>SEO-Optimized Writing</li>
                            <li>Multi-Channel Distribution</li>
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
