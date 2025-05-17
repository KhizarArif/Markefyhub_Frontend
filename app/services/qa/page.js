import React from 'react'
import ServiceSecond from '@/components/ServiceSecond'
import HeroBanner from '@/components/HeroBanner';
import HeroOverlaySection from '@/components/HeroOverlaySection'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image'

const QA = () => {
    const Services = [
        {
            icon: "/qas1.png",
            title: "Test Planning & Strategy",
            description:
                "Comprehensive test planning, requirement analysis, and testing strategy development.",
            bg: "bg-[#2C35A5]",
        },
        {
            icon: "/qas2.png",
            title: "Test Execution & Automation",
            description:
                "Manual testing, automated testing implementation, and continuous integration setup.",
            bg: "bg-white",
        },
        {
            icon: "/qas3.png",
            title: "Quality Monitoring & Reporting",
            description:
                "Defect tracking, quality metrics monitoring, and detailed test reporting.",
            bg: "bg-[#2C35A5]",
        },
    ];
    return (
        <main className="flex flex-col items-center w-full">
           <HeroBanner title="Quality Assurance Services"/>

            <ServiceSecond services={Services}/>

            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            Ensure Software Excellence
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Leverage our QA expertise to deliver high-quality, bug-free software applications.
                        </p>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            View all services
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/qa.png" alt="social-media" width={350} height={350} className="object-contain" />
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/qa1.png" alt="megaphone" width={350} height={350} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            QA Testing Excellence
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Comprehensive quality assurance solutions for modern software
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>Automated Testing</li>
                            <li> Performance Testing</li>
                            <li> Security Testing</li>
                            <li>Mobile Testing</li>

                        </ol>
                    </div>
                </div>
            </section >

            <HeroOverlaySection />
        </main >
    )
}

export default QA
