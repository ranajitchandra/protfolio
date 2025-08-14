import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
    {
        name: "Ranajit Chandra Das",
        role: "Founder & Developer",
        photo: "https://i.ibb.co/MDRC8dRp/image.png",
        linkedin: "https://linkedin.com/in/ranaji-dev",
        twitter: "https://twitter.com/",
        github: "https://github.com/ranajitchandra",
    },
    {
        name: "Sadia Rahman",
        role: "Frontend Designer",
        photo: "https://i.ibb.co.com/W4NW36kL/MBjbhtr7-QIizymp8-Ybg-E2w.webp",
        linkedin: "https://linkedin.com/in/",
        twitter: "https://twitter.com/",
        github: "https://github.com/",
    },
    {
        name: "Ismail Hossain",
        role: "Full Stack Developer",
        photo: "https://i.ibb.co.com/gMFs4fLG/df.jpg",
        linkedin: "https://linkedin.com/in",
        twitter: "https://twitter.com",
        github: "https://github.com/",
    },
];

export default function Team() {
    return (
        <section id="team" className="py-20 bg-base-100 px-6 md:px-16 lg:px-32">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-primary">Meet the Team</h2>
                <p className="text-base-content/70 mt-4">The talented people behind the projects</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {teamMembers.map(({ name, role, photo, linkedin, twitter, github }, i) => (
                    <motion.div
                        key={name}
                        className="bg-base-200 rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 8px 20px rgba(99, 102, 241, 0.4)", // soft purple glow
                        }}
                        transition={{ duration: 0.3, delay: i * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={photo}
                            alt={name}
                            className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-primary"
                        />
                        <h3 className="text-xl font-semibold text-secondary">{name}</h3>
                        <p className="text-secondary/80 mb-4">{role}</p>

                        <div className="flex space-x-6 text-primary text-2xl">
                            <motion.a
                                href={linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                whileHover={{ scale: 1.3, color: "#6366F1" }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <FaLinkedin />
                            </motion.a>
                            <motion.a
                                href={twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                whileHover={{ scale: 1.3, color: "#6366F1" }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <FaTwitter />
                            </motion.a>
                            <motion.a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                whileHover={{ scale: 1.3, color: "#6366F1" }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <FaGithub />
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
