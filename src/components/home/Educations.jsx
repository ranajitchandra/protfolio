import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Education() {
    return (
        <section
            id="education"
            className="py-20 bg-base-200 text-base-content px-6 md:px-16 lg:px-32"
        >
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-primary">Education</h2>
                    <p className="text-base-content/70 mt-4">My academic background</p>
                </div>

                {/* Education Card */}
                <motion.div
                    className="bg-base-100 border border-primary/20 rounded-xl shadow-lg p-6 md:p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-4">
                        <FaGraduationCap className="text-3xl text-secondary" />
                        <div>
                            <h3 className="text-xl font-semibold text-secondary">
                                Diploma in Engineering – Computer Technology
                            </h3>
                            <p className="text-base-content/70 text-sm">
                                National Institute of Engineering and Technology (NIET), Dhaka
                            </p>
                        </div>
                    </div>

                    {/* Dates */}
                    <div className="flex items-center gap-3 text-sm text-base-content/70 mt-2">
                        <FaCalendarAlt />
                        <span>October 2019 — August 2024</span>
                    </div>

                    {/* Focus Highlights */}
                    <ul className="list-disc list-inside text-sm text-base-content/80 mt-4 space-y-1">
                        <li>
                            Focused on software development fundamentals, algorithms, and data
                            structures.
                        </li>
                        <li>
                            Built small-scale web projects to strengthen understanding of frontend
                            and backend technologies.
                        </li>
                        <li>
                            Learned to collaborate using GitHub and practiced debugging, testing,
                            and version control.
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
