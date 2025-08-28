"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const ContactPage = () => {

    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const info = {
            fullName: form.get("name")?.toString().trim(),
            email: form.get("email")?.toString().trim(),
            phone: form.get("number")?.toString().trim(),
            company: form.get("company")?.toString().trim(), 
            location: form.get("location")?.toString().trim(),
            message: form.get("message")?.toString().trim(),
        };

        if (!info.fullName || !info.email || !info.phone || !info.message) {
            setStatus("Please fill in all required fields.");
            return;
        }

        if (!/^\d+$/.test(info.phone)) {
            setStatus("Phone number must contain only digits.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email)) {
            setStatus("Please enter a valid email address.");
            return;
        }

        setSubmitting(true);
        setStatus("");

        console.log("Form submitted with info:", info);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(info),
            });
            console.log("API response status:", res.status);
            const result = await res.json();
            if (result.success) {
                setStatus("Your message has been sent successfully!");
            } else {
                setStatus("Failed to send message. Please try again later.");
            }
        } catch (err) {
            setStatus("Failed to send message. Please try again later. Err");
        }
        setSubmitting(false);
    }

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
                            <p className="text-xl mt-10 font-bold">Priority Construction Engineering Service</p> 
                            <p className="text-xl mt-10">We are ready to assist you with all your fabrication, machining, maintenance, and industrial engineering needs.</p> 
                            <p className="text-xl mt-10 font-bold">Call us today:   (+61) 452 069 866</p>
                            <p className="text-xl mt-10 font-bold">Email us:   shunda@priorityconst.com.au</p>
                            <p className="text-xl mt-10 font-bold">Or fill out our Contact Form below, and we will get back to you promptly.</p>

                        </div>
                    </div>
                    <div className="text-center text-black md:mt-15 px-8">
                        <h1 className="text-3xl font-extrabold">Contact Form</h1>
                        <form onSubmit={handleSubmit} noValidate className="border border-gray-300 rounded-lg p-6 mt-6 text-left">
                            <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Your Name *" />
                            <input type="email" id="email" name="email" required className="mt-5 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Your Email *" />
                            <input type="tel" id="number" name="number" pattern="^[\d\s()+\-]{6,}$" required className="mt-5 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Phone Number *" />
                            <input type="text" id="company" name="company" className="mt-5 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Company / Organization Name" />
                            <input type="text" id="location" name="location" className="mt-5 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Location / State" />
                            <textarea id="message" name="message" required className="mt-5 block w-full h-32 border border-gray-300 rounded-md shadow-sm p-2" placeholder="Your Message *" />
                            <button type="submit" disabled={submitting} className="mt-5 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
                                {submitting ? "Submitting..." : "Submit"}
                            </button>
                            {status && <p className="mt-4 text-center text-red-500">{status}</p>}
                        </form>
                    </div>
                    <div className="w-full h-px my-2"/>
                </div>
            </div>
        </section>
    )
}

export default ContactPage