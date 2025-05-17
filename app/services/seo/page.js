import React from 'react'
import HeroBanner from '@/components/HeroBanner';
import ServiceGrid from '@/components/ServiceGrid';
import HeroOverlaySection from '@/components/HeroOverlaySection'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image'
const features = [
            {
                icon: "/seo.png",
                title: "Keyword Research & Analysis",
                description:
                    "In-depth keyword research and competition analysis to target the most valuable search terms for your business.",
                bg: "bg-white",
                textColor: "text-gray-800",
            },
            {
                icon: "/seo1.png",
                title: "On-Page SEO Optimization",
                description:
                    "Complete optimization of meta tags, content structure, and technical elements for better search rankings.",
                bg: "bg-[#2C35A5]",
                textColor: "text-white",
            },
            {
                icon: "/seo2.png",
                title: "Content Strategy",
                description:
                    "Strategic content planning and creation to attract organic traffic and engage your target audience.",
                bg: "bg-white",
                textColor: "text-gray-800",
            },
            {
                icon: "/seo3.png",
                title: "Technical SEO",
                description:
                    "Comprehensive technical optimization to improve site speed, mobile responsiveness, and crawlability.",
                bg: "bg-[#2C35A5]",
                textColor: "text-white",
            },
            {
                icon: "/seo4.png",
                title: "Link Building",
                description:
                    "Strategic backlink acquisition from authoritative sources to boost your domain authority and rankings.",
                bg: "bg-white",
                textColor: "text-gray-800",
            },
            {
                icon: "/seo5.png",
                title: "Analytics & Reporting",
                description:
                    "Detailed performance tracking and monthly reports to measure SEO success and ROI.",
                bg: "bg-[#2C35A5]",
                textColor: "text-white",
            },
        ];

const CB = () => {
    return (
        <main className="flex flex-col items-center w-full">
            <HeroBanner title="Seo Services"/>

            <ServiceGrid features={features} />
            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/ani-seo.png" alt="megaphone" width={400} height={400} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                        Strategic SEO Services <br/> for Your Business
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        We deliver comprehensive SEO solutions to improve your online visibility and drive organic growth through data-driven strategies and proven optimization techniques.
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>Affordable</li>
                            <li>Punctual</li>
                            <li>Professional</li>
                        </ol>
                    </div>
                </div>
            </section >

            <HeroOverlaySection />
        </main >
    )
}
export default CB
