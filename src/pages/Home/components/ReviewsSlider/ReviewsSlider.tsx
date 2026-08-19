// import { useState } from 'react';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useFetch } from '@/hooks/useFetch';
import { fetchCompanyReviews } from '@/services/review';

import './ReviewsSlider.scss'

// Import Swiper styles
import 'swiper/css';

function ReviewsSlider() {

    const { data: reviews, loading, error } = useFetch(fetchCompanyReviews);

    if (loading) return <div>Загрузка объектов...</div>;
    if (error) return <div>Ошибка: {error}</div>;
    if (reviews.length === 0) return <div>Отзывы не найдены</div>;

    console.log('reviews', reviews)

    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + '</span>';
        },
    };

    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 25
                }
            }}
            pagination={pagination}
            className="reviews-slider-swiper"
            loop={true}
            speed={1000}
            centeredSlides={true}
            autoplay={{
                delay: 40000000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
        >

            {reviews.map((review) => (
                <SwiperSlide>
                    <div className="slide">
                        <div className="text">{review.text}</div>
                        <div className="person">
                            <div className="name">{review.name}</div>
                            <div className="job">{review.company}</div>
                        </div>
                    </div>
                </SwiperSlide>

            ))}
        </Swiper >
    );
}

export default ReviewsSlider;