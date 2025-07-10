import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import EducationSection from "@/components/education-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import PortfolioSection from "@/components/portfolio-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
}
