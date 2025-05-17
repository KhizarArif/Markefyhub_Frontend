import React from 'react'
import ServiceSecond from '@/components/ServiceSecond'
import HeroOverlaySection from '@/components/HeroOverlaySection'
import ServiceGridSection from '@/components/ServiceGridSection'
import HeroBanner from '@/components/HeroBanner'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image'

const appDev = () => {
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
            <HeroBanner title="Cross App Development" />
            <ServiceSecond services={Services} />

            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            Why Your Business Needs A <br /> Custom Web Design
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Increase Your Search Rankings and Drive More Targeted Traffic
                        </p>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Your website is the backbone of your business. It supports all your company’s digital marketing efforts and serves as your primary customer touchpoint. A responsive, custom eCommerce website design gives online users a clear idea of your brand offerings, unique value propositions, and core values.
                            According to a report released by the eCommerce Foundation, 88 percent of U.S. consumers perform online research before making a purchase or visiting a local store. Without a professional custom web design, online shoppers can get easily frustrated. This results in an increased bounce rate, poor online reputation, and lower conversion rate.
                            Don’t let this be the case for your business. Ensure your target customers can find and navigate your website with ease. Invest in a responsive, well-designed, and informative website to improve your brand’s profitability and success.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/app1.png" alt="social-media" width={500} height={400} className="object-contain" />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/app2.png" alt="megaphone" width={500} height={500} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                            Custom Fit Web Design vs. <br /> Website Templates
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Increase Your Search Rankings and Drive More Targeted Traffic
                        </p>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            Your website is a powerful communication platform that allows you to market your brand 24/7 and connect with clients from across locations. However,digital marketing efforts and serves as your not all sites guarantee your desired return on investment (ROI). The primary consideration is choosing between a website template and a custom design website.
                            According to a report released by the eCommerce Foundation, A website template is a pre-made web design that allows developers to plug in content into a sophisticated framework built through HTML or CSS. You can edit limited features, such as colors, font styles and images. But aside from these, what you see is what you get. Although ready-made templates help you save time and money, they lack flexibility and uniqueness.
                        </p>
                    </div>
                </div>
            </section>

            <HeroOverlaySection />
            <ServiceGridSection />
        </main>
    )
}

export default appDev
