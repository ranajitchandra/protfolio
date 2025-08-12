import {
    FaLaptopCode,
    FaServer,
    FaTools,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaReact,
    FaNodeJs,
    FaPhp,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiNextdotjs,
    SiExpress,
    SiDjango,
    SiPostman,
    SiFigma,
    SiCanva,
    SiAdobeillustrator,
    SiMysql,
    SiMongodb,
    SiSqlite,
} from "react-icons/si";

import { motion } from "framer-motion";

export default function Skills() {
    const skillData = [
        {
            title: "Frontend",
            icon: <FaLaptopCode className="text-4xl text-primary" />,
            skills: [
                { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
                { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
                { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
                { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
                { name: "React.js", icon: <FaReact className="text-sky-400" /> },
                { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
            ],
        },
        {
            title: "Backend",
            icon: <FaServer className="text-4xl text-primary" />,
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
                { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
                { name: "Django", icon: <SiDjango className="text-green-900" /> },
            ],
        },
        {
            title: "Databases",
            icon: <FaServer className="text-4xl text-primary" />,
            skills: [
                { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
                { name: "SQLite3", icon: <SiSqlite className="text-gray-700" /> },
            ],
        },
        {
            title: "Tools",
            icon: <FaTools className="text-4xl text-primary" />,
            skills: [
                { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
                { name: "GitHub", icon: <FaGithub className="text-black" /> },
                { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
                { name: "Figma", icon: <SiFigma className="text-pink-600" /> },
                { name: "Canva", icon: <SiCanva className="text-blue-400" /> },
                { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-600" /> },
            ],
        },
    ];

    return (
        <section
            id="skill"
            className="py-20 bg-base-200 text-base-content px-6 md:px-16 lg:px-32"
        >
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-primary">My Skills</h2>
                <p className="text-base-content/70 mt-4">
                    Technologies and tools I work with
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {skillData.map((card, index) => (
                    <motion.div
                        key={card.title}
                        className="bg-base-100 rounded-xl p-6 shadow-md border border-base-300 hover:shadow-xl transition"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col items-center mb-6">
                            {card.icon}
                            <h3 className="text-xl font-semibold text-secondary mt-2">
                                {card.title}
                            </h3>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {card.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex flex-col items-center text-sm text-center"
                                >
                                    <div className="text-3xl mb-1">{skill.icon}</div>
                                    <span className="text-xs text-base-content/70">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
