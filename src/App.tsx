import { useEffect } from "react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { UpdatedGamingHeader } from "./components/UpdatedGamingHeader";
import { UpdatedGamingPersonalHero } from "./components/UpdatedGamingPersonalHero";
import { EnhancedGamingAbout } from "./components/EnhancedGamingAbout";
import { TechSkillsSlider } from "./components/TechSkillsSlider";
import { EnhancedGamingSlider } from "./components/EnhancedGamingSlider";
import { EnhancedGamingProjects } from "./components/EnhancedGamingProjects";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { GamingBlog } from "./components/GamingBlog";
import { UpdatedGamingPersonalFooter } from "./components/UpdatedGamingPersonalFooter";

export default function App() {
  // Fetch data from your backend once when component mounts
  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-x-hidden">
      {/* Animated Particle Background */}
      <AnimatedBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <UpdatedGamingHeader />
        <main className="w-full">
          <UpdatedGamingPersonalHero />
          <EnhancedGamingAbout />
          <TechSkillsSlider />
          <EnhancedGamingSlider />
          <EnhancedGamingProjects />
          <TestimonialsSection />
          <GamingBlog />
        </main>
        <UpdatedGamingPersonalFooter />
      </div>
    </div>
  );
}
