import { useEffect, useRef, useState } from "react";

export default function PortfolioSection() {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("all");

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

    if (portfolioRef.current) {
      const fadeElements = portfolioRef.current.querySelectorAll(".fade-in");
      fadeElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const portfolioItems = [
    {
      title: "HealthWhisper",
      subtitle: "AI-Powered Medical Assistant",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      categories: ["mobile", "ai"],
      tags: ["Mobile", "AI/ML"],
    },
    {
      title: "BinaryBox",
      subtitle: "Offline File-to-Binary Converter",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      categories: ["mobile"],
      tags: ["Mobile"],
    },
    {
      title: "NeuroSynk",
      subtitle: "Heart Health Monitoring",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      categories: ["mobile", "ai"],
      tags: ["Mobile", "AI/ML"],
    },
    {
      title: "Web Applications",
      subtitle: "Responsive Web Development",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      categories: ["web"],
      tags: ["Web"],
    },
    {
      title: "AI/ML Solutions",
      subtitle: "Machine Learning Applications",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      categories: ["ai"],
      tags: ["AI/ML"],
    },
    {
      title: "Flutter Apps",
      subtitle: "Cross-Platform Mobile Development",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      categories: ["mobile"],
      tags: ["Mobile"],
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "web", label: "Web Development" },
    { id: "ai", label: "AI/ML" },
  ];

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
  };

  const filteredItems = portfolioItems.filter((item) => {
    if (activeFilter === "all") return true;
    return item.categories.includes(activeFilter);
  });

  return (
    <section id="portfolio" ref={portfolioRef} className="py-16 bg-[var(--portfolio-dark)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 fade-in">Portfolio</h2>
          <p className="text-gray-400 text-lg fade-in">Featured projects and applications</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`filter-btn px-6 py-3 rounded-lg transition-all ${
                activeFilter === filter.id
                  ? "active"
                  : "bg-[var(--portfolio-light)] text-white hover:bg-[var(--portfolio-primary)]/20"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`portfolio-item bg-[var(--portfolio-light)] rounded-xl overflow-hidden transition-all duration-300 ${
                filteredItems.includes(item) ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.subtitle}</p>
                <div className="flex gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-[var(--portfolio-primary)]/20 text-[var(--portfolio-primary)] px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
