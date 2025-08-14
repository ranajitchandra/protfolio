import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
            className="border-b border-gray-200 shadow-sm bg-white z-50 fixed top-0 w-full nav-pulse-wave"
        >
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center justify-center">
                {/* Left menu */}
                <ul className="flex space-x-8 px-6 py-3 text-lg font-medium text-black">
                    {menuLeft.map(({ name, href }) => (
                        <li key={name}>
                            <a
                                href={href}
                                onClick={() => handleClick(name)}
                                className={`relative hover:text-purple-600 transition duration-300 
                                after:content-[''] after:absolute after:left-0 after:-bottom-1 
                                after:w-full after:h-[2px] after:bg-purple-600 
                                after:scale-x-0 hover:after:scale-x-100 after:origin-left 
                                after:transition-transform after:duration-300 
                                ${activeLink === name ? "text-purple-600 font-semibold" : ""
                                    }`}
                            >
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Center brand */}
                <div className="flex flex-col justify-center items-center bg-yellow-400 px-10 mx-10 py-1 font-extrabold text-purple-700 text-2xl select-none">
                    <FaGraduationCap size={40} />
                    <span>Ranajit</span>
                </div>

                {/* Right menu */}
                <ul className="flex space-x-8 px-6 py-3 text-lg font-medium text-black">
                    {menuRight.map(({ name, href }) => (
                        <li key={name}>
                            <a
                                href={href}
                                onClick={() => handleClick(name)}
                                className={`relative hover:text-purple-600 transition duration-300 
                                after:content-[''] after:absolute after:left-0 after:-bottom-1 
                                after:w-full after:h-[2px] after:bg-purple-600 
                                after:scale-x-0 hover:after:scale-x-100 after:origin-left 
                                after:transition-transform after:duration-300 
                                ${activeLink === name ? "text-purple-600 font-semibold" : ""
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
                    <FaGraduationCap size={30} />
                    <span>Ranajit</span>
                </div>

                {/* Hamburger icon */}
                <motion.button
                    onClick={() => setMenuOpen(!menuOpen)}
                    whileTap={{ scale: 0.9 }}
                    className="text-3xl text-purple-700"
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </motion.button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white border-t border-gray-100 px-6 py-4"
                    >
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
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
