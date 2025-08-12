import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <section
            id="about"
            className="py-20 bg-base-100 text-base-content px-6 md:px-16 lg:px-32"
        >
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Left Column – Image */}
                <motion.div
                    className="w-full lg:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="https://i.ibb.co/MDRC8dRp/image.png"
                        alt="Profile"
                        className="w-72 md:w-75 lg:w-80 rounded-xl shadow-lg object-cover border-4 border-primary"
                    />
                </motion.div>

                {/* Right Column – Text Content */}
                <motion.div
                    className="w-full lg:w-1/2 text-center lg:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-6 text-primary">About Me</h2>

                    <p className="text-lg leading-8 text-base-content/80 mb-4">
                        Hello! I'm a passionate and creative front-end and backend web developer, currently starting my professional journey.
                        As a fresher, I spend most of my time experimenting with new ideas, designing intuitive interfaces, and building web experiences that bring concepts to life.
                    </p>

                    <p className="text-md text-base-content/70">
                        My portfolio reflects a mindset focused on innovation and the belief that great ideas start with curiosity and exploration.
                        I aim to grow by learning continuously and contributing to impactful projects—turning ideas into web applications clean, responsive, and user-friendly designs.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
