import NavLink from "../navbar/NavLink";

const Footer = () => (
  <footer className="bg-gradient-to-r bg-[#f7f4ee] text-black py-8 px-4">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <nav className="flex md:space-x-75 space-x-8 mb-6">
        <NavLink href="/about" title="About" />
        <NavLink href="/services" title="Services" />
        <NavLink href="/contact" title="Contact" />
      </nav>
      <div className="border-t border-black w-full mt-4 pt-4 text-center text-sm">
        &copy; PriorityConstructionPTYLTD {new Date().getFullYear()}
      </div>
    </div>
  </footer>
);

export default Footer;