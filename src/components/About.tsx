import { Code2, Smartphone, Zap } from "lucide-react";
import Skills from "./Skills";

const skills = [
  { name: "Flutter", progress: 90 },
  { name: "Dart", progress: 85 },
  { name: "Firebase", progress: 80 },
  { name: "UI/UX Design", progress: 75 },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              I'm a passionate Flutter developer with expertise in creating beautiful and functional mobile applications. With a strong foundation in mobile development and a keen eye for design, I transform complex problems into elegant solutions.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="text-primary text-2xl font-bold">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-primary text-2xl font-bold">20+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4">
                <div className="text-primary text-2xl font-bold">15+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary">{skill.progress}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div> */}
          <Skills />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Smartphone className="text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
            <p className="text-gray-600">
              Specialized in creating cross-platform mobile applications using Flutter.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Code2 className="text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-600">
              Writing maintainable, scalable, and efficient code following best practices.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Zap className="text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
            <p className="text-gray-600">
              Building high-performance applications with optimal user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;