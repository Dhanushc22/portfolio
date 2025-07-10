import { useEffect, useRef } from "react";

export default function EducationSection() {
  const educationRef = useRef<HTMLDivElement>(null);

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

    if (educationRef.current) {
      const fadeElements = educationRef.current.querySelectorAll(".fade-in");
      fadeElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={educationRef} className="py-16 bg-[var(--portfolio-light)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 fade-in">Education</h2>
          <p className="text-gray-400 text-lg fade-in">My academic journey and achievements</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="timeline-item bg-[var(--portfolio-dark)] p-8 rounded-xl mb-8 fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-2xl font-semibold">Master of Computer Applications (MCA)</h3>
              <span className="text-[var(--portfolio-primary)] font-semibold">2024 — 2026 (Ongoing)</span>
            </div>
            <h4 className="text-xl text-gray-400 mb-2">Nitte Meenakshi Institute of Technology</h4>
            <p className="text-gray-400 mb-2">CGPA: 7.6</p>
            <p className="text-gray-400">
              Pursuing advanced studies in computer applications with focus on software engineering and modern development practices.
            </p>
          </div>

          <div className="timeline-item bg-[var(--portfolio-dark)] p-8 rounded-xl fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-2xl font-semibold">Bachelor of Computer Applications (BCA)</h3>
              <span className="text-[var(--portfolio-primary)] font-semibold">July 2024</span>
            </div>
            <h4 className="text-xl text-gray-400 mb-2">Sir MV Science College, Shivamogga</h4>
            <p className="text-gray-400 mb-2">CGPA: 7.8</p>
            <p className="text-gray-400">
              Completed undergraduate studies with strong foundation in computer science principles and programming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
