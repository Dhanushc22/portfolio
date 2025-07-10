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
    <section id="services" ref={servicesRef} className="py-16 bg-[var(--portfolio-dark)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 fade-in">What I'm Doing</h2>
          <p className="text-gray-400 text-lg fade-in">
            Specialized in cutting-edge technologies and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-[var(--portfolio-light)] p-8 rounded-xl text-center fade-in"
            >
              <service.icon className="text-[var(--portfolio-primary)] text-4xl mb-4 mx-auto" size={48} />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
