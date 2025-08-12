import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
    {
        name: "Ranajit chandra Das",
        role: "Founder & Developer",
        photo: "https://i.ibb.co/MDRC8dRp/image.png", // Replace with your photo
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
                        className="bg-base-200 rounded-xl shadow-lg p-6 flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
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
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
