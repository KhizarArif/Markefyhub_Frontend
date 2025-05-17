import React from 'react'
import Image from 'next/image'
import '@fortawesome/fontawesome-free/css/all.min.css';

const contact = () => {
    return (
        <main className="flex flex-col items-center w-full">

            <section className="flex flex-col md:flex-row items-center max-w-7xl w-full px-4 py-16 mx-auto gap-10">

                <div className="flex-1 space-y-6 max-w-[450px]">
                    <h1 className="text-4xl w-[50vw] font-bold leading-tight text-[#282C4B]">
                        <span className='text-blue-600'>Contact</span> Us <span className='text-blue-600'>Today</span> - We're Here <br /> to <span className='text-blue-600'>Help</span> with Your <span className='text-blue-600'>Needs!</span>
                    </h1>
                    <p className="text-black leading-relaxed text-xl w-[50vw]">
                        Whether you're looking for information, support, or partnership opportunities, we're all ears. Drop us a message and let’s start the conversation today. Together, we can make something amazing happen!
                    </p>
                </div>


                <div className="ml-[30%] flex justify-center">
                    <Image src="/cf.png" alt="social-media" width={500} height={400} className="object-contain" />
                </div>
            </section>
            <section className="w-full bg-[#f9f9fb] py-16 px-4">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-[#2C35A5]">Reach Us Now</h2>
                        <h3 className="mt-2 text-2xl  leading-relaxed text-black">
                            Now, it's time to come up with a great slogan to tie<br/> all the pieces together.
                        </h3>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10">

                        <div className="flex-1 space-y-6">
                            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                                <div className="bg-[#2C35A5] text-white p-3 rounded-full">
                                    <i className="fas fa-map-marker-alt text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Address</h4>
                                    <p className="text-gray-600 text-sm">Awamileaug Drive, Kensington<br />London, UK</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                                <div className="bg-[#2C35A5] text-white p-3 rounded-full">
                                    <i className="fas fa-phone text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Phone</h4>
                                    <p className="text-gray-600 text-sm">+1 (800) 123 456 789<br />+1 (800) 123 456 789</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                                <div className="bg-[#2C35A5] text-white p-3 rounded-full">
                                    <i className="fas fa-envelope text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">E-mail Address</h4>
                                    <p className="text-gray-600 text-sm">info@gmail.com<br />info@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold text-[#2C35A5] mb-2">Send Us Message</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Your email address will not be published. Required fields are marked *
                            </p>
                            <form className="space-y-4">
                                <textarea
                                    rows="5"
                                    className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Message"
                                    required
                                ></textarea>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <input
                                        type="text"
                                        placeholder="Name *"
                                        className="flex-1 border border-gray-300 rounded-md p-3 text-sm"
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="abc@gmail.com"
                                        className="flex-1 border border-gray-300 rounded-md p-3 text-sm"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-[#2C35A5] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
                                >
                                    Submit Now <i className="fas fa-arrow-right ml-2" />
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-400 rounded-md mt-12 px-6 py-4 w-full max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <h4 className="text-lg font-semibold text-black">Follow Us on</h4>
                            <div className="flex gap-6 text-2xl text-black mt-2 md:mt-0">
                                <span className="cursor-pointer hover:text-blue-600"><i className="fab fa-facebook" /></span>
                                <span className="cursor-pointer hover:text-pink-500"><i className="fab fa-instagram" /></span>
                                <span className="cursor-pointer hover:text-blue-800"><i className="fab fa-linkedin" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.982905961198!2d-73.979681!3d40.6826505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b00242c68f3%3A0xa4fa1dfcc862489d!2sBarclays%20Center!5e0!3m2!1sen!2sus!4v1715088448101!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border-0 w-full"
                ></iframe>
            </section>
            <section className="w-full bg-[#2C35A5] py-16 px-4 mt-6 mb-6 text-center h-[40vh] text-white">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to evaluate</h2>
                    <p className="text-sm md:text-base max-w-xl mx-auto mb-6">
                        Are you an influencer ready to launch your own merch? Partner with Symbol Me and start turning your audience into a thriving brand!
                    </p>
                    <button className="bg-white text-black font-semibold px-6 py-3 rounded-md shadow-md hover:shadow-lg transition">
                        Contact Us Now
                    </button>
                </div>
            </section>

        </main>
    )
}

export default contact
