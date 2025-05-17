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
            title: "Requirements Analysis",
            description:
                "We gather your content management needs and analyze requirements for your custom CMS solution",
            bg: "bg-[#2C35A5]",
        },
        {
            icon: "/qas2.png",
            title: "CMS Architecture Design",
            description:
                "Our experts design a scalable CMS architecture tailored to your content workflow and business needs",
            bg: "bg-white",
        },
        {
            icon: "/qas3.png",
            title: "Development & Launch",
            description:
                "We develop and deploy your custom CMS with comprehensive training and ongoing support",
            bg: "bg-[#2C35A5]",
        },
    ];
    return (
        <main className="flex flex-col items-center w-full">
            <HeroBanner title='Devops Services'/>

            <ServiceSecond services={Services}/>

            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/devops.png" alt="megaphone" width={400} height={400} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            Custom CMS Development <br /> Solutions for Your Business

                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Transform your content management with our tailored CMS solutions. We build scalable, user-friendly systems that streamline your digital workflow and content operations.
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>Content Management</li>
                            <li>User Management</li>
                            <li>Workflow Automation</li>
                            <li>API Integration</li>
                        </ol>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            See al services
                        </button>
                    </div>
                </div>
            </section >

            <HeroOverlaySection />
        </main >
    )
}
export default CB
