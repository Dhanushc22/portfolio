import { useEffect, useRef } from "react";
import { Smartphone, Brain, Code, Laptop } from "lucide-react";

export default function ServicesSection() {
  const servicesRef = useRef<HTMLDivElement>(null);

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

    if (servicesRef.current) {
      const fadeElements = servicesRef.current.querySelectorAll(".fade-in");
      fadeElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Building high-performance mobile apps using Flutter and Android SDK with responsive UIs and scalable architecture.",
    },
    {
      icon: Brain,
      title: "AI/ML Development",
      description: "Implementing AI-powered solutions using TensorFlow, Scikit-learn, and OpenCV for intelligent applications.",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Creating responsive web applications using modern web technologies including HTML, CSS, and JavaScript.",
    },
    {
      icon: Laptop,
      title: "Programming",
      description: "Proficient in multiple programming languages including C, Java, and Python with strong problem-solving skills.",
    },
  ];

  return (
    <section id="services" ref={servicesRef} className="py-20 bg-[var(--portfolio-dark)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 fade-in">What I Do</h2>
          <p className="text-xl text-gray-400 fade-in">
            Specialized in cutting-edge technologies and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-[var(--portfolio-light)] p-8 rounded-2xl text-center fade-in hover:bg-[var(--portfolio-light)]/80 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-[var(--portfolio-primary)] to-[var(--portfolio-secondary)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
