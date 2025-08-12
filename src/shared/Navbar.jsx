import { useState } from "react";

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("Home");

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
    };

    return (
        <nav className="flex items-center justify-center border-b border-gray-200 shadow-sm">
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
            <div className="bg-yellow-400 px-8 mx-10 py-3 font-extrabold text-purple-700 text-2xl select-none">
                Ranajit
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
        </nav>
    );
}
