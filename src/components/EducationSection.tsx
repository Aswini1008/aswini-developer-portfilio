
import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "Panimalar Engineering College",
      degree: "BE in Electronics and Communication Engineering",
      period: "2022 - 2026",
      description: "Pre-final year student with focus on emerging technologies",
      icon: GraduationCap,
      color: "from-purple-400 to-pink-400"
    },
    {
      institution: "Higher Secondary & Secondary Education",
      degree: "12th & 10th Grade",
      period: "2020 - 2022",
      description: "Strong foundation in mathematics and science",
      icon: School,
      color: "from-blue-400 to-cyan-400"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 relative bg-gray-900/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 shadow-xl shadow-purple-500/10 transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${edu.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <edu.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                    <p className="text-purple-400 font-semibold">{edu.degree}</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 font-medium">{edu.period}</p>
                <p className="text-gray-300 leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
