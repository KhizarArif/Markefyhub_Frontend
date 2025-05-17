import React from 'react'
import HeroBanner from '@/components/HeroBanner';
import ServiceGrid from '@/components/ServiceGrid';
import HeroOverlaySection from '@/components/HeroOverlaySection'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image'
const features = [
    {
        icon: "/seo.png",
        title: "Content Strategy & Creation",
        description:
            "Creating engaging content tailored to each platform to maximize reach and engagement with your target audience.",
        bg: "bg-white",
        textColor: "text-gray-800",
    },
    {
        icon: "/seo1.png",
        title: "Community Management",
        description:
            "Active engagement with followers, responding to comments, and building meaningful relationships with your audience.",
        bg: "bg-[#2C35A5]",
        textColor: "text-white",
    },
    {
        icon: "/seo2.png",
        title: "Paid Social Advertising",
        description:
            "Strategic paid campaigns across platforms to increase reach, drive traffic, and generate qualified leads.",
        bg: "bg-white",
        textColor: "text-gray-800",
    },
    {
        icon: "/seo3.png",
        title: "Analytics & Reporting",
        description:
            "Comprehensive tracking and analysis of social media metrics to optimize performance and ROI.",
        bg: "bg-[#2C35A5]",
        textColor: "text-white",
    },
    {
        icon: "/seo4.png",
        title: "Social Media Strategy",
        description:
            "Custom strategy development aligned with your business goals and target audience preferences.",
        bg: "bg-white",
        textColor: "text-gray-800",
    },
    {
        icon: "/seo5.png",
        title: "Brand Monitoring",
        description:
            "Continuous monitoring of brand mentions and sentiment across social platforms to maintain reputation.",
        bg: "bg-[#2C35A5]",
        textColor: "text-white",
    },
];

const CB = () => {
    return (
        <main className="flex flex-col items-center w-full">
            <HeroBanner title='Social Media Management'/>
            <h2 className="text-4xl md:text-4xl font-bold mb-4 mt-10 ">Features Of Our Social Media Services </h2>

            <ServiceGrid features={features} />


            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="flex justify-center">
                        <Image src="/smm.png" alt="social-media" width={350} height={350} className="object-contain  " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            Strategic Social Media <br /> Management Services
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Build Powerful Brand Presence on Social Media Platforms
                        </p>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Social media reaches over 4.9 billion users globally, making it essential for modern business growth. Our expert team manages presence across Facebook, Instagram, LinkedIn, and Twitter to maximize your brand impact.
                            According to latest research, 78% of consumers make purchasing decisions influenced by social media. Our strategic approach helps you engage target audiences and drive meaningful conversions through social channels.
                            Let our experienced social media managers create engaging content and campaigns that resonate with your audience. From content creation to performance analytics, we deliver comprehensive social media solutions.
                        </p>
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                        Effective Social Media <br/> Management Solutions
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        We help businesses build strong social media presence through strategic content creation, community engagement, and data-driven campaign management across all major platforms.
                        </p>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            Learn more
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/smm1.png" alt="megaphone" width={400} height={400} className="object-contain " />
                    </div>
                </div>
            </section >

            <HeroOverlaySection />
        </main >
    )
}
export default CB
