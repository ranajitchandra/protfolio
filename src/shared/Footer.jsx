import { FaHeart, FaReact } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-primary to-secondary text-base-100 px-6 md:px-16">
            <div className="max-w-7xl mx-auto py-6 flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2 text-lg font-semibold tracking-wide">
                    <FaReact className="text-sky-400 animate-spin-slow" />
                    <span>Built with React & Love</span>
                    <FaHeart className="text-red-500 animate-pulse" />
                </div>

                <div className="w-24 border-t border-base-100/30"></div>

                <div className="text-sm text-base-100/80 text-center">
                    © {new Date().getFullYear()} <span className="font-bold">Ranajit</span>. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
