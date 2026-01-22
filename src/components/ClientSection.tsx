import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clientImg from "@/assets/client.jpg";

const ClientSection = () => {
  const [activeTab, setActiveTab] = useState<"client" | "worker">("client");

  const content = {
    client: {
      title: "For Client",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec malesuada nunc, id mattis dolor. Etiam cursus, risus quis tempor feugiat, ipsum neque scelerisque ante, vitae efficitur nunc nunc id arcu.",
        "Maecenas ultrices magna vel augue lobortis lacinia. Maecenas sit amet vulputate erat. Aliquam erat volutpat. Praesent at urna ac libero dignissim ultrices. Vivamus suscipit condimentum aliquam. Aliquam facilisis vitae nisl non tincidunt.",
        "Sed convallis pharetra leo, et molestie magna malesuada a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ullamcorper felis nec nibh dictum elementum. Sed a rutrum nunc. Quisque felis est, scelerisque nec leo ut, mattis rhoncus dui. Nunc ut sem ante. Quisque a turpis at elit feugiat porttitor."
      ],
      image: clientImg
    },
    worker: {
      title: "For Worker",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec malesuada nunc, id mattis dolor. Etiam cursus, risus quis tempor feugiat, ipsum neque scelerisque ante, vitae efficitur nunc nunc id arcu.",
        "Maecenas ultrices magna vel augue lobortis lacinia. Maecenas sit amet vulputate erat. Aliquam erat volutpat. Praesent at urna ac libero dignissim ultrices. Vivamus suscipit condimentum tempor. Aliquam vitae mi ne nisi semper mattis.",
        "Nullam scelerisque enim maurius diam vehicula cursus vel ex. Cras vehicula vehicula et tempor vitae eleifend. Morbi lobortis implie field has inter venenatis erat. Proin volutpat ex. Nunc lacinia rutrum vehickly non lacus ut tellus consectetur in mi nec est vivenda sit amet et fringus portittor."
      ],
      image: clientImg
    }
  };

  const activeContent = content[activeTab];

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">

        {/* TOP HEADER & TABS */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-black mb-10"
          >
            Heading Goes Here
          </motion.h2>

          {/* CUSTOM TABS CONTAINER - Exact match to image_b05471.png */}
          <div className="inline-flex items-center bg-[#F4F9FF] p-2 rounded-[5px]">

            {/* Tab 1: For Client */}
            <button
              onClick={() => setActiveTab("client")}
              className={`px-10 py-3 rounded-md text-base font-semibold transition-all duration-300 min-w-[180px] ${activeTab === "client"
                  ? "bg-[#007AFF] text-white shadow-sm" // Active: Blue Background, White Text
                  : "bg-transparent text-[#007AFF] hover:bg-blue-50" // Inactive: Transparent, Blue Text
                }`}
            >
              For Client
            </button>

            {/* Tab 2: For Worker */}
            <button
              onClick={() => setActiveTab("worker")}
              className={`px-10 py-3 rounded-md text-base font-semibold transition-all duration-300 min-w-[180px] ${activeTab === "worker"
                  ? "bg-[#007AFF] text-white shadow-sm"
                  : "bg-transparent text-[#007AFF] hover:bg-blue-50"
                }`}
            >
              For Worker
            </button>

          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT: IMAGE */}
          <motion.div
            key={`img-${activeTab}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden h-full max-h-[600px]"
          >
            <img
              src={activeContent.image}
              alt={activeContent.title}
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>

          {/* RIGHT: TEXT CONTENT */}
          <div className="flex flex-col justify-start pt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-4xl font-bold text-black mb-8">
                  {activeContent.title}
                </h3>

                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  {activeContent.paragraphs.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientSection;