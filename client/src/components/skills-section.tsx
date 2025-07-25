import { useEffect, useRef } from "react";

export default function SkillsSection() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Animate skill bars
            const skillBars = entry.target.querySelectorAll(".skill-fill");
            skillBars.forEach((bar: any) => {
              const targetWidth = bar.dataset.width;
              bar.style.width = "0%";
              setTimeout(() => {
                bar.style.width = targetWidth;
              }, 500);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Mobile Development (Flutter)", level: 85 },
    { name: "AI/ML Development", level: 75 },
    { name: "Web Technologies", level: 70 },
    { name: "Java Programming", level: 80 },
    { name: "Python Programming", level: 75 },
    { name: "Firebase & Cloud", level: 65 },
  ];

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-[var(--portfolio-light)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 fade-in">My Skills</h2>
          <p className="text-xl text-gray-400 fade-in">Technical expertise and proficiency levels</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-[var(--portfolio-dark)] p-6 rounded-2xl fade-in">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-[var(--portfolio-primary)] font-bold">{skill.level}%</span>
                </div>
                <div className="skill-bar bg-gray-600/30 rounded-full h-4">
                  <div
                    className="skill-fill bg-gradient-to-r from-[var(--portfolio-primary)] to-[var(--portfolio-secondary)] h-4 rounded-full shadow-lg"
                    data-width={`${skill.level}%`}
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
