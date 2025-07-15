import { useEffect, useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      const fadeElements = heroRef.current.querySelectorAll(".fade-in");
      fadeElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--portfolio-dark)] via-[var(--portfolio-darker)] to-[var(--portfolio-dark)]"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl lg:text-8xl font-bold mb-6 fade-in">
            <span className="gradient-text">Dhanush C</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-400 mb-4 fade-in">
            Software Engineer & Mobile Developer
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto fade-in">
            Building innovative mobile apps and AI-powered solutions with Flutter, Java, and cutting-edge technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in">
            <button
              onClick={() => scrollToSection("project-showcase")}
              className="bg-gradient-to-r from-[var(--portfolio-primary)] to-[var(--portfolio-secondary)] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View My Projects
            </button>
            <a
              href="mailto:dhanushc092@gmail.com"
              className="border-2 border-[var(--portfolio-primary)] text-[var(--portfolio-primary)] hover:bg-[var(--portfolio-primary)] hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
