import React from 'react'
import Image from 'next/image';
import ServiceSecond from '@/components/ServiceSecond';
import HeroOverlaySection from '@/components/HeroOverlaySection';
import HeroBanner from '@/components/HeroBanner';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ServiceCard from '@/components/ServiceCard';

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
const PHP = () => {
    return (
        <main className="flex flex-col items-center w-full">
          <HeroBanner title="PHP & Frameworks"/>

            <ServiceSecond services={Services} />



            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            Enterprise-Grade PHP Development Services
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Build Scalable Web Applications with Modern PHP Frameworks.
                        </p>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            PHP powers over 79% of websites worldwide, making it one of the most trusted server-side programming languages. Our expert PHP development team leverages modern frameworks like Laravel, Symfony, and CodeIgniter to build robust web applications.
                            According to recent industry reports, over 90% of enterprise applications require robust backend systems. PHP's mature ecosystem and extensive library support make it an ideal choice for building secure, scalable, and maintainable web solutions.
                            Let our experienced PHP developers create custom web applications that perfectly align with your business needs. From API development to complex enterprise systems, we deliver high-performance solutions.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/service2.png" alt="social-media" width={500} height={400} className="object-contain" />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/service3.png" alt="megaphone" width={500} height={400} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            Modern PHP Frameworks vs Traditional Development
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Build Scalable Web Applications with Modern PHP Frameworks.
                        </p>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Modern PHP frameworks provide robust architecture and tools that significantly accelerate development while maintaining high code quality. They offer built-in security features, MVC patterns, and extensive libraries for rapid application development.
                            While traditional PHP development offers complete control over code, modern frameworks provide structured development approaches, better security practices, and improved maintainability. They include features like ORM, templating engines, and built-in testing tools that reduce development time by up to 40%.
                        </p>

                    </div>
                </div>
            </section>

            <HeroOverlaySection />

            
            <ServiceCard />

        </main>
    )
}

export default PHP
