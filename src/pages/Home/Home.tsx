import MainActButton from '../../components/Buttons/MainActButton/MainActButton'
import './Home.scss'

// import svgExample from '../../assets/icons/svg-example.svg'

import guardian from '../../assets/images/security.jpg'
// import ObjectsSlider from './components/ObjectsSlider/ObjectsSlider'
// import ReviewsSlider from './components/ReviewsSlider/ReviewsSlider'
import { Icons } from '../../components/Icons'
import ContactsInfo from '../../components/ContactsInfo/ContactsInfo'
import FeedbackForm from '../../features/FeedbackForm/FeedbackForm'

function Home() {
    // const t = "Apply"

    return (
        <>
            <div className="hero">
                <div className="container hero-container">
                    <div className='hero-main'>
                        <span className='license'>Лицензия № 123456 от 01.01.2010</span>
                        <h1>Охрана недвижимости под надежной защитой</h1>
                        <p>Профессиональная охрана коммерческой и жилой недвижимости. Круглосуточный мониторинг, современное оборудование и опытные специалисты.</p>
                        <div className='hero-main-btns'>
                            <MainActButton variant='white' title="Заказать онлайн"></MainActButton>
                            <MainActButton variant="primary" title="Наши услуги" bordered ></MainActButton>
                        </div>
                    </div>
                    {/* <div className='hero-life'>
                    </div> */}
                </div>
            </div >

            <div className="achievements">
                <div className="container achievements-container">
                    <div>

                        <Icons.Chart className='achievements__icons icon_accent' />
                        <span className="value">500+</span>
                        <span className='text'>Охраняемых объектов</span>
                    </div>
                    <div>
                        <Icons.Clock className='achievements__icons icon_accent' />
                        <span className="value">24\7</span>
                        <span className='text'>Круглосуточная охрана</span>
                    </div>
                    <div>
                        <Icons.Person className='achievements__icons icon_accent' />

                        <span className="value">120+</span>
                        <span className='text'>Охранников</span>
                    </div>
                    <div>
                        <Icons.Shield className='achievements__icons icon_accent' />

                        <span className="value">99.9%</span>
                        <span className='text'>Надёжность</span>
                    </div>
                </div>

            </div>

            <div className="services">
                <div className="container services-container">
                    <div className='services-title'>
                        <h2 className='text_center'>Наши услуги по охране</h2>
                        <p className='text_center text_muted'>Комплексные решения по безопасности для защиты вашей недвижимости</p>
                    </div>
                    <div className="services__items">
                        <div>
                            <Icons.ShieldAlt className='services__icons icon_accent' />
                            <h3>Физическая охрана объектов</h3>
                            <p className='text_muted'>Профессиональные охранники с лицензией для постоянной или временной охраны вашего объекта.</p>
                        </div>
                        <div>
                            <Icons.Camera className='services__icons icon_accent' />
                            <h3>Физическая охрана объектов</h3>
                            <p className='text_muted'>Профессиональные охранники с лицензией для постоянной или временной охраны вашего объекта.</p>
                        </div>
                        <div>
                            <Icons.Lock className='services__icons icon_accent' />
                            <h3>Системы видеонаблюдения</h3>
                            <p className='text_muted'>Установка и мониторинг современных систем видеонаблюдения с удаленным доступом.</p>
                        </div>
                        <div>
                            <Icons.Person className='services__icons icon_accent' />
                            <h3>Контроль доступа</h3>
                            <p className='text_muted'>Современные системы контроля и управления доступом на территорию объекта.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="objects">
                <div className="container">
                    <div className='objects-title'>
                        <h2 className='text_center'>Охраняемые объекты</h2>
                        <p className='text_center text_muted'>Мы обеспечиваем безопасность разных типов недвижимости</p>
                    </div>
                    <div className="slider">
                        {/* <ObjectsSlider /> */}
                    </div>
                </div>
            </div>

            <div className="advantages">
                <div className="container">
                    <div className='advantages-title'>
                        <h2 className='text_center'>Почему выбирают нас</h2>
                        <p className='text_center'>Наши преимущества делают нас лидером в сфере охраны недвижимости</p>
                    </div>
                    <div className="advantages-plates">
                        <div>
                            <Icons.ShieldAlt className='advantages__icons icon_white' />

                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>
                        <div>
                            <Icons.ShieldAlt className='advantages__icons icon_white' />

                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>

                        <div>
                            <Icons.ShieldAlt className='advantages__icons icon_white' />

                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>

                        <div>
                            <Icons.ShieldAlt className='advantages__icons icon_white' />

                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>

                        <div>
                            <Icons.ShieldAlt className='advantages__icons icon_white' />

                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>

                        <div>
                            <Icons.ShieldAlt className='advantages__icons icon_white' />

                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>

                        <div>
                            <Icons.ShieldAlt className='advantages__icons icon_white' />

                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>


                    </div>
                </div>
            </div>

            <div className="about">
                <div className="container about-container">
                    <div className='about-top'>
                        <div className='about__guardian'>
                            <img src={guardian} alt="" />
                        </div>
                        <div className='about-article'>
                            <h2>О компании ООО "ИнфоСервис"</h2>
                            <p>Более 15 лет опыта в сфере частной охраны позволили компании ИнфоСервис стать надежным партнером в области безопасности недвижимости. Мы специализируемся на защите жилой и коммерческой недвижимости, используя передовые технологии и высококвалифицированный персонал.</p>
                            <p className='text_muted'>Наша приверженность качеству и удовлетворенности клиентов сделала нас предпочтительным выбором для владельцев недвижимости, застройщиков и управляющих компаний по всему региону.</p>
                            <div className='about-article-adv'>
                                <div className='about-article-adv__item'>
                                    <Icons.Shield className='about__icons icon_accent' width={20} height={20} />

                                    <div>
                                        <h4>Лицензия и страхование</h4>
                                        <p>Полный пакет лицензий и комплексное страхование ответственности</p>
                                    </div>
                                </div>
                                <div className='about-article-adv__item'>
                                    <Icons.Shield className='about__icons icon_accent' width={20} height={20} />

                                    <div>
                                        <h4>Лицензия и страхование</h4>
                                        <p>Полный пакет лицензий и комплексное страхование ответственности</p>
                                    </div>
                                </div>
                                <div className='about-article-adv__item'>
                                    <Icons.Shield className='about__icons icon_accent' width={20} height={20} />

                                    <div>
                                        <h4>Лицензия и страхование</h4>
                                        <p>Полный пакет лицензий и комплексное страхование ответственности</p>
                                    </div>
                                </div>
                                <div className='about-article-adv__item'>
                                    <Icons.Shield className='about__icons icon_accent' width={20} height={20} />

                                    <div>
                                        <h4>Лицензия и страхование</h4>
                                        <p>Полный пакет лицензий и комплексное страхование ответственности</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="achievements-plates">
                        <div>
                            <Icons.ShieldAlt className='achievements__icons icon_white' />
                            <h3>15+</h3>
                            <span>Лет</span>
                        </div>
                        <div>
                            <Icons.ShieldAlt className='achievements__icons icon_white' />
                            <h3>15+</h3>
                            <span>Лет</span>
                        </div>
                        <div>
                            <Icons.ShieldAlt className='achievements__icons icon_white' />
                            <h3>15+</h3>
                            <span>Лет</span>
                        </div>
                        <div>
                            <Icons.ShieldAlt className='achievements__icons icon_white' />
                            <h3>15+</h3>
                            <span>Лет</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="reviews">
                <div className="container">
                    <div className='reviews-title'>
                        <h2 className='text_center'>Отзывы наших клиентов</h2>
                        <p className='text_center text_muted'>Что говорят о нас руководители компаний и владельцы недвижимости</p>
                    </div>
                    <div className="reviews-slider">
                        {/* <ReviewsSlider /> */}
                    </div>
                </div>
            </div>

            <div className="contacts">
                <div className="container contacts__container">
                    <div className='contacts-title'>
                        <h2 className='text_center'>Контакты</h2>
                        <p className='text_center text_muted'>Свяжитесь с нашими специалистами по безопасности для обсуждения защиты вашей недвижимости</p>
                    </div>
                    <div className="contacts__content">
                        <ContactsInfo />
                        <FeedbackForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
