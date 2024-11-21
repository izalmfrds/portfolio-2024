import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const images = ["/best1.png", "/best1.2.png", "/best1_3.png", "/best2.png"];

const VerticalSwiper = () => {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      mousewheel={true}
      pagination={{ clickable: true }}
      speed={800}
      modules={[Mousewheel, Pagination]}
      className="w-full h-full "
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-full flex justify-center items-center bg-black">
            {src.endsWith(".mp4") ? (
              <video
                src={src}
                controls
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VerticalSwiper;
