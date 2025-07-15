import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-[var(--portfolio-dark)]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    } border-b border-gray-800/20`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-text">Dhanush C</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "services", label: "Services" },
              { id: "education", label: "Education" },
              { id: "project-showcase", label: "Project Files" },
              { id: "skills", label: "Skills" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link text-gray-400 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1eAy7ZhYZSqRz3tL68l_1JvlAl1zOqSK9/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-gray-400 hover:text-white"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--portfolio-dark)] border-b border-gray-800/20">
            <div className="flex flex-col space-y-4 p-6">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "services", label: "Services" },
                { id: "education", label: "Education" },
                { id: "project-showcase", label: "Project Files" },
                { id: "skills", label: "Skills" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-400 hover:text-white text-left"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1eAy7ZhYZSqRz3tL68l_1JvlAl1zOqSK9/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
