import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="section-padding pt-32 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-up">
              Muhammad Nouman Khan
              <span className="block text-primary mt-2">Flutter Developer</span>
            </h1>
            <p className="text-lg text-gray-600 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Turning ideas into seamless mobile experiences with Flutter. Specialized in creating beautiful, user-friendly applications that make a difference.
            </p>
            <div className="flex gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button size="lg">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Download CV
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="aspect-square w-[70%] rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="/dp.jpg"
                alt="Muhammad Nouman Khan"
                className="w-full h-full object-cover  object-top"
              />
            </div>
            <div className="absolute -top-6 animate-bounce -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
              <p className="font-semibold">3+ Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;