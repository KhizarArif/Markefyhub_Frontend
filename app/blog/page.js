"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Feedback from "@/components/Feedback";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { get } from "@/Utils/apiUtils";

const blog = () => {
  const [blogs, setBlogs] = useState([]);

  // const blogs = [
  //     {
  //         title: 'Fundamental Of Javascript Mode Toggle With CSS',
  //         img: '/b1.png',
  //     },
  //     {
  //         title: 'Grid CSS Make Your Life Easier Mode Toggle With CSS',
  //         img: '/b2.png',
  //     },
  //     {
  //         title: 'Make Animated Light Mode And Dark Mode Toggle With CSS',
  //         img: '/b3.png',
  //     },
  // ];

  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const response = await get("blogs");
        console.log(response);
        setBlogs(response);
      } catch (error) {
        console.log(error);
        throw error;
      }
    };

    getAllBlogs();
  }, []);

  return (
    <main className="flex flex-col items-center w-full">
      <section className="flex flex-col md:flex-row items-center max-w-7xl w-full px-4 py-16 mx-auto gap-10">
        <div className="flex-1 space-y-6 max-w-[450px]">
          <h1 className="text-4xl w-[50vw] font-bold leading-tight text-[#282C4B]">
            Explore <span className="text-blue-600">Inspiring</span> Stories &{" "}
            <br /> <span className="text-blue-600">Smart</span> Tips on Our{" "}
            <span className="text-blue-600">Blog!</span>
          </h1>
          <p className="text-black leading-relaxed text-xl w-[50vw]">
            Dive into a world of creativity, ideas, and expert insights with our
            blog section! Whether you're looking for helpful tips, the latest
            trends, or motivational stories, we've got something for everyone.
            Stay informed, get inspired, and grow with every post. Start reading
            now and unlock endless possibilities!
          </p>
        </div>
        <div className="ml-[30%] flex justify-center">
          <Image
            src="/bfl.png"
            alt="social-media"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>
      </section>

      <section className="w-full py-16 bg-white flex flex-col items-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1f2937] mb-4">
          Showcase Our Recent Blogs
        </h2>
        <p className="text-[#767676] max-w-3xl text-center text-sm sm:text-base mb-10">
          From Practical How-Tos To Powerful Success Stories, Our Blog Is Your
          Go-To Place For Valuable Content. We Bring You Fresh Perspectives,
          Expert Advice, And Ideas That Spark Inspiration. Join Our Community Of
          Curious Minds And Explore New Possibilities Today!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full p-3">
          {blogs?.map((blog, index) => (
            <div
              key={index}
              className="bg-white border border-[#FFFFFE] rounded-xl shadow-sm p-4 hover:shadow-md transition-all"
            >
              <div className="rounded-md overflow-hidden mb-4">
                <Link href={`/blog/${blog?._id}`}>
                  <Image
                    src={blog?.image}
                    alt={blog?.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover cursor-pointer"
                  />
                </Link>
              </div>
              <h3 className="font-semibold text-xl leading-relaxed text-gray-800 mb-2">
                {blog?.title}
              </h3>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 relative rounded-full overflow-hidden">
                  <Image
                    src="/bf.jpg"
                    alt="author"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <h4 className="font-medium text-black">Dasteen</h4>
                  <div className="flex gap-2 text-xs text-gray-500">
                    <span>• Jan 10, 2022</span>
                    <span>• 3 Min Read</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Feedback />
    </main>
  );
};

export default blog;
