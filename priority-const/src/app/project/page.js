"use client";
import React from 'react';
import Image from 'next/image';
import Footer from '../components/footer/footer';

const ProjectPage = () => {

    return (
        <section id="project" className="bg-white">
            <div className="w-full min-h-screen bg-[#f7f4ee]">
                <div className="relative min-h-[80px] md:min-h-[130px]"></div>
                <h1 className="text-center text-black text-3xl font-extrabold heading-font underline md:mb-8">Past Project</h1>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6">
                    <div className="grid grid-cols-12 gap-6 md:gap-8">
                        <div className="col-span-12 md:col-span-5">
                            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                                <Image
                                src="/projectImg/project1.1.jpg"
                                alt="Project left"
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 40vw, 100vw"
                                quality={85}
                                />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-7 grid gap-6">
                            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                                <Image
                                src="/projectImg/project1.2.jpg"
                                alt="Project top-right"
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 58vw, 100vw"
                                quality={85}
                                />
                            </div>
                            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                                <Image
                                src="/projectImg/project1.3.jpg"
                                alt="Project bottom-right"
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 58vw, 100vw"
                                quality={85}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-px bg-black my-8"/>
                    <div className="grid grid-cols-12 gap-6 md:gap-8">
                        <div className="col-span-12 md:col-span-4">
                            <div className="relative aspect-[1/1] rounded-xl overflow-hidden">
                                <Image
                                src="/projectImg/Project2.1.jpg"
                                alt="Project left"
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 100vw, 100vw"
                                quality={85}
                                />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <div className="relative aspect-[1/1] rounded-xl overflow-hidden">
                                <Image
                                src="/projectImg/Project2.2.jpg"
                                alt="Project top-right"
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 58vw, 100vw"
                                quality={85}
                                />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <div className="relative aspect-[1/1] rounded-xl overflow-hidden">
                                <Image
                                src="/projectImg/Project2.3.jpg"
                                alt="Project left"
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 40vw, 100vw"
                                quality={85}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-px bg-black my-8"/>
                    <div className="grid grid-cols-12 gap-6 md:gap-8">
                        <div className="col-span-12 md:col-span-6">
                            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                                <Image
                                src="/projectImg/Project3.1.jpg"
                                alt="Project left"
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 100vw, 100vw"
                                quality={85}
                                />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-3">
                            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                                <Image
                                src="/projectImg/Project3.2.jpg"
                                alt="Project top-right"
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 58vw, 100vw"
                                quality={85}
                                />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-3">
                            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                                <Image
                                src="/projectImg/Project3.3.jpg"
                                alt="Project left"
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 40vw, 100vw"
                                quality={85}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-px bg-black my-8" />
                    <h1 className="text-black text-2xl heading-font text-center font-bold">More Projects to be added!</h1>
                    <div className="w-full h-px my-2"/>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default ProjectPage