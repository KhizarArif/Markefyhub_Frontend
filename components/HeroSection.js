'use client';
import '@/app/globals.css';
import Image from 'next/image';
import React, { useState } from 'react';
import Feedback from './Feedback';
import '@fortawesome/fontawesome-free/css/all.min.css';

const testimonials = [
  {
    name: "Alan Baker",
    title: "CEO of Redbird Company",
    quote:
      "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!",
  },
  {
    name: "Theresa Webb",
    title: "CEO of Redbird Company",
    quote:
      "From start to finish, working with this team has been a seamless experience. They delivered on time and within budget.",
  },
  {
    name: "Robert Fox",
    title: "CEO of Redbird Company",
    quote:
      "The team is amazing! Their designs transformed our brand identity and we saw immediate positive feedback from customers.",
  },
];
const jobs = [
  {
    type: "Full Time",
    location: "Glendale, CA",
    title: "Product Manager",
    department: "Marketing",
    salary: "$2,000 - 5,000",
    filled: true,
  },
  {
    type: "Part Time",
    location: "Glen wood, CA",
    title: "Product Designer",
    department: "Designer",
    salary: "$2,000 - 5,000",
    filled: false,
  },
  {
    type: "Part Time",
    location: "Tropico, CA",
    title: "Recruiting Coordinator",
    department: "Customers Service",
    salary: "$2,000 - 5,000",
    filled: false,
  },
];

