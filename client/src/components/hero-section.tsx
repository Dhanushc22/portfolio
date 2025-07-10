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
      className="pt-20 pb-16 bg-gradient-to-br from-[var(--portfolio-dark)] via-[var(--portfolio-darker)] to-[var(--portfolio-dark)]"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 fade-in">
              Hello, I'm <span className="gradient-text">Dhanush C</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 fade-in">
              Aspiring software engineer with hands-on experience in full-stack web and mobile development, including building high-performance apps using Flutter. Skilled in crafting responsive UIs, developing scalable APIs, and delivering user-centric solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-in">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-[var(--portfolio-primary)] hover:bg-[var(--portfolio-primary)]/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View My Work
              </button>
              <a
                href="mailto:dhanushc092@gmail.com"
                className="border border-[var(--portfolio-primary)] text-[var(--portfolio-primary)] hover:bg-[var(--portfolio-primary)] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional developer workspace"
              className="rounded-2xl shadow-2xl w-full h-auto fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
