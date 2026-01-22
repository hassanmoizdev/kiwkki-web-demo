import { motion } from "framer-motion";
import { useState } from "react";
import appStoreImg from "@/assets/app-store.svg";
import playStoreImg from "@/assets/play-store.svg";
import leftScreen from "@/assets/leftScreen.png";
import centerScreen from "@/assets/centerScreen.svg";
import rightScreen from "@/assets/RightScreen.png";

const ImageWithFallback = ({
    src,
    alt,
    className
}: {
    src: string;
    alt: string;
    className?: string;
}) => {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <div className={`bg-white/20 rounded-2xl flex items-center justify-center ${className}`}>
                <span className="text-white/60 text-sm">{alt}</span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={() => setHasError(true)}
        />
    );
};

const DownloadSection = () => {
    return (
        <section
            className="relative overflow-hidden pt-16 md:pt-24 pb-0"
            style={{
                backgroundImage: `url('/kwikkibackground.svg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-8">

                    {/* Left Content - Text and Buttons */}
                    <motion.div
                        className="flex-1 text-center lg:text-left max-w-lg self-center lg:pb-24"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Ready to get started?
                        </h2>
                        <p className="text-white/90 text-base md:text-lg mb-8">
                            Download Kwikki today and start earning or finding the help you need in minutes.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                            <motion.a
                                href="#"
                                className="hover:opacity-90 transition-opacity"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ImageWithFallback
                                    src={appStoreImg}
                                    alt="Download on App Store"
                                    className="h-[45px] md:h-[50px]"
                                />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="hover:opacity-90 transition-opacity"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ImageWithFallback
                                    src={playStoreImg}
                                    alt="Get it on Play Store"
                                    className="h-[45px] md:h-[50px]"
                                />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Content - Phone Mockups */}
                    <motion.div
                        className="flex-1 relative flex items-end justify-center w-full"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative w-full max-w-xl flex items-end justify-center px-4 md:px-0">

                            {/* Left Screen (Back) */}
                            <motion.div
                                className="w-[38%] md:w-[40%] z-0 -mr-16 md:-mr-24 mb-0"
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <ImageWithFallback
                                    src={leftScreen}
                                    alt="Kwikki Map View"
                                    className="w-full drop-shadow-2xl block"
                                />
                            </motion.div>

                            {/* Center Screen (Front & Main) */}
                            <motion.div
                                className="w-[38%] md:w-[40%] z-20 relative mb-0"
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <ImageWithFallback
                                    src={centerScreen}
                                    alt="Kwikki Profile"
                                    className="w-full drop-shadow-2xl block"
                                />
                            </motion.div>

                            {/* Right Screen (Back) */}
                            <motion.div
                                className="w-[38%] md:w-[40%] z-10 -ml-16 md:-ml-24 mb-0"
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <ImageWithFallback
                                    src={rightScreen}
                                    alt="Kwikki Jobs"
                                    className="w-full drop-shadow-2xl block"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default DownloadSection;