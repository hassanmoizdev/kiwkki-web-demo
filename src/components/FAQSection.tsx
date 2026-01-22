import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import messageboxIcon from "../assets/messagebox.svg";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(1);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec malesuada nunc, id mattis dolor. Etiam cursus, risus quis tempor feugiat, ipsum neque scelerisque ante, vitae efficitur nunc nunc id arcu.",
        },
        {
            question: "Aenean nec malesuada nunc, id mattis dolor.",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec malesuada nunc, id mattis dolor. Etiam cursus, risus quis tempor feugiat, ipsum neque scelerisque ante, vitae efficitur nunc nunc id arcu.",
        },
        {
            question: "risus quis tempor feugiat, ipsum neque scelerisque ante, vitae efficitur.",
            answer: "Mauris iaculis libero nunc et laoreet rhoncus. Maecenas ut amet tempus nunc. Pharesan lacus iaculis, risus vulputate iaculis, magna auctor cursus urna.",
        },
        {
            question: "Aliquam erat volutpat. Praesent at urna ac libero dignissim ultrices.",
            answer: "Aliquam a varius ante. Donec vulputate porta. Vivamus vunculat vestibulum condimentum tempor. Aliquam vitae mi ne nisi semper mattis.",
        },
        {
            question: "Nunc ut sem ante. Quisque a turpis at elit feugiat porttitor.",
            answer: "Nullam scelerisque enim maurius diam vehicula cursus vel ex. Cras vehicula vehicula et tempor vitae eleifend. Morbi lobortis implie field has inter venenatis erat.",
        },
    ];

    return (
        <section className="py-24 bg-[#F6FBFF]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#007AFF] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">
                        FAQ’S
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-black">
                        Frequently asked questions
                    </h2>
                </div>

                {/* UPDATED LINE BELOW: 
                   Added 'gap-10' and 'justify-between' to create space and push the box right.
                */}
                <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-12 max-w-7xl mx-auto">

                    {/* LEFT COLUMN: FAQ ACCORDION */}
                    <div className="flex-1 w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-[#F6FBFF] border transition-colors duration-300 rounded-lg overflow-hidden ${openIndex === index ? "border-gray-200" : "border-gray-100"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className={`text-lg font-bold pr-8 ${openIndex === index ? "text-black" : "text-gray-900"}`}>
                                        {faq.question}
                                    </span>
                                    <span className="shrink-0 text-gray-400">
                                        {openIndex === index ? (
                                            <Minus className="w-6 h-6 text-black" />
                                        ) : (
                                            <Plus className="w-6 h-6" />
                                        )}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-gray-500 text-base leading-relaxed border-t border-transparent">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: CONTACT CARD */}
                    <div className="w-full lg:w-[400px] shrink-0">
                        <div className="bg-[#FFFFFF] rounded p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] text-center h-fit sticky top-8">
                            {/* Icon Container */}
                            <img src={messageboxIcon} alt="Message" className="w-16 h-16 mx-auto mb-6" />

                            <h3 className="text-xl font-bold text-black mb-4">
                                Do you have more questions?
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
                            </p>

                            <button className="w-full bg-[#007AFF] hover:bg-[#0066CC] text-white font-bold py-4 rounded transition-colors shadow-lg shadow-blue-500/20">
                                Shoot a Direct Mail
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQSection;
