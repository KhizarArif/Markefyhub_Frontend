'use client';
import '@/app/globals.css';
import Image from 'next/image';
import { React, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const faqItems = [
    {
        question: 'What digital marketing services do you offer?',
        answer:
            'We provide comprehensive digital marketing solutions including SEO, PPC advertising, social media marketing, content marketing, email campaigns, and analytics. Our team creates customized strategies to meet your specific business goals and target audience.',
    },
    {
        question: 'How long does it take to develop a website?',
        answer:
            'Project timelines depend on complexity, but standard websites usually take 4–6 weeks from planning to launch.',
    },
    {
        question: 'Do you provide ongoing website maintenance?',
        answer:
            'Yes, we offer ongoing maintenance packages including updates, backups, and technical support.',
    },
    {
        question: 'How do you measure digital marketing success?',
        answer:
            'We use KPIs like traffic, conversion rates, ROI, and engagement to track campaign success and improve performance.',
    },
    {
        question: 'What is your project process?',
        answer:
            'We follow a clear process: discovery, planning, design, development, testing, and launch — with full transparency throughout.',
    },
];

const testimonials = [
    {
        image: '/about4.png', 
        name: 'James Thomas',
        role: 'UI Designer',
        quote: 'HR Solutions are incredibly accommodating, diligent and competent. They understand the scope, needs and importance of both concerned parties within the interviewing and hiring process – That really helps with building a life and career.',
    },
    {
        image: '/about4.png',
        name: 'Sophia Lee',
        role: 'Marketing Manager',
        quote: 'MarkefyHub made it possible for our brand to grow online. Their strategies were clear, data-backed, and results-oriented.',
    },
    {
        image: '/about4.png',
        name: 'Michael Chen',
        role: 'Founder, DevCore',
        quote: 'Exceptional service and results. Their UI/UX team redefined how users interact with our platform.',
    },
];
export default function HeroSection() {
    const [activeFAQ, setActiveFAQ] = useState(null);
    const [current, setCurrent] = useState(0);
    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };
    return (
        <main className="flex flex-col items-center w-full">

            <section className="flex flex-col md:flex-row items-center max-w-7xl w-full px-4 py-16 mx-auto gap-10">

                <div className="flex-1 space-y-6 max-w-[450px]">
                    <h1 className="text-4xl font-bold leading-tight text-[#282C4B]">
                        We Help to Grow Your Business  With our Expert Marketing Solutions
                    </h1>
                    <p className="text-[#6E6A74] leading-relaxed text-xl">
                        Our digital marketing services include consulting and management options for a variety of online marketing tactics including SEO, PPC ads, Amazon store optimization, copywriting, CRO, and more.
                    </p>
                </div>


                <div className="ml-[20%] flex justify-center">
                    <Image src="/about1.png" alt="social-media" width={500} height={400} className="object-contain" />
                </div>
            </section>



            <section className="w-full flex flex-wrap justify-center items-center gap-10 py-10 px-4 bg-[#EBF1F9]">
                {['/main1.png', '/main2.png', '/main3.png', '/main4.png', '/main1.png', '/main2.png', '/main3.png'].map((logo, index) => (
                    <div key={index} className="w-30 h-20 relative">
                        <Image src={logo} alt={`logo-${index}`} width={400} height={300} objectFit="contain" />
                    </div>
                ))}
            </section>


            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="flex justify-center">
                        <Image src="/about2.png" alt="social-media" width={500} height={400} className="object-contain" />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#282C4B] leading-snug">
                            Our Journey in Numbers
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                            With over a decade of experience in digital innovation, we've helped hundreds of businesses transform their digital presence and achieve remarkable growth through cutting-edge solutions.
                        </p>
                        <button className="bg-[#2C35A5] text-white px-6 py-3 rounded-md mt-4">
                            Learn More
                        </button>
                    </div>


                </div>
            </section>

            <section
                className="w-full py-20 bg-cover bg-center text-white relative mt-3"
                style={{ backgroundImage: "url('/home9.png')" }}
            >
                <div className="absolute inset-0 bg-[#2C35A5]/80"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-10">Showcase some impressive numbers.</h2>
                    <div className="flex flex-wrap justify-center gap-x-80 w-[100%]">
                        <div>
                            <p className="text-5xl font-bold">860+</p>
                            <p className="text-xl">Projects</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">55+</p>
                            <p className="text-xl">Clients</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">10+</p>
                            <p className="text-xl">Awards</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center max-w-7xl w-full px-4 py-16 mx-auto gap-10">

                <div className="flex-1 space-y-6">
                    <h2 className="text-[#061E42] text-3xl font-bold">
                        Transforming Businesses Through Digital Innovation
                    </h2>
                    <p className="text-[#6E6A74] leading-relaxed text-xl">
                        At MarkefyHub Solutions, we are passionate about helping businesses thrive in the digital landscape. Our team of experts combines creativity, technology, and strategy to deliver exceptional digital solutions that drive growth and success for our clients.
                        With years of experience in digital transformation, we specialize in web development, digital marketing, UI/UX design, and custom software solutions. Our client-centric approach ensures that every project we undertake is tailored to meet specific business objectives while delivering measurable results.
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        {[
                            'Innovative Digital Solutions',
                            'Expert Development Team',
                            'Strategic Marketing Approach',
                            '24/7 Technical Support',
                            'Data-Driven Results',
                            'Advanced Security Protocols'
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-[#061E42] font-bold">
                                ✅ {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <Image src="/about3.png" alt="choose-us" width={600} height={450} className="object-contain" />
                </div>
            </section>

            <section className="py-20 w-full bg-[#F8F8F8] text-center">
                <p className="text-[#2C35A5] font-medium text-sm">Testimonials</p>

                <h2 className="text-3xl md:text-4xl font-bold text-[#061E42] my-4">Our Happy Customers</h2>

                <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto mt-10 gap-10 px-4">
                <Image src="/about4.png" alt="Testimonial Image" width={300} height={300}/>

                    <div className="text-left max-w-xl">
                        <div className="text-4xl text-[#2C35A5] mb-4">💬</div>
                        <p className="italic text-[#6E6A74] mb-6">"{testimonials[current].quote}"</p>
                        <p className="font-bold text-[#061E42]">{testimonials[current].name}</p>
                        <p className="text-sm text-[#888888]">{testimonials[current].role}</p>
                    </div>
                </div>

                <div className="flex justify-center mt-8 gap-2">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-[#2C35A5]' : 'bg-gray-400'} transition`}
                        />
                    ))}
                </div>
            </section>


            <section className="w-[screen] max-w-4xl mx-auto px-4 py-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-30 h-30 mx-0 bg-[#2C35A5] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

                <div className="absolute bottom-4 left-0 w-10 h-10 bg-[#2C35A5] rounded-full"></div>

                <div className="absolute top-6 right-6 w-10 h-10 bg-[#2C35A5] rotate-45 clip-triangle"></div>

                <h2 className="text-3xl font-bold text-center text-[#061E42] mb-10 z-10 relative">
                    Digital Marketing Services FAQs
                </h2>

                <div className="space-y-4 relative z-10">
                    {faqItems.map((item, index) => (
                        <div key={index} className="bg-[#F9F5F2] p-5 rounded-md shadow-sm">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center font-semibold text-left text-[#061E42] text-lg"
                            >
                                {item.question}
                                <span className="text-xl">
                                    {activeFAQ === index ? '↑' : '↓'}
                                </span>
                            </button>
                            {activeFAQ === index && (
                                <p className="mt-4 text-[#6E6A74] text-sm">{item.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>


        </main >
    )
}