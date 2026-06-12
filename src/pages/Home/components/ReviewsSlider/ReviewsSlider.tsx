// import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import './ReviewsSlider.scss'

export default () => {

    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            // loop={true}
            speed={1000}
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
        >
            <SwiperSlide>
                <div className="slide">
                    <img src="" alt="" />
                    <div className="text">Отличная команда! Современное оборудование, квалифицированные охранники. Рекомендую как надежного партнера в сфере безопасности.</div>
                    <div className="person">
                        <div className="name">Елена Волкова</div>
                        <div className="job">Директор по безопасности</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <img src="" alt="" />
                    <div className="text">Отличная команда! Современное оборудование, квалифицированные охранники. Рекомендую как надежного партнера в сфере безопасности.</div>
                    <div className="person">
                        <div className="name">Сергей Петров</div>
                        <div className="job">Директор ЖК "Премиум"</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <img src="" alt="" />
                    <div className="text">Отличная команда! Современное оборудование, квалифицированные охранники. Рекомендую как надежного партнера в сфере безопасности.</div>
                    <div className="person">
                        <div className="name">Вася Пупкин</div>
                        <div className="job">Владелец ТЦ</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <img src="" alt="" />
                    <div className="text">Отличная команда! Современное оборудование, квалифицированные охранники. Рекомендую как надежного партнера в сфере безопасности.</div>
                    <div className="person">
                        <div className="name">Дмитрий Козлов</div>
                        <div className="job">Застройщик</div>
                    </div>
                </div>
            </SwiperSlide>


        </Swiper >
    );
};