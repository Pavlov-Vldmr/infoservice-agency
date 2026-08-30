// import { useState } from 'react';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useFetch } from '@/hooks/useFetch';
import { fetchCompanyReviews } from '@/services/review';

import './ReviewsSlider.scss'

// Import Swiper styles
import 'swiper/css';

function ReviewsSlider() {

    // const { data: reviews, loading, error } = useFetch(fetchCompanyReviews);

    // if (loading) return <div>Загрузка объектов...</div>;
    // if (error) return <div>Ошибка: {error}</div>;
    // if (reviews.length === 0) return <div>Отзывы не найдены</div>;


    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + '</span>';
        },
    };
    const reviewsEx = [
        {
            id: 1,
            text: "Сотрудничаем с этим предприятием уже более двух лет. Установили пультовую охрану в сеть наших магазинов. Реагирование экипажей моментальное — проверено на практике во время ночной попытки взлома. Рекомендую как надежного партнера.",
            name: "Александр Волков",
            company: "Директор розничной сети «МаркетПлюс»"
        },
        {
            id: 2,
            text: "Заказывали физическую охрану для крупного бизнес-центра и монтаж системы видеонаблюдения. Охранники всегда в опрятной форме, вежливые, строго соблюдают пропускной режим. Вопросы безопасности теперь полностью закрыты.",
            name: "Елена Смирнова",
            company: "Руководитель ТСЖ «Высотка»"
        },
        {
            id: 3,
            text: "Прекрасный сервис и техническая поддержка. Возникли проблемы со шлейфом сигнализации на складе в субботу вечером — инженеры приехали в течение часа и всё исправили. Настоящие профессионалы своего дела.",
            name: "Дмитрий Козлов",
            company: "Начальник службы логистики «Логистик-Групп»"
        },
        {
            id: 4,
            text: "Нанимали сопровождение для транспортировки ценного груза. Оперативно разработали безопасный маршрут, предоставили вооруженную охрану и бронированный автомобиль. Всё прошло идеально гладко, без задержек.",
            name: "Игорь Петров",
            company: "Финансовый директор «ЮвелирСоюз»"
        },
        {
            id: 5,
            text: "Поставил под охрану свой загородный дом. Понравилось, что менеджеры не пытались навязать лишнее оборудование. Мобильное приложение работает стабильно, уведомления о постановке/снятии приходят мгновенно.",
            name: "Михаил Ч.",
            company: "Частное лицо / Владелец коттеджа"
        }
    ];


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
                delay: 6000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
        >

            {/* {reviews.map((review) => (
                <SwiperSlide>
                    <div className="slide">
                        <div className="text">{review.text}</div>
                        <div className="person">
                            <div className="name">{review.name}</div>
                            <div className="job">{review.company}</div>
                        </div>
                    </div>
                </SwiperSlide>

            ))} */}

            {reviewsEx.map((review) => (
                <SwiperSlide key={review.id}>
                    <div className="slide">
                        <div className="text">{review.text}</div>
                        <div className="person">
                            <div className="name">{review.name}</div>
                            <div className="job">{review.company}</div>
                        </div>
                    </div>
                </SwiperSlide>

            ))}
        </Swiper>
    );
}

export default ReviewsSlider;