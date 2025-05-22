import { motion } from "framer-motion";
import logo1 from "../assets/clients_logo/pubg.png";

const logos = [
  logo1,
  logo1,
  logo1,
  logo1,

  // เพิ่มโลโก้ตามต้องการ
];

export const LogoSlider = () => {
  return (
    <div className="overflow-hidden py-5">
      {/* ใช้ container กว้างพอให้เลื่อนได้สมูท */}
      <motion.div
        className="flex gap-10 w-max"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {/* ใส่ 2 ชุดของโลโก้ติดกัน */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-40 h-20"
          >
            <img
              src={logo}
              alt={`Client logo ${index + 1}`}
              className="object-contain h-full"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
