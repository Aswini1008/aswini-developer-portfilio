
import { motion } from "framer-motion";
import { Code, Heart, Users, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Developer",
      description: "Passionate about creating beautiful user interfaces"
    },
    {
      icon: Heart,
      title: "IEEE Volunteer",
      description: "Active contributor to tech community initiatives"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Love collaborating on hackathons and group projects"
    },
    {
      icon: Zap,
      title: "Problem Solver",
      description: "Enjoy tackling real-world challenges with code"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-1 shadow-2xl shadow-purple-500/30">
                <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-9xl"
                  >
                    👩‍💻
                  </motion.div>
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-400/30 flex items-center justify-center"
              >
                <Code className="w-6 h-6 text-purple-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Pre-final Year ECE Student & 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Passionate Developer
              </span>
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a pre-final year Electronics and Communication Engineering student 
              with a deep passion for frontend development and Java programming. 
              My journey in tech began with curiosity and has evolved into a mission 
              to create impactful digital solutions.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              As an IEEE volunteer and active hackathon participant, I thrive in 
              collaborative environments where innovation meets problem-solving. 
              I'm constantly exploring new technologies and contributing to open-source 
              projects, always eager to learn and grow in this ever-evolving field.
            </p>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotateZ: 2 }}
                  className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-purple-400 mb-2" />
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
