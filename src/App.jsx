import { useEffect, useState } from "react";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import BackToTop from "./components/BackToTop";
import Loader from "./components/Loader";
import { personalInfo } from "./data/personal";
import { useActiveSection } from "./hooks/useActiveSection";
import { useTheme } from "./hooks/useTheme";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isDark, toggleTheme } = useTheme();
  const { activeSection, isScrolled } = useActiveSection();

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      {isLoading ? <Loader /> : null}
      <Header
        activeSection={activeSection}
        isScrolled={isScrolled}
        isDark={isDark}
        toggleTheme={toggleTheme}
        resumeUrl={personalInfo.resumeUrl}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop visible={isScrolled} />
    </div>
  );
};

export default App;
