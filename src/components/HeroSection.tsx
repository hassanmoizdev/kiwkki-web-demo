import { motion } from "framer-motion";
import { useState } from "react";
import appStoreImg from "@/assets/app-store.svg";
import playStoreImg from "@/assets/play-store.svg";
import iphoneMockup from "@/assets/iphone-mockup.svg";
import profileCard from "@/assets/profile-card-new.svg";
import completeJobCard from "@/assets/complete-job-card.svg";
import halfJobCard from "@/assets/half-job-card.svg";
import mapsPreview from "@/assets/maps-preview.svg";
import jobsNavbar from "@/assets/jobs-navbar.svg";
import heroBg from "@/assets/kwikkibackground.svg";

const PlaceholderImage = ({ className, alt }: { className?: string; alt: string }) => (
  <div className={`bg-white/20 rounded-2xl flex items-center justify-center ${className}`}>
    <span className="text-white/60 text-sm">{alt}</span>
  </div>
);

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
    return <PlaceholderImage className={className} alt={alt} />;
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

const HeroSection = () => {
  return (
    <section
      className="hero-gradient pt-24 pb-16 md:pb-0 relative overflow-hidden"
      style={{
        backgroundImage: `url('${heroBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto pt-8 md:pt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Kwikki
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-8">
            Find quick gigs near you — work made simple.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 md:mb-12">
            <motion.a
              href="#"
              className="hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ImageWithFallback src={appStoreImg} alt="Download on App Store" className="h-[50px]" />
            </motion.a>
            <motion.a
              href="#"
              className="hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ImageWithFallback src={playStoreImg} alt="Get it on Play Store" className="h-[50px]" />
            </motion.a>
          </div>
        </motion.div>

        {/* Phone Mockups and Cards Layout */}
        <div className="relative max-w-7xl mx-auto">
          <div className="flex justify-center items-start">

            {/* Left Column - Profile Card and Map */}
            <div className="hidden lg:flex flex-col gap-1 absolute left-0 bottom-0 z-0 items-center">
              <motion.div
                className="w-72 xl:w-96"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <ImageWithFallback
                  src={profileCard}
                  alt="Profile Card"
                  className="w-full drop-shadow-2xl"
                />
              </motion.div>
              <motion.div
                className="w-60 xl:w-80"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <ImageWithFallback
                  src={mapsPreview}
                  alt="Map Preview"
                  className="w-full drop-shadow-xl"
                />
              </motion.div>
            </div>

            {/* Center iPhone Mockup */}
            <motion.div
              className="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 z-10 relative"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <ImageWithFallback
                src={iphoneMockup}
                alt="Kwikki App"
                className="w-full drop-shadow-2xl"
              />
            </motion.div>

            {/* Right Column - Job Cards */}
            <div className="hidden lg:flex flex-col gap-3 absolute right-0 bottom-0 z-0 items-center">
              <motion.div
                className="w-72 xl:w-80"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <ImageWithFallback
                  src={completeJobCard}
                  alt="Job Card"
                  className="w-full drop-shadow-xl"
                />
              </motion.div>
              <motion.div
                className="w-72 xl:w-80"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <ImageWithFallback
                  src={jobsNavbar}
                  alt="Jobs Navigation"
                  className="w-full drop-shadow-xl"
                />
              </motion.div>
              <motion.div
                className="w-72 xl:w-80"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <ImageWithFallback
                  src={halfJobCard}
                  alt="Job Card Preview"
                  className="w-full drop-shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
