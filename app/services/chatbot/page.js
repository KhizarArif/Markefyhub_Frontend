import React from 'react'
import ServiceSecond from '@/components/ServiceSecond'
import HeroBanner from '@/components/HeroBanner';
import HeroOverlaySection from '@/components/HeroOverlaySection'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image'

const CB = () => {
    const Services = [
        {
            icon: "/qas1.png",
            title: "Planning & Design",
            description:
                "Analyzing requirements, designing conversation flows, and defining bot personality.",
            bg: "bg-[#2C35A5]",
        },
        {
            icon: "/qas2.png",
            title: "Development & Integration",
            description:
                "Building AI-powered chatbot, NLP integration, and backend system connection.",
            bg: "bg-white",
        },
        {
            icon: "/qas3.png",
            title: "Testing & Deployment",
            description:
                "Comprehensive testing, deployment, and continuous improvement monitoring.",
            bg: "bg-[#2C35A5]",
        },
    ];
    return (
        <main className="flex flex-col items-center w-full">
           <HeroBanner title='Chatbot Development'/>
            <ServiceSecond services={Services} />

            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#282C4B] leading-snug">
                        Transform Customer Experience <br/> with AI
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        Build intelligent chatbots that enhance customer service and streamline operations.
                        </p>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            View all services
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/cb.png" alt="social-media" width={350} height={350} className="object-contain rotate-y-180 " />
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/cb1.png" alt="megaphone" width={350} height={350} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                        Chatbot Development Excellence
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        Comprehensive chatbot solutions for modern businesses.
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>AI-Powered Conversations</li>
                            <li> Natural Language Processing</li>
                            <li> Multi-Platform Integration</li>
                            <li>Analytics & Reporting</li>

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
