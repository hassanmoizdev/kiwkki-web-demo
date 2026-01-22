import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section className="pt-24 pb-0 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-end gap-10 lg:gap-0">

                    <div className="w-full lg:w-[60%] text-left pb-20 z-10 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
                                OVERVIEW
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                About Kwikki
                            </h2>
                            <p className="text-gray-600 text-lg mb-12 max-w-xl leading-relaxed">
                                Kwikki is Sweden's premier gig marketplace, connecting clients with skilled workers for quick, local jobs. Whether you need help with a task or you're looking to earn extra income, Kwikki makes it simple, secure, and fast.
                            </p>
                        </motion.div>

                        {/* CARDS GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}

                                    className="p-8 bg-white border border-gray-300 rounded-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start h-full group"
                                >
                                    {/* Icon Container */}
                                    <div className="w-14 h-14 mb-6 flex items-center justify-center bg-blue-50 text-primary rounded-full shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <img
                                            src={feature.icon}
                                            alt={feature.title}
                                            className="w-7 h-7 object-contain"
                                        />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: Image */}
                    <div className="w-full lg:w-[40%] relative flex justify-end">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-0 w-full flex justify-end lg:-mr-24 xl:-mr-40"
                        >
                            <img
                                src="/src/assets/aboutsectionpic.svg"
                                alt="Kwikki App"
                                className="w-full md:w-[110%] lg:w-[150%] max-w-none h-auto object-contain block origin-bottom-right"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const features = [
    {
        icon: "/src/assets/about-icon.svg",
        title: "Post gigs Fast",
        description:
            "Create and publish job listings in seconds with our intuitive interface.",
    },
    {
        icon: "/src/assets/about-icon2.svg",
        title: "Hire verified workers",
        description:
            "Connect with trusted, verified professionals in your local area.",
    },
    {
        icon: "/src/assets/about-icon3.svg",
        title: "Track jobs easily",
        description:
            "Monitor your gigs in real-time with our simple tracking system.",
    },
];

export default AboutSection;