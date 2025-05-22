import { useState } from "react";
import { cn } from "@/lib/utils";
import GraphicPackGallery from "./gallery/GraphicPack";
import SocialMedia from "./gallery/SocialMedia";
import Prints from "./gallery/Prints";

const tabs = [
  { name: "SOCIAL MEDIA & MARKETING", component: <SocialMedia /> },

  { name: "GRAPHIC PACK", component: <GraphicPackGallery /> },
  { name: "PRINT", component: <Prints /> },
];

export const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Tabs */}
      <div className="flex justify-center  mb-8 flex-wrap gap-4 items-center ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={cn(
              "px-4 py-2 text-sm md:text-md font-semibold rounded-full border transition duration-300",
              activeTab === index
                ? "bg-primary text-white border-primary shadow-md"
                : "bg-white text-muted-foreground border-muted hover:bg-muted/20"
            )}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in duration-500">
        {tabs[activeTab].component}
      </div>
    </section>
  );
};
