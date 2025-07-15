import { useEffect, useRef } from "react";
import { Mail, Phone, Github } from "lucide-react";

export default function AboutSection() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (aboutRef.current) {
      const fadeElements = aboutRef.current.querySelectorAll(".fade-in");
      fadeElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-[var(--portfolio-light)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 fade-in">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto fade-in leading-relaxed">
            Passionate software engineer creating innovative solutions through clean code and cutting-edge technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center fade-in">
              <div className="bg-gradient-to-r from-[var(--portfolio-primary)] to-[var(--portfolio-secondary)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">dhanushc092@gmail.com</p>
            </div>
            <div className="text-center fade-in">
              <div className="bg-gradient-to-r from-[var(--portfolio-primary)] to-[var(--portfolio-secondary)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">(+91) 6362638287</p>
            </div>
            <div className="text-center fade-in">
              <div className="bg-gradient-to-r from-[var(--portfolio-primary)] to-[var(--portfolio-secondary)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <a
                href="https://github.com/Dhanushc22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--portfolio-primary)] transition-colors"
              >
                Dhanushc22
              </a>
            </div>
          </div>

          <div className="bg-[var(--portfolio-dark)] p-8 rounded-2xl fade-in">
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              I'm eager to contribute to innovative teams where I can merge creativity with clean, maintainable code to solve real-world problems and create seamless digital experiences. With expertise in mobile development, AI/ML, and full-stack solutions, I bring fresh perspectives to every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
