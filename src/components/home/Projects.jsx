import { FaReact, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "Study Collaboration",
            image: "https://i.ibb.co.com/LXfVdM3L/s.png", // Replace with real image URL
            description:
                "A full-stack task manager app with user auth, task tracking, and filtering features.",
            features: [
                "Real-time collaboration boards",
                "User authentication with JWT",
                "Task assignment and tracking"
            ],
            tech: [<FaReact className="text-sky-500" />, <SiExpress className="text-gray-700" />, <SiMongodb className="text-green-600" />],
            liveLink: "https://student-collab-react.web.app/",
            githubLink: "https://github.com/ranajitchandra/Study-Collaboration-Clint",
        },
        {
            title: "Garden World",
            image: "https://i.ibb.co.com/xt96WzyZ/g.png",
            description:
                "A blogging platform with markdown editor, category filtering and user dashboard.",
            features: [
                "Product filtering and search",
                "Cart & order history",
                "Admin dashboard with control panel"
            ],
            tech: [<FaReact className="text-sky-500" />, <SiExpress className="text-gray-700" />, <SiMongodb className="text-green-600" />],
            liveLink: "https://garden-world-react.web.app",
            githubLink: "https://github.com/",
        },
        {
            title: "Athletic Traning Sports",
            image: "https://i.ibb.co.com/Q7zqtKfJ/a.png",
            description:
                "An e-commerce store with product search, cart, checkout and admin panel.",
            features: [
                "Trainer and athlete roles",
                "Booking management system",
                "Interactive training dashboard"
            ],
            tech: [<FaReact className="text-sky-500" />, <SiExpress className="text-gray-700" />, <SiMongodb className="text-green-600" />],
            liveLink: "https://athletic-aim.web.app/",
            githubLink: "https://github.com/ranajitchandra/athletic_aim_client",
        },
    ];

    return (
        <section id="project" className="py-20 bg-base-100 text-base-content px-6 md:px-16 lg:px-32">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-primary">My Projects</h2>
                <p className="text-base-content/70 mt-4">
                    Explore some of the applications I've built
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        className="bg-base-200 rounded-xl overflow-hidden shadow-lg border border-base-300 hover:shadow-xl transition"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-secondary">{project.title}</h3>
                            <p className="text-sm text-base-content/70 mt-2">{project.description}</p>
                            {/* Key Features */}
                            <ul className="list-disc list-inside text-sm text-base-content/80 mt-3 space-y-1">
                                {project.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <div className="flex items-center gap-4 mt-4 flex-wrap">
                                {project.tech.map((icon, i) => (
                                    <span key={i} className="text-2xl">{icon}</span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-6">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-secondary transition text-xl"
                                    title="Live Site"
                                >
                                    <FiExternalLink />
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-secondary transition text-xl"
                                    title="GitHub Repository"
                                >
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
