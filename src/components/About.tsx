
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Zap,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe Creative Suite, User Research",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Git, Agile, Team Leadership, Mentoring",
      color: "from-orange-400 to-red-400"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with 5+ years of experience building scalable web applications
            and beautiful user interfaces. I love turning complex problems into simple, elegant solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {skill.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                My Journey
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Started as a curious student learning HTML/CSS, I've evolved into a full-stack developer
                who thrives on creating meaningful digital experiences. My approach combines technical
                expertise with creative problem-solving.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or mentoring aspiring developers in my community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "5+", label: "Years Experience" },
                { number: "20+", label: "Happy Clients" },
                { number: "100%", label: "Satisfaction Rate" }
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
