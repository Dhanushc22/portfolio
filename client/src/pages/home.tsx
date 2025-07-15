import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import EducationSection from "@/components/education-section";
import ProjectShowcase from "@/components/project-showcase";
import SkillsSection from "@/components/skills-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EducationSection />
      <ProjectShowcase />
      <SkillsSection />
      <Footer />
    </div>
  );
}
