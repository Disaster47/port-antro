import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCanva,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";
import {
  Clapperboard,
  Gem,
  LayoutGrid,
  Palette,
  PenTool,
  Scissors,
  Sliders,
  Sparkle,
} from "lucide-react";
import { FaCompactDisc, FaGitAlt, FaGithub, FaMusic } from "react-icons/fa";
import { GiSoundWaves } from "react-icons/gi";
import { BiBrain } from "react-icons/bi";
import { MdStar } from "react-icons/md";
import { BsFillLightbulbFill } from "react-icons/bs";

const skills = [
  //Design & Creativity
  {
    icon: SiAdobephotoshop,
    name: "Adobe Photoshop",
    skill: "Advanced",
    level: 90,
    category: "Design & Creativity",
  },
  {
    icon: SiAdobeillustrator,
    name: "Adobe Illustrator",
    skill: "Intermediate - Advanced",
    level: 70,
    category: "Design & Creativity",
  },
  {
    icon: SiFigma,
    name: "Figma",
    skill: "Intermediate",
    level: 50,
    category: "Design & Creativity",
  },
  {
    icon: LayoutGrid,
    name: "Typography & Layout",
    skill: "Intermediate",
    level: 70,
    category: "Design & Creativity",
  },
  {
    icon: PenTool,
    name: "Branding Design",
    skill: "Intermediate",
    level: 50,
    category: "Design & Creativity",
  },

  // Video Editing
  {
    icon: SiAdobepremierepro,
    name: "Adobe Premiere Pro",
    skill: "Intermediate - Advanced",
    level: 80,
    category: "Video Editing",
  },

  {
    icon: SiAdobeaftereffects,
    name: "Adobe After Effects",
    skill: "Intermediate",
    level: 50,
    category: "Video Editing",
  },
  {
    icon: Scissors,
    name: "CapCut",
    skill: "Intermediate",
    level: 75,
    category: "Video Editing",
  },
  {
    icon: Clapperboard,
    name: "Video Editting",
    skill: "Intermediate",
    level: 60,
    category: "Video Editing",
  },
  {
    icon: Sparkle,
    name: "Motion Graphics",
    skill: "Basic",
    level: 30,
    category: "Video Editing",
  },

  //Frontend

  {
    icon: SiHtml5,
    name: "HTML/CSS",
    skill: "Basic - Intermediate",
    level: 65,
    category: "Frontend",
  },
  {
    icon: SiTailwindcss,
    name: "TailwindCSS",
    skill: "Basic - Intermediate",
    level: 55,
    category: "Frontend",
  },
  {
    icon: SiJavascript,
    name: "JavaScript(Basic)",
    skill: "Basic",
    level: 35,
    category: "Frontend",
  },
  {
    icon: SiReact,
    name: "React.js",
    skill: "Beginner",
    level: 30,
    category: "Frontend",
  },
  {
    icon: SiWordpress,
    name: "WORDPRESS",
    skill: "Intermediate - Advanced",
    level: 80,
    category: "Frontend",
  },

  //Music / Audio
  {
    icon: FaCompactDisc,
    name: "Fl Studio",
    skill: "Intermediate",
    level: 70,
    category: "Music/Audio",
  },
  {
    icon: Sliders,
    name: "MixMaster",
    skill: "Basic",
    level: 40,
    category: "Music/Audio",
  },
  {
    icon: GiSoundWaves,
    name: "Beatmaking",
    skill: "Intermediate",
    level: 60,
    category: "Music/Audio",
  },

  //Tools
  {
    icon: SiCanva,
    name: "Canva",
    skill: "Intermediate",
    level: 60,
    category: "Tools",
  },
  {
    icon: FaGithub,
    name: "VersionControl (Git)",
    skill: "Beginner",
    level: 30,
    category: "Tools",
  },
  {
    icon: BsFillLightbulbFill,
    name: "Creative Thinking",
    skill: "Intermediate - Advanced",
    level: 75,
    category: "Tools",
  },
];

const categories = [
  "all",
  "Design & Creativity",
  "Video Editing",
  "Frontend",
  "Music/Audio",
  "Tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Design & Creativity");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Skills</span> & Tools
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full trasition-color duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4 flex flex-cols space-x-2">
                {skill.icon && (
                  <skill.icon className="text-3xl text-yellow-300" />
                )}
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="mt-5 grid grid-cols-1">
                <span>{skill.skill}</span>
                <span>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
