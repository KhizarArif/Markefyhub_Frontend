import React from 'react'
import ServiceSecond from '@/components/ServiceSecond'
import HeroOverlaySection from '@/components/HeroOverlaySection'
import HeroBanner from '@/components/HeroBanner';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image'

const dotnet = () => {
    const Services = [
        {
            icon: "/sevice1.png",
            title: "Innovative Solutions",
            description:
                "We leverage cutting-edge technologies and creative strategies to deliver innovative digital solutions that drive business growth.",
            bg: "bg-[#2C35A5]",
        },
        {
            icon: "/sevice2.png",
            title: "Data-Driven Results",
            description:
                "Our approach combines analytics and expertise to create measurable impact, ensuring ROI-focused digital marketing campaigns.",
            bg: "bg-white",
        },
        {
            icon: "/sevice3.png",
            title: "24/7 Expert Support",
            description:
                "Get round-the-clock support from our dedicated team of digital marketing specialists and technical experts.",
            bg: "bg-[#2C35A5]",
        },
    ];
    return (
        <main className="flex flex-col items-center w-full">
            <HeroBanner title=".Net & Frameworks"/>

            <ServiceSecond services={Services}/>

            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            Build Robust Applications with <br /> .NET
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Leverage our expertise in .NET development to create secure, scalable, and high-performance enterprise solutions.
                        </p>
                    </div>

                    <div className="relative flex justify-center">
                        {/* Base Image */}
                        <Image
                            src="/dotnet1.png"
                            alt="dotnet base"
                            width={350}
                            height={350}
                            className="object-contain"
                        />
                        <Image
                            src="/dotnet2.png"
                            alt="dotnet overlay"
                            width={200}
                            height={200}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
                        />
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/dotnet3.png" alt="megaphone" width={350} height={350} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            Core .NET Capabilities
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Comprehensive .NET development services for modern enterprise <br/> applications
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                        <li>ASP.NET Core Development</li>
                            <li>Microservices Architecture</li>
                            <li> Azure Cloud Integration</li>
                        </ol>
                    </div>
                </div>
            </section >

            <HeroOverlaySection  />
        </main >
    )
}

export default dotnet
