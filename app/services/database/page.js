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
            title: "Database Design",
            description:
                "Expert database modeling, schema design, and architecture planning tailored to your business needs. We ensure scalable and efficient data structures.",
            bg: "bg-[#2C35A5]",
        },
        {
            icon: "/qas2.png",
            title: "Implementation",
            description:
                "Seamless database implementation, data migration services, and integration with existing systems while maintaining data integrity.",
            bg: "bg-white",
        },
        {
            icon: "/qas3.png",
            title: "Maintenance",
            description:
                "Continuous monitoring, performance tuning, backup management, and security updates to keep your database running optimally.",
            bg: "bg-[#2C35A5]",
        },
    ];
    return (
        <main className="flex flex-col items-center w-full">
         <HeroBanner title='Database Management'/>
            <ServiceSecond  services={Services}/>

            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            Expert Database Management <br /> Solutions
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            From design to maintenance, we provide comprehensive database management services to ensure your data is secure, efficient, and scalable. Let's optimize your database infrastructure today.
                        </p>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            View all services
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/db.png" alt="social-media" width={350} height={350} className="object-contain  " />
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/db1.png" alt="megaphone" width={400} height={400} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            Comprehensive Database <br /> Solutions
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            We provide end-to-end database management services with focus on performance, security, and scalability.
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>High Availability & Redundancy</li>
                            <li>Data Security & Compliance</li>
                            <li>24/7 Monitoring & Support</li>
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
