import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// ✅ สร้าง array ของ path รูปภาพอัตโนมัติ (แก้ตรงนี้แทนเขียนทีละรูป)
const imageList = Array.from(
  { length: 61 },
  (_, i) => `/port/social/${i + 1}.avif`
);

export default function SocialMedia() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="App px-4">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {/* ✅ จัด layout แบบ gallery โดยไม่ wrap div เพิ่ม */}
        {imageList.map((src, i) => (
          <a
            key={i}
            href={src}
            className="inline-block w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 p-1"
          >
            <img
              // alt={`img-${i + 1}`}
              src={src}
              className="w-full h-35 md:h-65
               object-cover rounded-md shadow-md"
              loading="lazy"
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
