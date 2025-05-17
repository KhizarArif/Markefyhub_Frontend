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
            title: "Blockchain Strategy & Design",
            description:
                "Analyzing requirements, selecting blockchain platforms, and designing architecture for decentralized solutions.",
            bg: "bg-[#2C35A5]",
        },
        {
            icon: "/qas2.png",
            title: "Smart Contract Development",
            description:
                "Development of secure smart contracts, DApps, and integration with existing systems.",
            bg: "bg-white",
        },
        {
            icon: "/qas3.png",
            title: "Testing & Deployment",
            description:
                "Rigorous testing, security audits, and deployment to mainnet with monitoring setup.",
            bg: "bg-[#2C35A5]",
        },
    ];
    return (
        <main className="flex flex-col items-center w-full">
          <HeroBanner title='BlockChain Development'/>

            <ServiceSecond services={Services} />

            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#282C4B] leading-snug">
                        Transform Your Business with <br/> Blockchain
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        Build secure, transparent, and decentralized solutions using cutting-edge blockchain technology.
                        </p>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            View all services
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/bc.png" alt="social-media" width={350} height={350} className="object-contain  " />
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/bc1.png" alt="megaphone" width={400} height={400} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                        Blockchain Development Solutions
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        Comprehensive blockchain development services for modern enterprises
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>Smart Contract Development</li>
                            <li>DApp Development</li>
                            <li>NFT Platform Development</li>
                           
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
