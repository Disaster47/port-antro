import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import { Star } from "lucide-react";
import { StarBackground } from "@/components/StarBackground.jsx";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { PortfolioSection } from "../components/PortfolioSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-prompt">
      {/*Theme Toggle*/}
      {/* <ThemeToggle /> */}
      {/*Background Effects*/}

      {/* <StarBackground /> */}
      {/*Navbar*/}
      <Navbar />
      {/*Main Content*/}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      {/*Footer*/}
      <Footer />
    </div>
  );
}
