import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import slideBg from "../../../../assets/images/object1.jpeg";

import { fetchCompanyObjects } from "@/services/objects";
import { getStrapiMediaUrl } from "@/services/strapiClient";
import { useFetch } from "@/hooks/useFetch";

// Import Swiper styles
import "swiper/css";
import "./ObjectsSlider.scss";
import Slide from "./Slide/Slide";

export default () => {
  const { data: objects, loading, error } = useFetch(fetchCompanyObjects);

  if (loading) return <div>Загрузка объектов...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (objects.length === 0) return <div>Объекты не найдены</div>;

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
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
};
