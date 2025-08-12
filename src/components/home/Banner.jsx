import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import developerSkills from "../../assets/developer_skills.json";


export default function Banner() {
    return (
        <section
            id="home"
            className="bg-gray-100 min-h-screen flex items-center justify-center px-20"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Left Column */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h3 className="text-purple-600 mb-3 text-lg font-semibold">I'm</h3>
                        <h1 className="text-5xl font-bold mb-3">Ranajit</h1>

                        {/* Placeholder for typed text animation */}
                        <h2 className="text-2xl font-medium text-gray-800">
                            Full Stack Web Developer
                        </h2>

                        {/* Buttons */}
                        <div className="flex items-center justify-center lg:justify-start pt-8 gap-6">
                            <a
                                href="#"
                                className="bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition"
                            >
                                Download CV
                            </a>

                            <button
                                type="button"
                                className="flex items-center justify-center w-14 h-14 bg-purple-100 rounded-full hover:bg-purple-200 transition"
                            >
                                <FaPlay className="text-purple-600" />
                            </button>

                            <h5 className="ml-4 mb-0 hidden sm:block text-gray-800 font-medium">
                                Play Video
                            </h5>
                        </div>
                    </div>

                    {/* Right Column */}

                    <div className="lg:w-1/2 flex justify-center">
                        <motion.div
                            className="p-1 rounded-3xl border-2 border-orange-300 bg-purple-100 shadow-xl w-80"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{
                                borderColor: ["#fdba74", "#f472b6", "#60a5fa", "#fdba74"],
                            }}
                        >
                            <Lottie animationData={developerSkills} loop={true} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
