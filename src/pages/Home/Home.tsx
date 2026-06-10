import MainActButton from '../../components/Buttons/MainActButton/MainActButton'
import './Home.scss'

import svgExample from '../../assets/icons/svg-example.svg'

function Home() {


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
                            <MainActButton variant=" primary" title="Наши услуги" bordered ></MainActButton>
                        </div>
                    </div>
                    <div className='hero-life'>
                    </div>
                </div>
            </div >

            <div className="achievements">
                <div className="container achievements-container">
                    <div>
                        <img src={svgExample} width={'50px'} height={'50px'} alt="" />
                        <span className="value">500+</span>
                        <span className='text'>Охраняемых объектов</span>
                    </div>
                    <div>
                        <img src={svgExample} width={'50px'} height={'50px'} alt="" />
                        <span className="value">24\7</span>
                        <span className='text'>Круглосуточная охрана</span>
                    </div>
                    <div>
                        <img src={svgExample} width={'50px'} height={'50px'} alt="" />
                        <span className="value">120+</span>
                        <span className='text'>Охранников</span>
                    </div>
                    <div>
                        <img src={svgExample} width={'50px'} height={'50px'} alt="" />
                        <span className="value">99.9%</span>
                        <span className='text'>Надёжность</span>
                    </div>
                </div>

            </div>

            <div className="services">
                <div className="container">
                    <div>
                        <h2>Наши услуги по охране</h2>
                        <p>Комплексные решения по безопасности для защиты вашей недвижимости</p>
                    </div>
                    <div className="servoces-items">
                        <div>
                            <img src={svgExample} width={'50px'} height={'50px'} alt="" />
                            <h3>Физическая охрана объектов</h3>
                            <p>Профессиональные охранники с лицензией для постоянной или временной охраны вашего объекта.</p>
                        </div>
                        <div>
                            <img src={svgExample} width={'50px'} height={'50px'} alt="" />
                            <h3>Системы видеонаблюдения</h3>
                            <p>Установка и мониторинг современных систем видеонаблюдения с удаленным доступом.</p>
                        </div>
                        <div>
                            <img src={svgExample} width={'50px'} height={'50px'} alt="" />
                            <h3>Контроль доступа</h3>
                            <p>Современные системы контроля и управления доступом на территорию объекта.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="objects">
                <div className="container">
                    <div>
                        <h2>Охраняемые объекты</h2>
                        <p>Мы обеспечиваем безопасность разных типов недвижимости</p>
                    </div>
                    <div className="slider"></div>
                </div>
            </div>

            <div className="advantages">
                <div className="container">
                    <div>
                        <h2>Почему выбирают нас</h2>
                        <p>Наши преимущества делают нас лидером в сфере охраны недвижимости</p>
                    </div>
                    <div className="advantages-plates">
                        <div>
                            <img src="" alt="" />
                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>

                        <div>
                            <img src="" alt="" />
                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>

                        <div>
                            <img src="" alt="" />
                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>

                        <div>
                            <img src="" alt="" />
                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>

                        <div>
                            <img src="" alt="" />
                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>

                        <div>
                            <img src="" alt="" />
                            <h3>Полная лицензия</h3>
                            <p>Все необходимые лицензии и разрешения на ведение охранной деятельности</p>
                        </div>


                    </div>
                </div>
            </div>

            <div className="about">
                <div className="container">

                </div>
            </div>
            <div className="achievements-plates">
                <div className="container">

                </div>
            </div>
            <div className="reviews">
                <div className="container"></div>
            </div>
            <div className="contacts">
                <div className="container"></div>
            </div>
        </>
    )
}

export default Home
