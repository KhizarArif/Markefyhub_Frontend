'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useParams } from "next/navigation";
import { get } from "@/Utils/apiUtils";

const newBlog = () => {
  const params = useParams();
  console.log("Params", params);
  
  const [singleBlog, setSingleBlog] = useState([]);

  useEffect(() => {
    const getSingleBlog = async () => {
      try {
        const response = await get(`blogs/${params.id}`);
        console.log("This is get Single Blog response", response);
        setSingleBlog(response);
      } catch (error) {
        console.log(error);
        throw error;
      }
    };

    getSingleBlog();
  }, []);

  return (
    <main className="flex flex-col items-center  w-full">
      <section className="w-[90vw] md:w-[95vw] px-20 mx-auto py-10">
        <div className="space-y-4">
          <span className="bg-[#2C35A5] text-white px-3 py-1 text-sm rounded-md w-fit inline-block">
            Technology
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f1f] leading-snug">
            The Impact of Technology on the Workplace:{" "}
            <br className="hidden md:block" />
            How Technology is Changing
          </h2>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="font-medium text-gray-700">Tracey Wilson</span>
            <span>•</span>
            <span>August 20, 2022</span>
          </div>

          <div className="w-full rounded-lg overflow-hidden mt-4">
            <Image
              src="/asd1.jpg"
              alt="Main Building"
              width={1600}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>

          <p className="text-[#444] text-2xl md:text-xl  leading-relaxed mt-6">
            Traveling is an enriching experience that opens up new horizons,
            exposes us to different cultures, and creates memories that last a
            lifetime. However, traveling can also be stressful and overwhelming,
            especially if you don’t plan and prepare adequately. In this blog
            article, we’ll explore tips and tricks for a memorable journey and
            how to make the most of your travels.
          </p>

          <p className="text-[#444] text-2xl md:text-xl leading-relaxed">
            One of the most rewarding aspects of traveling is immersing yourself
            in the local culture and customs. This includes trying local
            cuisine, attending cultural events and festivals, and interacting
            with locals. Learning a few phrases in the local language can also
            go a long way in making connections and showing respect.
          </p>

          <div className="mt-4">
            <h3 className="font-bold text-3xl md:text-xl text-[#1f1f1f] mb-2">
              Research Your Destination
            </h3>
            <p className="text-[#444] text-2xl md:text-xl leading-relaxed">
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
            </p>
          </div>
        </div>
      </section>

      <section className="w-[90vw] md:w-[95vw] mx-auto px-20 py-10">
        <div className="space-y-6">
          <p className="text-[#444] text-2xl md:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
            faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
            elementum nisi quis eleifend quam adipiscing vitae. Viverra
            adipiscing at in tellus.
          </p>

          <blockquote className="italic text-[#333] bg-gray-100 border-l-4 border-gray-400 p-4 rounded-md text-2xl md:text-xl">
            “ Traveling can expose you to new environments and potential health
            risks, so it’s crucial to take precautions to stay safe and healthy.
            ”
          </blockquote>

          <div className="w-full rounded-lg overflow-hidden">
            <Image
              src="/asd2.jpg"
              alt="Traveler with suitcase"
              width={1600}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default newBlog;
