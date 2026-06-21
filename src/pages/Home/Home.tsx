import MainActButton from '../../components/Buttons/MainActButton/MainActButton'
import './Home.scss'
import { useNavigate } from 'react-router-dom';

// import svgExample from '../../assets/icons/svg-example.svg'

import guardian from '../../assets/images/security.jpg'
import ObjectsSlider from './components/ObjectsSlider/ObjectsSlider'
import ReviewsSlider from './components/ReviewsSlider/ReviewsSlider'
import { Icons } from '../../components/Icons'
import ContactsInfo from '../../components/ContactsInfo/ContactsInfo'
import FeedbackForm from '../../features/FeedbackForm/FeedbackForm'
import AboutComponent from '@/components/AboutComonent/AboutComonent'
import CallbackComponent from '@/components/CallbackComponent/CallbackComponent'

import { ErrorBoundary } from 'react-error-boundary'

function Home() {

    const navigate = useNavigate();
    const handleNavigateToServices = () => {
        navigate('/infoservice-agency/services');
    }

    return (
        <>

            <section className="home-hero">
                <div className="container home-hero__container p-10">
                    <div className='home-hero__main'>
                        <span className='license'>Лицензия № 123456 от 01.01.2010</span>
                        <h1>Охрана недвижимости под надежной защитой</h1>
                        <p>Профессиональная охрана коммерческой и жилой недвижимости. Круглосуточный мониторинг, современное оборудование и опытные специалисты.</p>
                        <div className='home-hero__main__btns mt-4'>
                            {/* // калькулятор */}
                            <MainActButton variant='white' title="Заказать онлайн"></MainActButton>
                            {/* // на страницу услуги */}
                            <MainActButton onClick={handleNavigateToServices} variant="primary" title="Наши услуги" bordered ></MainActButton>
                        </div>
                    </div>
                </div>
            </section >


            <section className="home-achievements py-4">
                <div className="container home-achievements__container p-2">
                    <div>
                        <Icons.Chart className='home-achievements__icons icon_accent' />
                        <span className="value">500+</span>
                        <span className='text'>Охраняемых объектов</span>
                    </div>
                    <div>
                        <Icons.Clock className='home-achievements__icons icon_accent' />
                        <span className="value">24\7</span>
                        <span className='text'>Круглосуточная охрана</span>
                    </div>
                    <div>
                        <Icons.Person className='home-achievements__icons icon_accent' />

                        <span className="value">120+</span>
                        <span className='text'>Охранников</span>
                    </div>
                    <div>
                        <Icons.Shield className='home-achievements__icons icon_accent' />

                        <span className="value">99.9%</span>
                        <span className='text'>Надёжность</span>
                    </div>
                </div>

            </section>

            <section className="home-services px-8 py-20">
                <div className="container home-services__container">
                    <div className='home-services__title mb-20'>
                        <h2 className='text_center mb-4'>Наши услуги по охране</h2>
                        <p className='text_center text_muted py-4'>Комплексные решения по безопасности для защиты вашей недвижимости</p>
                    </div>
                    <div className="home-services__items">
                        <div className='home-services__items__item'>
                            <Icons.ShieldAlt className='item__icons icon_accent' />
                            <h3>Физическая охрана объектов</h3>
                            <p className='text_muted'>Профессиональные охранники с лицензией для постоянной или временной охраны вашего объекта.</p>
                        </div>
                        <div className='home-services__items__item'>
                            <Icons.Camera className='item__icons icon_accent' />
                            <h3>Физическая охрана объектов</h3>
                            <p className='text_muted'>Профессиональные охранники с лицензией для постоянной или временной охраны вашего объекта.</p>
                        </div>
                        <div className='home-services__items__item'>
                            <Icons.Lock className='item__icons icon_accent' />
                            <h3>Системы видеонаблюдения</h3>
                            <p className='text_muted'>Установка и мониторинг современных систем видеонаблюдения с удаленным доступом.</p>
                        </div>
                        <div className='home-services__items__item'>
                            <Icons.Person className='item__icons icon_accent' />
                            <h3>Контроль доступа</h3>
                            <p className='text_muted'>Современные системы контроля и управления доступом на территорию объекта.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* slider here */}
            <section className="home-objects py-20">
                <div className="container">
                    <div className='home-objects__title mb-20'>
                        <h2 className='text_center mb-4'>Охраняемые объекты</h2>
                        <p className='text_center text_muted py-4'>Мы обеспечиваем безопасность разных типов недвижимости</p>
                    </div>
                    <div className="home-objects__slider">

                        <ObjectsSlider />

                    </div>
                </div>
            </section>

            <section className="home-advantages py-20">
                <div className="container">
                    <div className='home-advantages__title mb-20'>
                        <h2 className='text_center mb-4'>Почему выбирают нас</h2>
                        <p className='text_center px-4'>Наши преимущества делают нас лидером в сфере охраны недвижимости</p>
                    </div>
                    <div className="home-advantages__plates">
                        <div className='home-advantages__plates__item'>
                            <Icons.ShieldAlt className='home-advantages__icons icon_white' />
                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>
                        <div className='home-advantages__plates__item'>
                            <Icons.ShieldAlt className='home-advantages__icons icon_white' />
                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>
                        <div className='home-advantages__plates__item'>
                            <Icons.ShieldAlt className='home-advantages__icons icon_white' />
                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>
                        <div className='home-advantages__plates__item'>
                            <Icons.ShieldAlt className='home-advantages__icons icon_white' />
                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>
                        <div className='home-advantages__plates__item'>
                            <Icons.ShieldAlt className='home-advantages__icons icon_white' />
                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>
                        <div className='home-advantages__plates__item'>
                            <Icons.ShieldAlt className='home-advantages__icons icon_white' />
                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>
                        <div className='home-advantages__plates__item'>
                            <Icons.ShieldAlt className='home-advantages__icons icon_white' />
                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-about py-20 m_py-0">

                <AboutComponent />
            </section>

            {/* slider here */}
            <section className="home-reviews py-20 ">
                <div className="container">
                    <div className='home-reviews__title mb-10'>
                        <h2 className='text_center mb-4'>Отзывы наших клиентов</h2>
                        <p className='text_center text_muted py-4'>Что говорят о нас руководители компаний и владельцы недвижимости</p>
                    </div>
                    <div className="home-reviews__slider">
                        <ReviewsSlider />
                    </div>
                </div>
            </section>

            <section id='scrollTest' className="home-contacts py-20">
                <div className="container home-contacts__container">
                    <div className='home-contacts__title mb-20'>
                        <h2 className='text_center mb-4'>Контакты</h2>
                        <p className='text_center text_muted py-4'>Свяжитесь с нашими специалистами по безопасности для обсуждения защиты вашей недвижимости</p>
                    </div>
                    <div className="home-contacts__content">
                        <ContactsInfo />
                        <FeedbackForm />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
