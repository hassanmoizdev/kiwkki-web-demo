import { motion } from "framer-motion";
import { useState } from "react";

// Import actual images - will fallback to placeholder if not available
import phoneMockup from "@/assets/howitwork1.svg";
import mapPreview from "@/assets/howitwork2.svg";
import tabsComponent from "@/assets/howitwork3.svg";
import heroBg from "@/assets/Kwikki Landing Page.svg";

const PlaceholderImage = ({ className, alt }: { className?: string; alt: string }) => (
  <div className={`bg-primary/10 rounded-2xl flex items-center justify-center min-h-[300px] ${className}`}>
    <span className="text-muted-foreground text-sm">{alt}</span>
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

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Browse Gigs on the Map",
      description: "Explore available gigs in your area with our interactive map view. See real-time opportunities and job rates.",
      image: mapPreview,
      imageAlt: "Map View",
    },
    {
      number: "02",
      title: "Apply or hire instantly",
      description: "One-tap application process for workers to book gig directly. It's that simple.",
      image: phoneMockup,
      imageAlt: "Job Application",
    },
    {
      number: "03",
      title: "Get paid securely",
      description: "Payments processed via Stripe with escrow protection. Safe, secure, and instant.",
      image: tabsComponent,
      imageAlt: "Secure Payment",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 section-light">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Getting started with Kwikki is easy. Three simple steps to connect and get things done.
          </p>
        </motion.div>

        {steps.map((step, index) => (
          <div
            key={index}
            className="sticky top-28" // Fixed top-28 to fully cover previous steps
            style={{
              zIndex: index + 1
            }}
          >
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 bg-[hsl(var(--section-light))] pb-24 rounded-t-[3rem]" // Added rounded-t and border
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Image with Blue Background */}
              <motion.div
                className="w-full lg:w-1/2 flex"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div
                  className="relative w-full max-w-lg rounded-3xl overflow-hidden hero-gradient flex flex-col justify-end min-h-[400px]"
                  style={{
                    backgroundImage: `url('${heroBg}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="px-8 pt-8 md:px-12 md:pt-12 pb-0 w-full">
                    <ImageWithFallback
                      src={step.image}
                      alt={step.title}
                      className="relative w-full drop-shadow-2xl h-auto object-contain object-bottom block mx-auto"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="lg:pl-8"
                >
                  <div className="bg-[#007AFF] text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-blue-500/20">
                    {step.number}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;