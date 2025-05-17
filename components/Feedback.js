import React from 'react'

const Feedback = () => {
    return (
        <section className="w-full py-20 bg-[#F5F5F5] text-black">
            <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between md:items-start gap-10">

                <div className="md:w-1/2 mb-10 md:mb-0">
                    <p className="text-[#2C35A5] font-semibold mb-2">Contact Us</p>
                    <h2 className="text-4xl font-bold mb-4">Have Questions? <br /><span className="text-[#2C35A5]">Get in touch!</span></h2>
                    <p className="text-gray-700 mb-6">
                        We are a dynamic team of creative minds and strategic thinkers, dedicated to helping businesses thrive in the digital landscape.
                    </p>

                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-[#2C35A5] hover:text-white transition">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-[#2C35A5] hover:text-white transition">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-[#2C35A5] hover:text-white transition">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                <form className="md:w-1/2 space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative w-full">
                            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-black rounded-full focus:outline-none" />
                        </div>
                        <div className="relative w-full">
                            <input type="text" placeholder="Name" className="w-full px-4 py-3 border border-black rounded-full focus:outline-none" />
                        </div>
                    </div>

                    <div className="relative">
                        <textarea
                            rows="5"
                            placeholder="How can we help you? Feel free to get in touch!"
                            className="w-full px-4 py-3 border border-black rounded-xl resize-none focus:outline-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="mt-2 px-6 py-3 rounded-full bg-[#2C35A5] text-white font-light flex items-center gap-2 hover:bg-[#1f2885] transition"
                    >
                        <i className="fas fa-paper-plane"></i> Get In Touch
                    </button>
                </form>

            </div>
        </section>
    )
}

export default Feedback
