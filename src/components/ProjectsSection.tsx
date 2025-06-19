
import { motion } from "framer-motion";
import { ExternalLink, Github, Music, Code, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ISAI - Musical Web App",
      description: "A comprehensive music streaming platform built with React, Firebase, and Cloudinary for audio management. Features include playlist creation, user authentication, and real-time music streaming.",
      image: "🎵",
      technologies: ["React.js", "Firebase", "Cloudinary", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-pink-400 to-red-400"
    },
    {
      title: "Music Player Hackathon",
      description: "Collaborative hackathon project developed with team members Bhuvansri, Ajay, and Aravinth. Features modern UI, playlist management, and social sharing capabilities.",
      image: "🎧",
      technologies: ["React.js", "Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-blue-400 to-purple-400"
    },
    {
      title: "Portfolio Resume Builder",
      description: "Dynamic resume builder application allowing users to create professional resumes with multiple templates, real-time preview, and PDF export functionality.",
      image: "📄",
      technologies: ["React.js", "Tailwind CSS", "jsPDF", "Context API"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-green-400 to-blue-400"
    },
    {
      title: "Task Management System",
      description: "Full-stack task management application with user authentication, project collaboration, deadline tracking, and progress visualization.",
      image: "✅",
      technologies: ["React.js", "Express.js", "PostgreSQL", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-yellow-400 to-orange-400"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative bg-gray-900/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development and problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateZ: 1 }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-400/40 shadow-xl shadow-purple-500/10 transition-all duration-300 overflow-hidden h-full">
                {/* Project Header */}
                <div className={`p-8 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="text-6xl mb-4">{project.image}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  </div>
                  {/* Animated background elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
