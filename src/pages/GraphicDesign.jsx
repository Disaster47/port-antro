import { HeroGSection } from "../components/GraphicPortfolio/HeroGSection";
import { TabsSection } from "../components/GraphicPortfolio/TabsSection";
import { Navbar2 } from "../components/Navbar2.jsx";
import ThemeToggle from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground.jsx";

export default function GraphicDesign() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      {/* <ThemeToggle /> */}

      <Navbar2 />
      <main>
        <HeroGSection />
        <TabsSection />
      </main>
    </div>
  );
}
