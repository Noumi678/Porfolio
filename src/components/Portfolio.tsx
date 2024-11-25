import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "FemmeChic",
    description: "A fashion e-commerce mobile app built with Flutter and Firebase, featuring real-time inventory updates and secure payment processing.",
    techStack: ["Flutter", "Firebase", "Stripe"],
    githubLink: "https://github.com/username/femmechic",
    liveLink: "https://femmechic.app",
    image: "/placeholder.svg"
  },
  {
    title: "TaskMaster Pro",
    description: "A productivity app with task management, reminders, and team collaboration features.",
    techStack: ["Flutter", "Firebase", "Google Cloud"],
    githubLink: "https://github.com/username/taskmaster",
    liveLink: "https://taskmaster.app",
    image: "/placeholder.svg"
  },
  {
    title: "WeatherNow",
    description: "Real-time weather forecasting app with beautiful animations and accurate predictions.",
    techStack: ["Flutter", "OpenWeather API", "Bloc"],
    githubLink: "https://github.com/username/weathernow",
    liveLink: "https://weathernow.app",
    image: "/placeholder.svg"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-secondary/5">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <LinkIcon className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;