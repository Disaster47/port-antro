import { ArrowDown, MouseIcon } from "lucide-react";
import footerBG from "../../assets/footer_bg_qhd.webp";

export const HeroGSection = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[70vh] flex flex-col items-center justify-center px-4">
      <div>
        <img
          src={footerBG}
          alt=""
          className="absolute bottom-0 left-0 md:w-full  object-center md:object-cover z-50 pointer-events-none "
        />

        <h2 className="text-muted-foreground text-6xl font-bold">
          <span className="animate-fade-in">Graphic </span>
          <span
            className="text-primary animate-fade-in-delay-1
          "
          >
            Design
          </span>
        </h2>
        <p className="text-2xl mt-5">SHOW CASE</p>
      </div>

      <div className="absolute bottom-20 md:bottom-35 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2 font-bold">
          Scroll
        </span>
        <MouseIcon />
        <ArrowDown className="h-5 w-5 " />
      </div>
    </section>
  );
};
