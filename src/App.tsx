import { AnimatedBackground } from "./components/AnimatedBackground";
import { EnhancedGamingHeader } from "./components/EnhancedGamingHeader";
import { EnhancedGamingPersonalHero } from "./components/EnhancedGamingPersonalHero";
import { EnhancedGamingAbout } from "./components/EnhancedGamingAbout";
import { EnhancedGamingSlider } from "./components/EnhancedGamingSlider";
import { GamingProjects } from "./components/GamingProjects";
import { GamingBlog } from "./components/GamingBlog";
import { GamingPersonalFooter } from "./components/GamingPersonalFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-x-hidden">
      {/* Animated Particle Background */}
      <AnimatedBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <EnhancedGamingHeader />
        <main className="w-full">
          <EnhancedGamingPersonalHero />
          <EnhancedGamingAbout />
          <EnhancedGamingSlider />
          <GamingProjects />
          <GamingBlog />
        </main>
        <GamingPersonalFooter />
      </div>
    </div>
  );
}