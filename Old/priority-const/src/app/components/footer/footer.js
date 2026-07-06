import Link from "next/link";

const navLinks = [
    {
        title: "Home",
        path: "/",
        children: [
            { title: "About Us", path: "/#about" },
            { title: "Our History", path: "/#history" },
        ],
    },
    {
        title: "Past Project",
        path: "/project",
    },
    {
        title: "Contact",
        path: "/contact",
        children: [
            { title: "Contact Info", path: "/contact#contact-info" },
            { title: "Contact Form", path: "/contact#contact-form" },
        ],
    },
]

const Footer = () => (
  <footer className="bg-gradient-to-r bg-[#f7f4ee] text-black py-8 px-4">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <nav className="flex mb-6">
            <ul className="flex p-4 md:p-0 md:flex-row text-xl font-bold md:space-x-75 space-x-18">
                {navLinks.map((link) => (
                    <li key={link.title} className="relative group">
                        <Link href={link.path} className="underline-offset-4 hover:underline">
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
      </nav>
      <div className="border-t border-black w-full mt-4 pt-4 text-center text-sm">
        &copy; PriorityConstructionPTYLTD {new Date().getFullYear()}
      </div>
    </div>
  </footer>
);

export default Footer;