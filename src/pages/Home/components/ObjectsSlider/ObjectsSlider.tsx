import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import slideBg from '../../../../assets/images/object1.jpeg';

// Import Swiper styles
import 'swiper/css';
import './ObjectsSlider.scss'

export default () => {
    console.log(slideBg);
    console.log('sd');


    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={3}
            slidesPerView={3}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            // loop={true}
            speed={1000}

            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
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

        </Swiper>
    );
};