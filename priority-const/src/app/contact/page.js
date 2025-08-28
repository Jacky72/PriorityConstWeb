"use client";
import React from 'react';
import Image from 'next/image';

const ContactPage = () => {

    return (
        <section id="contact" className="bg-white">
            <div className="w-full min-h-screen bg-[#f7f4ee]">
                <div className="relative min-h-[320px] md:min-h-[100px]"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6">
                    <div className="grid grid-cols-12 gap-6 md:gap-8">
                        <div className="col-span-12 md:col-span-6">
                            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                                <Image
                                src="/Contact.jpg"
                                alt="Project left"
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 40vw, 100vw"
                                quality={85}
                                />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 text-center text-black px-6">
                            <p className="text-4xl font-extrabold mt-8">Contact Us</p>
                            <p className="text-xl mt-10 font-bold">Questions & Estimates</p>
                            <p className="text-xl mt-10 text-gray-500">We would love to hear from you! Whether you have a question about our services, need a quote for your project, or just want to say hello, feel free to reach out to us.</p>
                            <p className="text-xl mt-10 font-bold">Priority Construction engineering service</p>
                            <form className="border border-gray-300 rounded-lg p-6 mt-6 text-left">
                                <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Your Name *" />
                                <input type="email" id="email" name="email" required className="mt-5 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Your Email *" />
                                <input type="number" id="number" name="number" required className="mt-5 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Phone Number *" />
                                <input type="text" id="company" name="company" className="mt-5 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Company / Organization Name" />
                                <input type="text" id="location" name="location" className="mt-5 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Location / State" />
                                <input type="text" id="message" name="message" required className="mt-5 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Your Message *" />
                            </form>
                        </div>
                    </div>
                    <div className="w-full h-px my-2"/>
                </div>
            </div>
        </section>
    )
}

export default ContactPage