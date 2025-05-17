import React from 'react'
import Image from 'next/image'
import '@fortawesome/fontawesome-free/css/all.min.css';

const career = () => {
    return (
        <main className="flex flex-col items-center w-full">

            <section className="flex flex-col md:flex-row items-center max-w-7xl w-full px-4 py-16 mx-auto gap-10">

                <div className="flex-1 space-y-6 max-w-[450px]">
                    <h1 className="text-4xl w-[50vw] font-bold leading-tight text-[#282C4B]">
                 <span className='text-blue-600'>Join</span> Our <span className='text-blue-600'>Team-Build</span> Your <br/> Future with <span className='text-blue-600'>Us</span>
                    </h1>
                    <p className="text-black leading-relaxed text-xl w-[50vw]">
                    Whether you're looking for information, support, or partnership opportunities, we're all ears. Drop us a message and let’s start the conversation today. Together, we can make something amazing happen!
                    </p>
                </div>

                <div className="ml-[30%] flex justify-center">
                    <Image src="/rf.png" alt="social-media" width={500} height={400} className="object-contain" />
                </div>
            </section>

            <section className="w-full bg-white py-12 px-4">
                {/* Search Bar */}
                <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto mb-10 gap-4">
                    <div className="flex flex-1 border border-[#E4E5E8] p-2  rounded-md max-w-[50%] shadow-sm">
                        <input
                            type="text"
                            placeholder="Job title, Keyword..."
                            className="flex-1 px-4 py-2  outline-none"
                        />
                        <button className="border border-[#E4E5E8] bg-[#0A65CC] text-white px-6 py-2  rounded-r-md">Find Job</button>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Select Category Here"
                            className="border border-[#E4E5E8] outline-none rounded-md px-4 py-2 shadow-sm"
                        />
                    </div>
                </div>

                {/* Job Cards */}
                <div className="space-y-6 max-w-6xl mx-auto  ">
                    {Array(4)
                        .fill(0)
                        .map((_, idx) => (
                            <div
                                key={idx}
                                className="flex justify-between items-center w-full  border-2 border-yellow-50  bg-[#F2F2F2] rounded-lg p-6 shadow-sm"
                            >
                                <div>
                                    <h3 className="text-lg md:text-xl font-semibold text-[#2E2F32]">
                                        Techical Support Specialist
                                    </h3>
                                    <div className="flex items-center gap-4 mt-1">
                                        <span className="bg-green-100 text-green-600 px-2 py-0.5 text-xs font-medium rounded">
                                            PART-TIME
                                        </span>
                                        <span className="text-gray-600 text-sm">
                                            Salary: $20,000 - $25,000
                                        </span>
                                    </div>
                                    <div className="mt-2 text-sm text-gray-700">
                                        <span className="text-[#2563eb] font-medium cursor-pointer">
                                            Markefyhub
                                        </span>
                                        <div className="flex items-center text-gray-500 text-sm mt-1">
                                            <i className="fas fa-map-marker-alt mr-2 text-[#555]" />
                                            Islamabad, Pakistan
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="bg-[#2C35A5] text-white px-6 py-2 rounded-full font-medium">
                                        View Job
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </section>


        </main>
    )
}

export default career
