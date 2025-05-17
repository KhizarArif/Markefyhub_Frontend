import React from 'react'
import ServiceSecond from '@/components/ServiceSecond'
import HeroOverlaySection from '@/components/HeroOverlaySection'
import HeroBanner from '@/components/HeroBanner';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image'

const ui = () => {
    const Services = [
        {
            icon: "/sevice1.png",
            title: "Research & Strategy",
            description:
                "We leverage cutting-edge technologies and creative strategies to deliver innovative digital solutions that drive business growth.",
            bg: "bg-[#2C35A5]",
        },
        {
            icon: "/sevice2.png",
            title: "Design & Prototyping",
            description:
                "Our approach combines analytics and expertise to create measurable impact, ensuring ROI-focused digital marketing campaigns.",
            bg: "bg-white",
        },
        {
            icon: "/sevice3.png",
            title: "Testing & Implementation",
            description:
                "Get round-the-clock support from our dedicated team of digital marketing specialists and technical experts.",
            bg: "bg-[#2C35A5]",
        },
    ];
    return (
        <main className="flex flex-col items-center w-full">
            <HeroBanner title="UI/UX Design Services"/>
            <ServiceSecond services={Services} />

            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            Transform Your Digital <br /> Experience
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Create intuitive and engaging user experiences with our professional UI/UX design services.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/ui.png" alt="social-media" width={350} height={350} className="object-contain" />
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/ui1.png" alt="megaphone" width={350} height={350} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            UI/UX Design Excellence
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Comprehensive design solutions for modern digital products
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>User Research & Analysis</li>
                            <li>Information Architecture</li>
                            <li>UI Design Systems</li>
                            <li>Interaction Design</li>
                            <li>Usability Testing</li>
                            <li>Design Documentation</li>
                        </ol>
                    </div>
                </div>
            </section >

            <HeroOverlaySection />
        </main >
    )
}

export default ui
