import { motion } from "framer-motion";

const ContactSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT: IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-3xl overflow-hidden h-full min-h-[500px]"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000"
                            alt="Business Meeting"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </motion.div>

                    {/* RIGHT: FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
                            Get In Touch
                        </h2>
                        <p className="text-gray-500 text-sm mb-10">
                            We'd Love to Hear from You
                        </p>

                        <form className="space-y-6">

                            {/* Row 1: Names */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-gray-600 block">First name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        placeholder="John"
                                        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-gray-600 block">Last name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        placeholder="Smith"
                                        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Email & Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-gray-600 block">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Example@gmail.com"
                                        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-gray-600 block">Phone No</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="456 7890123"
                                        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-gray-600 block">Message</label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    placeholder="Enter Your Message"
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-[#007AFF] hover:bg-[#0066CC] text-white font-semibold py-4 px-10 rounded-md transition-colors shadow-lg shadow-blue-500/20 w-full md:w-auto"
                            >
                                Submit Now
                            </button>

                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
