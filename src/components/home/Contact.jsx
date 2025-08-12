import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-base-200 text-base-content px-6 md:px-16 lg:px-32">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-primary">Get In Touch</h2>
                <p className="text-base-content/70 mt-4">
                    Feel free to reach out for opportunities, collaborations, or just to say hello!
                </p>
            </div>

            {/* Contact Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-4">
                        <FaEnvelope className="text-xl text-primary" />
                        <span>ranajitchandradas3@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaMapMarkerAlt className="text-xl text-primary" />
                        <span>Dhaka, Bangladesh</span>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <a
                            href="https://github.com/ranajitchandra"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-primary hover:text-secondary transition"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/ranajit-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-primary hover:text-secondary transition"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    className="space-y-4"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        className="textarea textarea-bordered w-full h-32"
                        required
                    ></textarea>
                    <button className="btn bg-primary text-white hover:bg-secondary transition w-full">
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
