import Link from "next/link";

const NavLink = ({ href, title }) => {

    return (
        <Link href={href} className={`block navbar-font py-2 pl-3 pr-4 font-sans sm:text-xl rounded md:p-0`}>
            {title}
        </Link>
    );
};

export default NavLink;