export default function HeroSection() {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Array(5).fill({
    title: "Lirante",
    image: "/home10.png",
  });
  const visibleCards = 2;

  const prevTestimonial = () => {
    setCurrentIndex1((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex1((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handleNext = () => {
    if (currentIndex + visibleCards < items.length) {
      setCurrentIndex(currentIndex + visibleCards);
    }
  };

  const handlePrev = () => {
    if (currentIndex - visibleCards >= 0) {
      setCurrentIndex(currentIndex - visibleCards);
    }
  };
  return (
    <main className="flex flex-col items-center w-full">


      <section className="flex flex-col md:flex-row items-center max-w-7xl w-full px-4 py-16 mx-auto gap-10">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold leading-tight text-[#282C4B]">
            We Help to Grow Your Business With our Expert Marketing Solutions
          </h1>
          <p className="text-[#6E6A74] leading-relaxed text-xl">
            Our digital marketing services include consulting and management options for a variety of online marketing tactics including SEO, PPC ads, Amazon store optimization, copywriting, CRO, and more.
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 p-4 rounded-md border border-gray-300 outline-none bg-[#E7E7E7] h-[4rem]"
            />

            <button className="bg-[#2C35A5] w-[40%] text-white px-6 py-3 rounded-md h-[4rem]">
              Get My Free Proposal
            </button>
          </div>
        </div>


        <div className="flex-1 flex justify-center relative ml-[10%]">
          <div className="relative w-[80%] aspect-[7/8] bg-[url('/home1.png')] bg-cover bg-center clip-path-[polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]">
            <button className="absolute bottom-4 left-4 bg-[#D8DBFF] text-[#000000] px-6 py-4 rounded-md font-bold shadow-md">
              Affordable
            </button>
            <button className="absolute top-4 right-4 bg-[#D8DBFF] text-[#000000] px-6 py-4 rounded-md font-bold shadow-md">
              Professional
            </button>
          </div>
        </div>
      </section>


      <section className="w-full flex flex-wrap justify-center items-center gap-10 py-10 px-4 bg-[#EBF1F9]">
        {['/main1.png', '/main2.png', '/main3.png', '/main4.png', '/main1.png', '/main2.png', '/main3.png'].map((logo, index) => (
          <div key={index} className="w-30 h-20 relative">
            <Image src={logo} alt={`logo-${index}`} width={400} height={300} objectFit="contain" />
          </div>
        ))}
      </section>


      <section className="flex flex-col md:flex-row items-center max-w-7xl w-full px-4 py-16 mx-auto gap-10">

        <div className="flex-1 flex justify-center">
          <Image src="/home2.png" alt="choose-us" width={600} height={450} className="object-contain" />
        </div>

        <div className="flex-1 space-y-6">
          <h3 className="text-[#2C35A5] font-bold text-xl">Why Choose Us</h3>
          <h2 className="text-[#061E42] text-3xl font-bold">
            Why Choose MarkefyHub For Your Digital Marketing Agency?
          </h2>
          <p className="text-[#6E6A74] leading-relaxed text-xl">
            Thrive is a full-service digital marketing agency. We’ve been providing a wide range of services
            to clients of all industries since 2005. Our digital marketing services include consulting and
            management options for a variety of online marketing tactics including SEO, PPC ads, Amazon store optimization, copywriting, CRO, and more.
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
          <button className="mt-6 bg-[#2C35A5] text-white py-3 px-6 rounded-md">
            Request A Quote
          </button>
        </div>
      </section>

      <section className="w-full py-18 bg-[#FAFAFA]">
        <div className="max-w-7xl w-full mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-10">
            <div className="max-w-4xl w-full px-4 md:px-0">
              <h2 className="text-3xl font-bold text-[#282C4B] leading-snug text-left">
                Our Expert Services <br />
                That Grow Traffic & Increase <br />
                Revenue
              </h2>
            </div>


            <div className='flex flex-col gap-3'>
              <div className="max-w-4xl w-full px-4 md:px-0">
                <p className="text-[#6E6A74] text-xl text-left mt-4 leading-relaxed">
                  We are the top digital marketing agency for branding corp. We offer a full range of services to help clients improve their search engine rankings and drive more traffic to their websites.
                </p>
              </div>


              <button className="bg-[#2C35A5] text-white w-[46%] px-6 py-3 rounded-3xl h-[4rem]">
                See All Services
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '/home3.png', title: 'Content Strategy' },
              { icon: '/home4.png', title: 'App Development' },
              { icon: '/home5.png', title: 'Web Development' }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl h-[120%] shadow-md p-8 flex flex-col items-center text-center">
                <Image src={service.icon} alt={service.title} width={80} height={150} className="object-contain" />
                <h3 className="text-xl font-semibold mt-8">{service.title}</h3>
                <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                  We are the top digital marketing agency for branding corp.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 mt-3 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-10">
          <h4 className="text-[#2C35A5] uppercase tracking-wide font-semibold">Expert Team</h4>
          <h2 className="text-4xl font-bold">Meet our expert team behind the success</h2>

          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
            {Array(4).fill(0).map((_, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image src="/home6.png" alt="team-member" width={300} height={300} className="object-cover w-full h-72 bg-blue-900" />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Waleed Yousaf</h3>
                  <p className="text-gray-500 text-sm">Chief Executive Officer</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-[#2C35A5]">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-[#2C35A5] text-white flex items-center justify-center">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-10">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Lets have a look at <br />
              my <span className="text-[#2C35A5]">Portfolio</span>
            </h2>
            <button className="bg-[#2C35A5] text-white px-7 py-2 rounded-full font-medium">
              See All
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items
                .slice(currentIndex, currentIndex + visibleCards)
                .map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl overflow-hidden gap-5 relative shadow-md"
                  >
                    <div
                      className="w-[43vw] h-[450px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>

                    <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
                      {item.title}
                    </div>
                  </div>
                ))}
            </div>

            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
              disabled={currentIndex === 0}
            >
              <i className="fas fa-chevron-left text-[#2C35A5]"></i>
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
              disabled={currentIndex + visibleCards >= items.length}
            >
              <i className="fas fa-chevron-right text-[#2C35A5]"></i>
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-4">
            {Array(Math.ceil(items.length / visibleCards))
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === currentIndex / visibleCards
                    ? "bg-[#2C35A5]"
                    : "bg-gray-300"
                    }`}
                ></div>
              ))}
          </div>
        </div>
      </section>



      <section className="w-full py-16 ">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#282C4B] leading-snug">
              Effective Social Media Management Solutions
            </h2>
            <p className="text-[#6E6A74] leading-relaxed text-lg">
              We help businesses build strong social media presence through strategic content creation, community engagement, and data-driven campaign management across all major platforms.
            </p>
            <button className="bg-[#2C35A5] text-white px-6 py-3 rounded-md mt-4">
              Learn More
            </button>
          </div>

          <div className="flex justify-center">
            <Image src="/home7.png" alt="social-media" width={500} height={400} className="object-contain" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-16">
          {/* Left Image */}
          <div className="flex justify-center">
            <Image src="/home8.png" alt="megaphone" width={500} height={400} className="object-contain " />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#282C4B] leading-snug">
              Transform Your Digital Presence
            </h2>
            <p className="text-[#6E6A74] leading-relaxed text-lg">
              Our digital transformation solutions are tailored to your business needs. We leverage cutting-edge technologies and proven strategies to enhance your online presence.
            </p>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="w-full py-16 bg-[#2C35A5] text-white text-center relative overflow-hidden">
        <h2 className="text-4xl font-bold mb-4">Hear what our <span className="bg-white text-[#2C35A5] px-2 py-1 rounded">amazing</span> customers say</h2>
        <p className="max-w-xl mx-auto text-lg mb-10">Read through our testimonials to see why our clients love working with us and how we can help you achieve your business goals through creative and effective design.</p>

        <div className="flex justify-center gap-6 px-4">
          {/* Left Faded Card */}
          <div className="w-[300px] bg-white/10 p-6 rounded-2xl text-left text-white/80 backdrop-blur-sm">
            <p className="text-sm">From start to finish, working with this team was a seamless experience...</p>
            <p className="mt-4 font-bold">Theresa Webb</p>
            <p className="text-xs">CEO of Redbird Company</p>
          </div>

          <div className="w-[360px] bg-white text-black p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div>
                <p className="font-bold">Alan Baker</p>
                <p className="text-sm text-gray-500">CEO of Redbird Company</p>
              </div>
            </div>
            <p className="italic">Working with Katalyst Studio has been an incredible experience...</p>
          </div>

          <div className="w-[300px] bg-white/10 p-6 rounded-2xl text-left text-white/80 backdrop-blur-sm">
            <p className="text-sm">Their team delivered on time and within budget...</p>
            <p className="mt-4 font-bold">Michael Smith</p>
            <p className="text-xs">CTO of Redbird Company</p>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={prevTestimonial}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition ${currentIndex1 === 0 ? 'bg-white text-[#2C35A5]' : 'border border-white text-white'
              }`}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={nextTestimonial}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition ${currentIndex1 === testimonials.length - 1 ? 'bg-white text-[#2C35A5]' : 'border border-white text-white'
              }`}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

      </section>


      <section className="w-[100%] py-20 bg-cover px-3 bg-center text-white relative mt-3">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-black">Our Features Jobs</h2>
          <button className="bg-[#2C35A5] text-black text-sm font-medium px-6 py-2 rounded-full hover:bg-blue-700 transition">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6"
            >
              <div className="flex gap-3 mb-4">
                <span className="text-sm text-black border px-4 py-1 rounded-full bg-gray-100">
                  {job.type}
                </span>
                <span className="text-sm text-black border px-4 py-1 rounded-full bg-gray-100">
                  {job.location}
                </span>
              </div>

              <h3 className="text-lg text-black font-semibold mb-1">{job.title}</h3>
              <p className="text-sm text-black mb-1">{job.department}</p>
              <p className="text-sm text-black font-medium mb-5">
                {job.salary}
              </p>

              <button
                className={`w-full py-2 text-sm font-medium rounded-full border ${job.filled
                  ? "bg-[#2C35A5] text-white"
                  : "text-black border-gray-300"
                  }`}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section
        className="w-full py-20 bg-cover bg-center text-white relative mt-3"
        style={{ backgroundImage: "url('/home9.png')" }}
      >
        <div className="absolute inset-0 bg-[#2C35A5]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Showcase some impressive numbers.</h2>
          <div className="flex flex-wrap justify-center gap-16">
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

  <Feedback/>
    </main>
  );
}
