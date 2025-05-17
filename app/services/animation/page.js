import React from 'react'
import ServiceSecond from '@/components/ServiceSecond'
import HeroOverlaySection from '@/components/HeroOverlaySection'
import HeroBanner from '@/components/HeroBanner';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image'

const animation = () => {
    const Services = [
        {
            icon: "/sevice1.png",
            title: "Concept & Design",
            description:
                "We leverage cutting-edge technologies and creative strategies to deliver innovative digital solutions that drive business growth.",
            bg: "bg-[#2C35A5]",
        },
        {
            icon: "/sevice2.png",
            title: "Production & Animation",
            description:
                "Our approach combines analytics and expertise to create measurable impact, ensuring ROI-focused digital marketing campaigns.",
            bg: "bg-white",
        },
        {
            icon: "/sevice3.png",
            title: "Refinement & Delivery",
            description:
                "Get round-the-clock support from our dedicated team of digital marketing specialists and technical experts.",
            bg: "bg-[#2C35A5]",
        },
    ];
    return (
        <main className="flex flex-col items-center w-full">
          <HeroBanner title="Animation & Graphics Services"/>

            <ServiceSecond  services={Services}/>

            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#282C4B] leading-snug">
                            Bring Your Ideas to Life
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Transform your vision into stunning animations and graphics with our professional creative services.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/ani1.png" alt="social-media" width={350} height={350} className="object-contain" />
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/ani-seo.png" alt="megaphone" width={350} height={350} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#282C4B] leading-snug">
                            Animation & Graphics Excellence
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Comprehensive animation and graphics solutions for modern businesses
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>2D/3D Animation</li>
                            <li>Motion Graphics</li>
                            <li>Character Design</li>
                            <li>Visual Effects (VFX)</li>
                            <li>Animated Explainers</li>
                            <li>Interactive Graphics</li>
                        </ol>
                    </div>
                </div>
            </section >

            <HeroOverlaySection />
        </main >
    )
}

export default animation
