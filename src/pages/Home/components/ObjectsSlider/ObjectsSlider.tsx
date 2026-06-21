import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import slideBg from '../../../../assets/images/object1.jpeg';

// Import Swiper styles
import 'swiper/css';
import './ObjectsSlider.scss'

export default () => {


    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + '</span>';
        },
    };
    return (

        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={3}
            slidesPerView={3}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
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
                    spaceBetween: 25
                }
            }}
        >
            <SwiperSlide>
                <div className='slide' style={{ backgroundImage: ` linear-gradient(0deg, #000000b0, #3c313100), url(../../..` + `${slideBg})` }}>
                    <h3>Заголовок1</h3>
                    <p>Короткий текст</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide' style={{ backgroundImage: ` linear-gradient(0deg, #000000b0, #3c313100), url(../../..` + `${slideBg})` }}>

                    <h3>Заголовок</h3>
                    <p>Короткий текст</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide' style={{ backgroundImage: ` linear-gradient(0deg, #000000b0, #3c313100), url(../../..` + `${slideBg})` }}>

                    <h3>Заголовок</h3>
                    <p>Короткий текст</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide' style={{ backgroundImage: ` linear-gradient(0deg, #000000b0, #3c313100), url(../../..` + `${slideBg})` }}>

                    <h3>Заголовок</h3>
                    <p>Короткий текст</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide' style={{ backgroundImage: ` linear-gradient(0deg, #000000b0, #3c313100), url(../../..` + `${slideBg})` }}>

                    <h3>Заголовок</h3>
                    <p>Короткий текст</p>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};