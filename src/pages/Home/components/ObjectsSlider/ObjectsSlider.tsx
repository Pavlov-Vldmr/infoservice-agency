import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useFetch } from "@/hooks/useFetch";
import { fetchCompanyObjects } from "@/services/objects";
import { getStrapiMediaUrl } from "@/services/strapiClient";

import Slide from "./Slide/Slide";

import "./ObjectsSlider.scss";

// Import Swiper styles
import "swiper/css";

function ObjectsSlider() {
  const { data: objects, loading, error } = useFetch(fetchCompanyObjects);

  if (loading) return <div>Загрузка объектов...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (objects.length === 0) return console.log('objects nf');

  const pagination = {
    clickable: true,
    renderBullet: function (_index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={3}
      slidesPerView={3}
      loop={true}
      speed={1000}
      pagination={pagination}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      className="objects-slider-swiper"
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      }}
    >
      {objects.map((obj) => (
        <SwiperSlide>
          <Slide
            key={obj.documentId || obj.id}
            title={obj.title}
            text={obj.text}
            imgURL={getStrapiMediaUrl(obj.img?.url)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ObjectsSlider;
