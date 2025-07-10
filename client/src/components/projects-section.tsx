import { useEffect, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projectsRef = useRef<HTMLDivElement>(null);

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

    if (projectsRef.current) {
      const fadeElements = projectsRef.current.querySelectorAll(".fade-in");
      fadeElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "HealthWhisper",
      subtitle: "AI-Powered Medical Assistant",
      description: "Smart mobile healthcare assistant with X-ray scanner, voice symptom consultation, blood report decoder, and tablet analyzer. Built with clean UI for all age groups.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Android Studio", "Java", "OpenAI GPT", "Firebase"],
      github: "https://github.com/Dhanushc22/HealthWhisper-",
    },
    {
      title: "BinaryBox",
      subtitle: "Offline File-to-Binary Converter",
      description: "Privacy-focused Android app for secure file conversion to binary strings with offline processing, theme customization, and lightweight architecture.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Android Studio", "Java", "XML", "Android SDK"],
      github: "https://github.com/Dhanushc22/BinaryBox",
    },
    {
      title: "NeuroSynk",
      subtitle: "Smartwatch-Powered Heart Health Monitoring",
      description: "Cross-platform health monitoring app with BLE smartwatch integration, real-time ECG analysis, heart attack detection, and data visualization.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Flutter", "Dart", "Node.js", "MongoDB"],
      github: "https://github.com/Dhanushc22/NeuroSynk",
    },
  ];

  return (
    <section id="projects" ref={projectsRef} className="py-16 bg-[var(--portfolio-dark)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 fade-in">Featured Projects</h2>
          <p className="text-gray-400 text-lg fade-in">
            Showcase of my technical expertise and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-[var(--portfolio-light)] p-8 rounded-xl fade-in"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />

              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.subtitle}</p>
              <p className="text-sm text-gray-400 mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-[var(--portfolio-primary)]/20 text-[var(--portfolio-primary)] px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--portfolio-primary)] hover:underline font-semibold flex items-center gap-2"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
