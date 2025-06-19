
import { motion } from "framer-motion";
import { Building, Code, Wifi } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Integral Coach Factory",
      role: "Electrical Engineering Intern",
      period: "2024",
      description: "Electrical wiring and circuit design",
      icon: Building,
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Test Yatra",
      role: "Java Developer Intern",
      period: "2024",
      description: "Java development and problem-solving",
      icon: Code,
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "BSNL",
      role: "Telecom Intern",
      period: "2023",
      description: "Telecom networking basics",
      icon: Wifi,
      color: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateZ: 1 }}
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 shadow-xl shadow-purple-500/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} mr-4`}>
                        <exp.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-purple-400 font-semibold">{exp.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-2">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
