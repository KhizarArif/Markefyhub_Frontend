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
            title: "Cloud Assessment & Strategy",
            description:
                "Analyzing infrastructure needs, creating migration roadmap, and designing cloud architecture.",
            bg: "bg-[#2C35A5]",
        },
        {
            icon: "/qas2.png",
            title: "Migration & Implementation",
            description:
                "Seamless migration to cloud platforms, implementation of cloud-native solutions, and security setup.",
            bg: "bg-white",
        },
        {
            icon: "/qas3.png",
            title: "Optimization & Management",
            description:
                "Performance monitoring, cost optimization, and continuous maintenance of cloud infrastructure.",
            bg: "bg-[#2C35A5]",
        },
    ];
    return (
        <main className="flex flex-col items-center w-full">
            <HeroBanner title='Cloud Services'/>

            <ServiceSecond services={Services}/>

            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#282C4B] leading-snug">
                        Transform Your Business with <br/> Cloud Solutions
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        Leverage the power of cloud computing to scale your business, reduce costs, and enhance operational efficiency.
                        </p>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            View all services
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/cloud.png" alt="social-media" width={350} height={350} className="object-contain  " />
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/cloud1.png" alt="megaphone" width={400} height={400} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                        Cloud Computing Excellence
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        Comprehensive cloud services for modern enterprises
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>Cloud Migration Services</li>
                            <li>Multi-Cloud Solutions</li>
                            <li>Serverless Architecture</li>
                            <li>24/7 Cloud Support</li>
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
