import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Parallax,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

const CreativeShowcaseSlider = () => {
  useEffect(() => {
    const nextButton = document.querySelector(".swiper-button-next");
    const prevButton = document.querySelector(".swiper-button-prev");

    if (
      nextButton instanceof HTMLElement &&
      prevButton instanceof HTMLElement
    ) {
      nextButton.style.display = "flex";
      prevButton.style.display = "flex";
    }
  }, []);

  return (
    <section className="creative-showcase--slider">
      <Swiper
        modules={[Navigation, Pagination, Parallax, Autoplay, EffectCoverflow]}
        speed={1500}
        autoplay={{ delay: 5000 }}
        parallax={true}
        loop={true}
        effect="coverflow"
        slidesPerView={1}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
        }}
        allowTouchMove={false} // Menonaktifkan geser manual dengan touch
        mousewheel={false} // Menonaktifkan scroll dengan mouse
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} swiper-pagination-custom"></span>`,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {[
          {
            img: "/registrasi.png",
            subtitle: "© Creative Salahu",
            heading: "Retouch Photo",
          },
          {
            img: "/best1.png",
            subtitle: "© Creative Salahu",
            heading: "Earthmade Aroma Box",
          },
          {
            img: "/akademik.png",
            subtitle: "© Creative Salahu",
            heading: "Earthmade Aroma Box",
          },
          {
            img: "/akademik.png",
            subtitle: "© Creative Salahu",
            heading: "Earthmade Aroma Box",
          },
        ].map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative slide-bg overlay-dark h-[500px] md:h-[800px] lg:[100vh] w-[100%] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
              data-swiper-parallax="1152"
            >
              {/* Overlay hitam dengan opasitas 40% */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              {/* Konten text */}
              <div className="slide-container h-full flex items-center">
                <div className="slide-row z-10">
                  {" "}
                  {/* Tambahkan z-10 agar di atas overlay */}
                  <div className="slider-content text-white">
                    <h6
                      className="slide-subtitle text-2xl ml-20"
                      data-swiper-parallax="-1000"
                    >
                      {slide.subtitle}
                    </h6>
                    <h1
                      className="slide-heading text-6xl ml-20"
                      data-swiper-parallax="-2000"
                    >
                      <a href="https://www.fiverr.com/aliali44">
                        {slide.heading}
                      </a>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-wrapper creative-button--wrapper">
          <div className="swiper-button-prev">
            <AiOutlineArrowLeft className="text-3xl text-white" />{" "}
            {/* Ikon panah kiri */}
            <span className="sr-only">Previous Slide</span>{" "}
            {/* Text untuk screen readers */}
          </div>
          <div className="swiper-button-next">
            <AiOutlineArrowRight className="text-3xl w- h-40 text-white" />{" "}
            {/* Ikon panah kanan */}
            <span className="sr-only">Next Slide</span>{" "}
            {/* Text untuk screen readers */}
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default CreativeShowcaseSlider;
