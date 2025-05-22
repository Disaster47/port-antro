import { Link } from "react-router-dom";
import { Palette, Code2, Music, CalendarClock } from "lucide-react";

const categories = [
  {
    title: "Graphic Design",
    icon: <Palette size={32} />,
    bg: "bg-gradient-to-br from-indigo-700 via-purple-800 to-gray-900",
    link: "/graphic",
  },
  {
    title: "Web Frontend",
    icon: <Code2 size={32} />,
    bg: "bg-gradient-to-br from-blue-800 via-indigo-900 to-slate-900",
    link: "/portfolio/frontend",
  },
  {
    title: "Beat Lab",
    icon: <Music size={32} />,
    bg: "bg-gradient-to-br from-pink-700 via-red-700 to-yellow-600",
    link: "/portfolio/produce",
  },
  {
    title: "Event & Other",
    icon: <CalendarClock size={32} />,
    bg: "bg-gradient-to-br from-emerald-700 via-teal-800 to-gray-900",
    link: "/portfolio/event-other",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 px-4 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        PORT <span className="text-primary">FOLIO</span>{" "}
      </h2>

      <p className="max-w-2xl mx-auto">
        รวมผลงานหลากหลายสไตล์ที่สะท้อนความคิดสร้างสรรค์และทักษะเฉพาะตัว
        ทุกโปรเจกต์คืองานที่ใส่ใจและพร้อมเล่าเรื่องผ่านดีไซน์และการผลิต
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 py-8">
        {categories.map((cat) => {
          const handleClick = (e) => {
            if (
              cat.title === "Web Frontend" ||
              cat.title === "Beat Lab" ||
              cat.title === "Event & Other"
            ) {
              e.preventDefault();
              alert("ขออภัย! บริการนี้ยังไม่พร้อมให้ใช้งาน");
            }
          };

          return (
            <Link
              to={cat.link}
              key={cat.title}
              className={`group relative rounded-2xl p-6 ${cat.bg} text-white overflow-hidden transition-transform hover:scale-[1.02] shadow-lg hover:shadow-2xl`}
              onClick={handleClick}
            >
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition duration-300 rounded-2xl" />
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold">{cat.title}</span>
                  <span className="text-sm opacity-80 group-hover:opacity-100 transition text-left">
                    View
                  </span>
                </div>
                {cat.icon}
              </div>
            </Link>
          );
        })}
      </div>

      <img
        src="/mascot.webp"
        alt="Cartoon mascot"
        className="absolute right-50 top-3/4 -translate-y-1/2 w-48 md:w-60 pointer-events-none animate-bounce"
      />
    </section>
  );
};
