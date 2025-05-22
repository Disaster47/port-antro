import { Code, Music, Palette, Sliders, SlidersHorizontal } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {""}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-primary">About</span> Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-forground">
              ผมชื่ออัน เป็นคนที่หลงใหลในงานกราฟิกมาตั้งแต่สมัยมัธยมต้น
              จุดเริ่มต้นไม่ได้ยิ่งใหญ่
              แค่เป็นเด็กติดเกมที่ชอบมองแบนเนอร์ในเกมแล้วสงสัยว่าเขาทำกันยังไง
              จากความสงสัยเล็ก ๆ นั้น
              กลายเป็นแรงบันดาลใจที่พาผมเข้าสู่โลกของการออกแบบ ตลอดทาง
              ผมไม่ได้จำกัดตัวเองแค่เรื่องดีไซน์ ตอนนี้ก็กำลังฝึกด้าน Frontend
              Programming เพราะอยากให้ไอเดียในหัวกลายเป็นของจริงได้บนหน้าเว็บ
              และเวลาว่าง ผมก็หันไปทำเพลง
              เป็นทั้งพื้นที่พักใจและวิธีสนุกกับการสร้างสรรค์อีกแบบ
              ทำให้กับตัวเองบ้าง ทำให้เพื่อนบ้าง ไม่มีกรอบ ไม่มีสูตรสำเร็จ
            </p>

            <p className="text-muted-forground">
              "สไตล์งาน" ผมชอบงานที่มีสีสัน มีลูกเล่นเยอะ ๆ ชอบลองของใหม่
              และชอบตามเทรนด์เพื่อให้เข้ากับโลกที่เปลี่ยนเร็ว
              งานของผมอาจไม่ใช่แนวมินิมอลเรียบหรู แต่ถ้าอยากได้สไตล์ที่เล่นใหญ่
              ใส่เต็ม ไม่ยั้งมือ ผมยินดีจัดให้
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {""}
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1RC_Ycb5g-0i6JEozBBq4PBvMVbFsTjAS/view?usp=sharing"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-200"
              >
                {""}
                Download RESUME
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className=" p-3 rounded-full bg-primary/10">
                  <Palette className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Graphic Design</h4>

                  <p>
                    {""}
                    ถนัดงานออกแบบ แบรนด์ดิ้ง โปสเตอร์และสื่อออนไลน์ เพื่อการตลาด
                    โดยเน้นองค์ประกอบภาพที่ดึงดูดและจดจำง่าย
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className=" p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Web Design & Development
                  </h4>
                  <p>
                    {" "}
                    มีพื้นฐานด้าน HTML, CSS, JavaScript และ React
                    พร้อมเข้าใจการออกแบบ UI/UX ที่เหมาะกับผู้ใช้จริง
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className=" p-3 rounded-full bg-primary/10">
                  <Sliders className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Beat Maker / Producer
                  </h4>
                  <p>
                    {" "}
                    ชอบสร้างจังหวะเพลงแนวฮิปฮอปและซินธ์
                    ผสมผสานเสียงที่เป็นเอกลักษณ์ผ่านโปรแกรมอย่าง FL Studio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
