import React from 'react'
import HeroBanner from '@/components/HeroBanner';
import ServiceGrid from '@/components/ServiceGrid';
import HeroOverlaySection from '@/components/HeroOverlaySection'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image'
const features = [

    {
        icon: "/em.png",
        title: "Campaign Strategy",
        description:
            "Strategic email campaign planning and audience segmentation for targeted messaging.",
        bg: "bg-white",
        textColor: "text-gray-800",
    },
    {
        icon: "/em1.png",
        title: "Email Design",
        description:
            "Responsive email template design and content creation optimized for all devices.",
        bg: "bg-[#2C35A5]",
        textColor: "text-white",
    },
    {
        icon: "/em2.png",
        title: "List Management",
        description:
            "Subscriber list maintenance, segmentation, and growth strategies.",
        bg: "bg-white",
        textColor: "text-gray-800",
    },
    {
        icon: "/em3.png",
        title: "Automation Setup",
        description:
            "Automated email workflows and drip campaigns for nurturing leads.",
        bg: "bg-[#2C35A5]",
        textColor: "text-white",
    },
    {
        icon: "/em4.png",
        title: "Performance Analytics",
        description:
            "Detailed tracking of open rates, click-through rates, and campaign ROI.",
        bg: "bg-white",
        textColor: "text-gray-800",
    },
    {
        icon: "/em5.png",
        title: "A/B Testing",
        description:
            "Split testing of subject lines, content, and designs for optimal performance.",
        bg: "bg-[#2C35A5]",
        textColor: "text-white",
    },
];

const CB = () => {
    return (
        <main className="flex flex-col items-center w-full">
            <HeroBanner title='Email Marketing'/>
            <h2 className="text-4xl md:text-4xl font-bold mb-4 mt-10 ">Email Marketing Services</h2>

            <ServiceGrid features={features} />
            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="flex justify-center">
                        <Image src="/ef.png" alt="social-media" width={400} height={400} className="object-contain  " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            Email Marketing <br /> Excellence
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Drive engagement and conversions with our comprehensive email marketing services. We create targeted campaigns that deliver measurable results through strategic planning and data-driven optimization.
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>Strategic Campaign Planning</li>
                            <li>Email Automation & Workflows</li>
                            <li>List Segmentation & Management</li>
                        </ol>
                    </div>

                </div>


            </section >

            <HeroOverlaySection />
        </main >
    )
}
export default CB
