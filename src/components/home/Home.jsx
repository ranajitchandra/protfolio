import { useEffect, useState } from "react";
import Navbar from "../../shared/Navbar";
import Banner from "./Banner";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Educations";
import Contact from "./Contact";
import Team from "./Team";
import Footer from "../../shared/Footer";

export default function HomePage() {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show Navbar after scrolling past 100px (adjust as needed)
            if (window.scrollY > 100) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            {/* Conditionally show sticky navbar */}
            {showNavbar && (
                <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
                    <Navbar />
                </div>
            )}

            <Banner />
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Team></Team>
            <Contact></Contact>
            <Footer />
        </div>
    );
}
