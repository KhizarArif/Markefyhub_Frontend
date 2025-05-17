import React from 'react'
import HeroBanner from '@/components/HeroBanner';
import HeroOverlaySection from '@/components/HeroOverlaySection'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image'

const VE = () => {
    return (
        <main className="flex flex-col items-center w-full">
            <HeroBanner title='Video Editing'/>
            
            <section className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                        Reliability, Worldwide
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.
                    </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>Affordable</li>
                            <li> Punctual</li>
                            <li> Professional</li>
                        </ol>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            learn more
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <Image src="/ve.png" alt="social-media" width={350} height={350} className="object-contain" />
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image src="/ve1.png" alt="megaphone" width={350} height={350} className="object-contain " />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#282C4B] leading-snug">
                        Strategic SEO Services for Your <br/> Business
                        </h2>
                        <p className="text-[#6E6A74] leading-relaxed text-lg">
                        We deliver comprehensive SEO solutions to improve your online visibility and drive organic growth through data-driven strategies and proven optimization techniques.
                        </p>
                        <ol className='text-[#282C4B] list-disc'>
                            <li>Automated Testing</li>
                            <li> Performance Testing</li>
                            <li> Security Testing</li>
                            <li>Mobile Testing</li>

                        </ol>
                        <button className="bg-[#2C35A5] text-white font-semibold px-6 py-4 rounded-md w-full sm:w-auto hover:bg-amber-200 hover:text-[#2C35A5]">
                            learn more
                        </button>
                    </div>
                </div>
            </section >

            <HeroOverlaySection />
        </main >
    )
}

export default VE
