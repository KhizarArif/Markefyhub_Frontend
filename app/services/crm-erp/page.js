import React from 'react'
import ServiceSecond from '@/components/ServiceSecond'
import HeroOverlaySection from '@/components/HeroOverlaySection'
import HeroBanner from '@/components/HeroBanner';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image'

const CB = () => {
    const Services = [
        {
            icon: "/qas1.png",
            title: "Requirements Analysis",
            description:
                "Comprehensive analysis of business processes and system requirements.",
            bg: "bg-[#2C35A5]",
        },
        {
            icon: "/qas2.png",
            title: "Implementation & Integration",
            description:
                "Custom CRM/ERP implementation, data migration, and third-party integration.",
            bg: "bg-white",
        },
        {
            icon: "/qas3.png",
            title: "Training & Support",
            description:
                "User training, system documentation, and ongoing technical support.",
            bg: "bg-[#2C35A5]",
        },
    ];
    return (
        <main className="flex flex-col items-center w-full">
            <HeroBanner title='CRM & ERP Solutions'/>

            <ServiceSecond services={Services}/>

            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#282C4B] leading-snug">
                        Transform Your Business <br/> Operations
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        Streamline your business processes with our custom CRM and ERP solutions.
                        </p>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            View all services
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/ce.png" alt="social-media" width={350} height={350} className="object-contain  " />
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/ce1.png" alt="megaphone" width={350} height={350} className="object-contain rotate-y-180" />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                        CRM & ERP Excellence
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        Comprehensive business management solutions for modern enterprises.
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>Custom CRM Development</li>
                            <li>ERP Implementation</li>
                            <li>Process Automation</li>
                            <li></li>
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
