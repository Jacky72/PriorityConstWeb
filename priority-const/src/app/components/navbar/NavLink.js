import Link from "next/link";
import React, { useState, useEffect } from 'react'

const NavLink = ({ href, title }) => {

    const [scrolled, setScrolled] = useState(false)
    const scrollVal = 450;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > scrollVal) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            console.log("Scroll Y:", window.scrollY, scrolled);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrolled]);

    return (
        <Link href={href} className={`block navbar-font py-2 pl-3 pr-4 font-sans sm:text-xl rounded md:p-0 hover:text-[#ac8c04] transition-colors duration-300 ${scrolled ? "bg-[#f8f4ec] text-[#ac8c04]" : "bg-[#141312] text-white"}`}>
            {title}
        </Link>
    );
};

export default NavLink;