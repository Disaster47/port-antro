import { ArrowDown, MouseIcon } from "lucide-react";
import avatar from "../assets/avatar_pf.avif";
import footerBG from "../assets/footer_bg_qhd.webp";
import bgWallpaper from "../assets/bgwallpaper_1.avif";
import { LogoSlider } from "./LogoSlider";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 "
    >
      <div className="absolute inset-0  opacity-90 z-0"></div>

      {/* Floating glowing shapes */}
      <div className="absolute top-32 left-10 w-5 h-5 bg-primary/30 blur-md rounded-full animate-ping" />
      <div className="absolute bottom-40 right-12 w-4 h-4 bg-white/10 blur-sm rounded-full animate-pulse" />

      {/* Container */}
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-12 z-10">
        {/* Avatar ซ้าย */}
        <div className="flex justify-center md:justify-start w-full md:w-1/2">
          <img
            src={avatar}
            alt="Antro Avatar"
            className="w-40 md:w-90 opacity-90 hover:scale-105 transition duration-500 rounded-full"
          />
        </div>

        {/* ข้อความขวา */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">ANTRO </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              PORTFOLIO
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-md opacity-0 animate-fade-in-delay-2">
            CREATE BEYOND IMAGINATION
          </p>

          <p className="text-sm italic text-muted-foreground mt-4 opacity-0 animate-fade-in-delay-3">
            " Graphic Designer , Video Editor , Frontend , Producer "
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#portfolio" className="cosmic-button">
              ชมผลงาน
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2 font-bold">
          Scroll
        </span>
        <MouseIcon />
        <ArrowDown className="h-5 w-5 " />
      </div>

      <img
        src={footerBG}
        alt=""
        className="absolute bottom-0 left-0  w-full object-fill z-50 pointer-events-none"
      />
    </section>
  );
};

// import { ArrowDown } from "lucide-react";

// export const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4"
//     >
//       <div className="max-w-4xl mx-auto text-center z-10">
//         <div className="space-y-6 ">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//             <span className="opacity-0 animate-fade-in">Hi, I'm </span>

//             <span className="text-primary opacity-0 animate-fade-in-delay-1">
//               {""}
//               Antro
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-2">
//             CREATE BEYOND DESIGN
//           </p>
//           <div className="pt-4 opacity-0 animate-fade-in-delay-3">
//             <a href="#portfolio" className="cosmic-button">
//               VIEW PORTFOLIO
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 tranform-translate-x-1/2 flex flex-col items-center animate-bounce">
//         <span className="text-sm text-muted-forground mb-2">Scroll</span>
//         <ArrowDown className="h-5 w-5 text-primary" />
//       </div>
//     </section>
//   );
// };
