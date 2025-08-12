import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    const menuLeft = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skill" },
    ];
    const menuRight = [
        { name: "Projects", href: "#project" },
        { name: "Team", href: "#team" },
        { name: "Contact", href: "#contact" },
    ];

    const handleClick = (name) => {
        setActiveLink(name);
        setMenuOpen(false); // Close mobile menu after click
    };

    return (
        <nav className="border-b border-gray-200 shadow-sm bg-white z-50 fixed top-0 w-full">
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center justify-center">
                {/* Left menu */}
                <ul className="flex space-x-8 px-6 py-3 text-lg font-medium text-black">
                    {menuLeft.map(({ name, href }) => (
                        <li key={name}>
                            <a
                                href={href}
                                onClick={() => handleClick(name)}
                                className={`hover:text-purple-600 ${activeLink === name ? "text-purple-600 font-semibold" : ""
                                    }`}
                            >
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Center brand */}
                <div className="flex flex-col justify-center items-center bg-yellow-400 px-10 mx-10 py-1 font-extrabold text-purple-700 text-2xl select-none">
                    <FaGraduationCap size={40}></FaGraduationCap>
                    <span>Ranajit</span>
                </div>

                {/* Right menu */}
                <ul className="flex space-x-8 px-6 py-3 text-lg font-medium text-black">
                    {menuRight.map(({ name, href }) => (
                        <li key={name}>
                            <a
                                href={href}
                                onClick={() => handleClick(name)}
                                className={`hover:text-purple-600 ${activeLink === name ? "text-purple-600 font-semibold" : ""
                                    }`}
                            >
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile/Tablet Nav */}
            <div className="flex lg:hidden items-center justify-between px-4 py-3">
                {/* Logo */}
                <div className="flex gap-2 justify-center items-center rounded-ee-4xl rounded-ss-4xl bg-yellow-400 px-6 py-2 font-extrabold text-purple-700 text-xl">
                    <FaGraduationCap size={30}></FaGraduationCap>
                    <span>Ranajit</span>
                </div>

                {/* Hamburger icon */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-3xl text-purple-700"
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4">
                    <ul className="flex flex-col gap-4 text-black font-medium">
                        {[...menuLeft, ...menuRight].map(({ name, href }) => (
                            <li key={name}>
                                <a
                                    href={href}
                                    onClick={() => handleClick(name)}
                                    className={`block hover:text-purple-600 ${activeLink === name ? "text-purple-600 font-semibold" : ""
                                        }`}
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
