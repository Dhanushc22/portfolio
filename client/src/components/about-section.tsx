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
    <section id="about" ref={aboutRef} className="py-16 bg-[var(--portfolio-light)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 fade-in">About Me</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto fade-in">
            Eager to contribute to innovative teams where I can merge creativity with clean, maintainable code to solve real-world problems and create seamless digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern web development setup"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>

          <div className="fade-in">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-[var(--portfolio-primary)] text-xl" size={20} />
                <span>dhanushc092@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[var(--portfolio-primary)] text-xl" size={20} />
                <span>(+91) 6362638287</span>
              </div>
              <div className="flex items-center gap-4">
                <Github className="text-[var(--portfolio-primary)] text-xl" size={20} />
                <a
                  href="https://github.com/Dhanushc22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--portfolio-primary)] transition-colors"
                >
                  Dhanushc22
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
