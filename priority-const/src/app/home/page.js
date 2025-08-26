"use client";
import React from 'react';
import Carousel from "@/app/components/carousel/Carousel";
import Achievement from '../components/achievement/achievement';
import Link from 'next/link';

const HomePage = () => {

    return (
        <section className="bg-white">
            <div className="relative min-h-[320px] md:min-h-[450px] bg-[url('/Logo1.png')] bg-no-repeat bg-contain bg-[#141312] bg-center grid place-items-center">
                <div className="text-white text-center px-4">
                    <h1 className="heading-font text-3xl md:text-7xl font-extrabold italic underline underline-offset-5 decoration-[#887454]">Home</h1>
                </div>
            </div>
            <Achievement />
            <div className="w-full h-[115px] bg-white grid text-center place-items-center" id="about">
                <h1 className="text-black text-4xl font-bold">ABOUT US</h1>
            </div>
            <div className="w-full h-[620px] md:h-[400px] sm:h-[310px] bg-[#f7f4ee] grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-6 place-self-center sm:text-left"> 
                    <h1 className="mb-4 text-xl sm:text-xl lg:text-2xl lg:leading-normal font-bold text-center py-3"> 
                        <span className="text-black bg-clip-text"> 
                            Our Service
                        </span>
                    </h1>
                    <p className=" text-[#454544] text-lg mb-5 lg:leading-8.5 px-15">
                        Priority Construction is a leading provider of integrated fabrication, welding, mining construction, shutdown services, 
                        and project delivery solutions in Australia. With our extensive expertise and strategic locations across the country, 
                        we cater to the needs of clients in various industries.
                    </p>
                </div>
                <div className="col-span-6 place-self-center sm:text-left"> 
                    <h1 className="mb-4 text-xl sm:text-xl lg:text-2xl lg:leading-normal font-bold text-center py-3"> 
                        <span className="text-black bg-clip-text"> 
                            Our Mission
                        </span>
                    </h1>
                    <p className=" text-[#454544] text-lg mb-5 lg:leading-8.5 px-15">
                        At Priority Construction, our mission is to deliver positive outcomes for clients in the mining, industrial, telecommunications, and energy markets. 
                        We achieve this by offering a comprehensive range of capabilities and a fully integrated delivery model.
                    </p>
                </div>
            </div>
            <div className="w-full h-[115px] bg-white grid text-center place-items-center" id="history">
                <h1 className="text-black text-4xl font-bold">OUR HISTORY</h1>
            </div>
            <div className="w-full h-[700px] md:h-[450px] sm:h-[350px] bg-[#f7f4ee] grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-6 place-self-center sm:text-left"> 
                    <h1 className="mb-4 text-xl sm:text-xl lg:text-2xl lg:leading-normal font-bold text-center py-3"> 
                        <span className="text-black bg-clip-text"> 
                            Latest Project
                        </span>
                    </h1>
                    <p className=" text-[#454544] text-lg mb-5 lg:leading-8.5 px-15">
                        Priority Construction was founded in 2021, starting our journey a small crew of Boilermaker and Welding service supply in the Pilbara. 
                        Currently, Priority Construction has over 30 personnel. And service the Company such as BHP, Rio tinto, FMG and Water Corporation.
                    </p>
                </div>
                <div className="col-span-6 place-self-center sm:text-left"> 
                    <h1 className="mb-4 text-xl sm:text-xl lg:text-2xl lg:leading-normal font-bold text-center py-3"> 
                        <span className="text-black bg-clip-text"> 
                            Our Goal
                        </span>
                    </h1>
                    <p className=" text-[#454544] text-lg mb-5 lg:leading-8.5 px-15">
                        As a privately owned business, Priority Construction upholds a set of core values that have contributed to our continual growth and success. 
                        People, Unity, Agility, Determination, and Delivery form the pillars of our operations, guiding our decision-making and shaping our company culture. 
                        These values define who we are and how we operate, ensuring that we prioritize our employees, foster collabora
                    </p>
                </div>
            </div>
            <div className="w-full h-px  my-7" />
            <div className="w-full h-[1200px] sm:h-[700px] bg-white text-center grid grid-cols-1 sm:grid-cols-12 px-20">
                <div className="col-span-6 place-items-center">
                    <Carousel />
                </div>
                <div className="grid-span-1"></div>
                <div className="col-span-5 place-items-center text-black grid items-start">
                    <h1 className="mt-10 text-3xl text-center">Priority Construction Service focus on Top Boilermaker Welder supply</h1>
                    <span className="text-xl">Be Safe, Be Satisfied!</span>
                    <Link href={"/contact"} className="text-xl px-3 border-2 py-2 rounded-2xl">Contact Us</Link>
                </div>
            </div>
        </section>
    )
}

export default HomePage