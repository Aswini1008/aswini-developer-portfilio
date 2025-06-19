
import { motion } from "framer-motion";
import { Code, Layers, Tool, Database } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "from-red-400 to-pink-400",
      skills: ["Java", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Frameworks",
      icon: Layers,
      color: "from-blue-400 to-cyan-400",
      skills: ["React.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Tools",
      icon: Tool,
      color: "from-green-400 to-emerald-400",
      skills: ["GitHub", "VS Code", "Netlify", "Vite"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-purple-400 to-pink-400",
      skills: ["Firebase", "MongoDB", "MySQL"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 shadow-xl shadow-purple-500/10 transition-all duration-300 h-full">
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, x: 5 }}
                      className="bg-gray-700/50 rounded-lg p-3 text-center text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Skills Animation */}
        <div className="relative mt-16 h-32">
          {["⚛️", "☕", "🎨", "⚡", "🔧", "🚀"].map((emoji, index) => (
            <motion.div
              key={index}
              className="absolute text-4xl"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                y: [-20, -100, -20],
                x: Math.sin(index * 60) * 100
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeInOut"
              }}
              style={{
                left: `${10 + index * 15}%`,
                top: "50%"
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
