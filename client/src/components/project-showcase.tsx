import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, Code, FileText, Settings, Download } from "lucide-react";

export default function ProjectShowcase() {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState("HealthWhisper");

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

    if (showcaseRef.current) {
      const fadeElements = showcaseRef.current.querySelectorAll(".fade-in");
      fadeElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const projects = {
    HealthWhisper: {
      title: "HealthWhisper",
      subtitle: "AI-Powered Medical Assistant",
      description: "Smart mobile healthcare assistant with X-ray scanner, voice symptom consultation, blood report decoder, and tablet analyzer.",
      technologies: ["Android Studio", "Java", "OpenAI GPT", "Firebase", "Google Vision API"],
      features: [
        "🩺 X-ray Scanner with AI analysis",
        "🎤 Voice symptom consultation",
        "📊 Blood report decoder",
        "💊 Tablet analyzer with OCR",
        "🔒 HIPAA-compliant data handling"
      ],
      architecture: {
        frontend: ["Android Studio", "Java", "XML Layouts"],
        backend: ["Firebase", "AWS"],
        ai: ["OpenAI GPT", "Google Vision API", "Whisper"]
      },
      files: [
        { name: "MainActivity.java", type: "source", description: "Main application entry point" },
        { name: "XrayAnalysisActivity.java", type: "source", description: "X-ray analysis functionality" },
        { name: "AIService.java", type: "source", description: "AI integration service" },
        { name: "firebase-config.json", type: "config", description: "Firebase configuration" }
      ]
    },
    BinaryBox: {
      title: "BinaryBox",
      subtitle: "Offline File-to-Binary Converter",
      description: "Privacy-focused Android app for secure file conversion with offline processing and theme customization.",
      technologies: ["Android Studio", "Java", "XML", "Android SDK"],
      features: [
        "🔄 Two-way file conversion",
        "🔒 100% offline processing",
        "🎨 Multiple theme options",
        "⚡ Lightweight & optimized",
        "🛡️ Privacy-centric design"
      ],
      architecture: {
        frontend: ["Android Studio", "Java", "XML"],
        backend: ["Local Processing"],
        security: ["Offline Mode", "Secure Memory"]
      },
      files: [
        { name: "FileConverter.java", type: "source", description: "Core conversion logic" },
        { name: "BinaryProcessor.java", type: "source", description: "Binary processing service" },
        { name: "ThemeManager.java", type: "source", description: "Theme management system" },
        { name: "app-config.xml", type: "config", description: "Application configuration" }
      ]
    },
    NeuroSynk: {
      title: "NeuroSynk",
      subtitle: "Smartwatch-Powered Heart Health Monitoring",
      description: "Cross-platform health monitoring app with BLE integration, real-time ECG analysis, and emergency alerts.",
      technologies: ["Flutter", "Dart", "Node.js", "MongoDB", "BLE"],
      features: [
        "💓 ECG-like PPG analysis",
        "📊 Real-time monitoring",
        "🚨 Heart attack detection",
        "📱 BLE smartwatch integration",
        "📈 Data visualization"
      ],
      architecture: {
        frontend: ["Flutter", "Dart", "Provider"],
        backend: ["Node.js", "Express", "MongoDB"],
        connectivity: ["BLE", "Socket.IO", "WebSocket"]
      },
      files: [
        { name: "health_service.dart", type: "source", description: "Core health monitoring service" },
        { name: "ble_service.dart", type: "source", description: "Bluetooth Low Energy integration" },
        { name: "ppg_analyzer.dart", type: "source", description: "PPG signal analysis" },
        { name: "pubspec.yaml", type: "config", description: "Flutter dependencies" }
      ]
    }
  };

  const currentProject = projects[selectedProject as keyof typeof projects];

  const getFileIcon = (type: string) => {
    switch (type) {
      case "source": return <Code className="text-green-400" size={16} />;
      case "config": return <Settings className="text-blue-400" size={16} />;
      default: return <FileText className="text-gray-400" size={16} />;
    }
  };

  return (
    <section id="project-showcase" ref={showcaseRef} className="py-16 bg-[var(--portfolio-light)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 fade-in">Project Files & Documentation</h2>
          <p className="text-gray-400 text-lg fade-in">
            Comprehensive project structure and source code
          </p>
        </div>

        {/* Project Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in">
          {Object.keys(projects).map((projectKey) => (
            <button
              key={projectKey}
              onClick={() => setSelectedProject(projectKey)}
              className={`px-6 py-3 rounded-lg transition-all ${
                selectedProject === projectKey
                  ? "bg-[var(--portfolio-primary)] text-white"
                  : "bg-[var(--portfolio-dark)] text-gray-400 hover:text-white"
              }`}
            >
              {projects[projectKey as keyof typeof projects].title}
            </button>
          ))}
        </div>

        {/* Project Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Project Overview */}
          <div className="fade-in">
            <div className="bg-[var(--portfolio-dark)] p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>
              <p className="text-[var(--portfolio-primary)] mb-4">{currentProject.subtitle}</p>
              <p className="text-gray-400 mb-6">{currentProject.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {currentProject.features.map((feature, index) => (
                    <li key={index} className="text-gray-400 text-sm">{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[var(--portfolio-primary)]/20 text-[var(--portfolio-primary)] px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture Overview */}
          <div className="fade-in">
            <div className="bg-[var(--portfolio-dark)] p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-6">Architecture Overview</h4>
              
              {Object.entries(currentProject.architecture).map(([layer, technologies]) => (
                <div key={layer} className="mb-4">
                  <h5 className="text-[var(--portfolio-primary)] font-medium mb-2 capitalize">
                    {layer}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <a
                  href={`https://github.com/Dhanushc22/${currentProject.title.replace(/\s+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--portfolio-primary)] hover:underline"
                >
                  <Github size={16} />
                  View Repository
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Files */}
        <div className="fade-in">
          <div className="bg-[var(--portfolio-dark)] p-8 rounded-xl">
            <h4 className="text-xl font-semibold mb-6">Project Files</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              {currentProject.files.map((file, index) => (
                <div
                  key={index}
                  className="bg-[var(--portfolio-light)] p-6 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    {getFileIcon(file.type)}
                    <div className="flex-1">
                      <h5 className="font-medium mb-1">{file.name}</h5>
                      <p className="text-gray-400 text-sm mb-3">{file.description}</p>
                      <div className="flex items-center gap-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          file.type === 'source' 
                            ? 'bg-green-400/20 text-green-400'
                            : 'bg-blue-400/20 text-blue-400'
                        }`}>
                          {file.type}
                        </span>
                        <button className="text-[var(--portfolio-primary)] hover:underline text-sm">
                          View Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Development Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 fade-in">
          <div className="bg-[var(--portfolio-dark)] p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-[var(--portfolio-primary)] mb-2">3</div>
            <div className="text-gray-400">Major Projects</div>
          </div>
          <div className="bg-[var(--portfolio-dark)] p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-[var(--portfolio-primary)] mb-2">15+</div>
            <div className="text-gray-400">Technologies Used</div>
          </div>
          <div className="bg-[var(--portfolio-dark)] p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-[var(--portfolio-primary)] mb-2">100%</div>
            <div className="text-gray-400">Open Source</div>
          </div>
        </div>
      </div>
    </section>
  );
}