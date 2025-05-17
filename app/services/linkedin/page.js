import React from 'react'
import HeroBanner from '@/components/HeroBanner';
import ServiceGrid from '@/components/ServiceGrid';
import HeroOverlaySection from '@/components/HeroOverlaySection'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image'
const features = [

    {
        icon: "/lh.png",
        title: "Content Strategy",
        description:
            "Engaging content creation and posting schedule to maximize visibility and engagement.",
        bg: "bg-white",
        textColor: "text-gray-800",
    },
    {
        icon: "/lh1.png",
        title: "Network Growth",
        description:
            "Strategic connection building and engagement tactics to expand professional network.",
        bg: "bg-[#2C35A5]",
        textColor: "text-white",
    },
    {
        icon: "/lh2.png",
        title: "Analytics & Reporting",
        description:
            "Comprehensive tracking and analysis of social media metrics to optimize performance and ROI.",
        bg: "bg-white",
        textColor: "text-gray-800",
    },
    {
        icon: "/lh3.png",
        title: "Lead Generation",
        description:
            "Targeted outreach and relationship building to generate quality business leads.",
        bg: "bg-[#2C35A5]",
        textColor: "text-white",
    },
    {
        icon: "/lh4.png",
        title: "Analytics & Reporting",
        description:
            "Regular performance tracking and detailed reports on engagement metrics and growth.",
        bg: "bg-white",
        textColor: "text-gray-800",
    },
    {
        icon: "/lh5.png",
        title: "Brand Building",
        description:
            "Consistent personal and company branding to establish thought leadership.",
        bg: "bg-[#2C35A5]",
        textColor: "text-white",
    },
];

const CB = () => {
    return (
        <main className="flex flex-col items-center w-full">
           <HeroBanner title='Linkedin Handling'/>
            <h2 className="text-4xl md:text-4xl font-bold mb-4 mt-10 ">LinkedIn Account Management Services</h2>

            <ServiceGrid features={features} />
            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="flex justify-center">
                        <Image src="/lf.png" alt="social-media" width={400} height={400} className="object-contain  " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            LinkedIn Account Management <br /> Excellence
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Transform your LinkedIn presence with our professional management services. We help businesses and professionals maximize their LinkedIn potential through strategic content, network growth, and lead generation.
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>Professional Profile Optimization</li>
                            <li>Content Strategy & Creation</li>
                            <li>Network Growth Management</li>
                        </ol>
                    </div>

                </div>


            </section >

            <HeroOverlaySection />
        </main >
    )
}
export default CB
