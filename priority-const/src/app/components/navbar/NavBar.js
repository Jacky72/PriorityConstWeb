"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import OpenMenu from "./OpenMenu"

const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
        title: "About Us",
        path: "/#about",
    },
    {
        title: "Our History",
        path: "/#history",
    },
    {
        title: "Project",
        path: "/project",
    },
    {
        title: "Contact",
        path: "/contact",
    },
]

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false)
    const [progress, setProgress] = useState(0);
    const scrollVal = 450;

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            const { scrollHeight, clientHeight } = document.documentElement;
            const total = Math.max(1, scrollHeight - clientHeight);
            setScrolled(y > scrollVal);
            setProgress((y / total) * 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    {/* This useEffect is to make sure that the Navbar is closed when we enlarge the webpage from small width to wide width */}
    useEffect(() => {
        {/* Small screen width = 768 Large screen width = 1080, 1600, 1800 ... Based on different resolution */}
        const handleResize = () => {
            {/* If detected that the screen width is larger than 768, hide the button and display the NavBar */}
            if (window.innerWidth >= 768) {
                setNavbarOpen(false);
            }
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className={`fixed navbar-font mx-auto top-0 left-0 right-0 z-10 min-h-60px max-h-65px border-2 border-black transition-colors duration-300 ${scrolled ? "bg-[#f8f4ec] text-[#ac8c04]" : "bg-[#141312] text-white"}`}> {/* Common NavBar Height = 60 to 100px bg-[#96affc]*/}
            <div className="flex flex-wrap items-center justify-between mx-auto lg:px-20 px-5 py-2">
                <Link href={"/"} className="flex items-center gap-3 md:gap-6"> 
                    <Image src="/Logo.png" alt="Priority Construction Logo" width={100} height={50} className="h-10 w-auto md:h-12 shrink-0"/> 
                    <span className="text-xl md:text-2xl font-semibold hover:text-[#ac8c04]"> Priority Construction </span>
                </Link>
                <div className="mobile-menu block md:hidden">  {/* Hide the NavBar for small screens */}
                {
                    !navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} className="flex item-center px-3 py-2 border-2 rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><Bars3Icon className="h-5 w-5"/></button>
                    ) : (
                    <button onClick={() => setNavbarOpen(false)} className="flex item-center px-3 py-2 border-2 rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><XMarkIcon className="h-5 w-5"/></button>
                    )
                }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-xl font-bold">
                        {navLinks.map(link => (
                            <Link href={link.path} key={link.title}>
                                {link.title}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <OpenMenu links={navLinks}/> : null}
        </nav>
    )
}

export default Navbar