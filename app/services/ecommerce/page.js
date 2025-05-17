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
            title: "E-commerce Strategy & Planning",
            description:
                "Market analysis, platform selection, and creating comprehensive e-commerce roadmap.",
            bg: "bg-[#2C35A5]",
        },
        {
            icon: "/qas2.png",
            title: "Platform Development",
            description:
                "Custom development, payment gateway integration, and security implementation.",
            bg: "bg-white",
        },
        {
            icon: "/qas3.png",
            title: "Launch & Growth",
            description:
                "Performance optimization, analytics setup, and continuous platform enhancement.",
            bg: "bg-[#2C35A5]",
        },
    ];
    return (
        <main className="flex flex-col items-center w-full">
            <HeroBanner title='E-commerce Solutions' />
            <ServiceSecond services={Services} />

            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            Build Your Online Store
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Create a powerful e-commerce platform that drives sales and delivers exceptional shopping experiences.
                        </p>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            View all services
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/ecom.png" alt="social-media" width={350} height={350} className="object-contain  " />
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/ecom1.png" alt="megaphone" width={400} height={400} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            E-commerce Development Solutions
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Comprehensive e-commerce services for modern retail
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>Custom E-commerce Development</li>
                            <li>Payment Gateway Integration</li>
                            <li>Inventory Management</li>
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
