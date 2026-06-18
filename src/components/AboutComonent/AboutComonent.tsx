
import { Icons } from '../Icons'
import './AboutComonent.scss'
import guardian from '../../assets/images/security.jpg'


function AboutComponent() {


    return (
        <div className='about-component'>
            <div className="container about-component__container p-10 m_p-4">
                <div className='about-component__top'>
                    <div className='about-component__guardian mt-8 m_mt-0'>
                        <img src={guardian} alt="" />
                    </div>
                    <div className='about-component__article'>
                        <h2 className='mb-4'>О компании ООО "ИнфоСервис"</h2>
                        <p>Более 15 лет опыта в сфере частной охраны позволили компании ИнфоСервис стать надежным партнером в области безопасности недвижимости. Мы специализируемся на защите жилой и коммерческой недвижимости, используя передовые технологии и высококвалифицированный персонал.</p>
                        <p className='some__text text_muted mt-4'>Наша приверженность качеству и удовлетворенности клиентов сделала нас предпочтительным выбором для владельцев недвижимости, застройщиков и управляющих компаний по всему региону.</p>
                        <div className='about-component__article-adv mt-8'>
                            <div className='about-component__article-adv__item'>
                                <Icons.Shield className='about-component__icons icon_accent' />

                                <div className='about-component__article-adv__item__text'>
                                    <h4>Лицензия и страхование</h4>
                                    <p>Полный пакет лицензий и комплексное страхование ответственности</p>
                                </div>
                            </div>
                            <div className='about-component__article-adv__item'>
                                <Icons.Shield className='about-component__icons icon_accent' />

                                <div className='about-component__article-adv__item__text'>
                                    <h4>Лицензия и страхование</h4>
                                    <p>Полный пакет лицензий и комплексное страхование ответственности</p>
                                </div>
                            </div>
                            <div className='about-component__article-adv__item'>
                                <Icons.Shield className='about-component__icons icon_accent' />

                                <div className='about-component__article-adv__item__text'>
                                    <h4>Лицензия и страхование</h4>
                                    <p>Полный пакет лицензий и комплексное страхование ответственности</p>
                                </div>
                            </div>
                            <div className='about-component__article-adv__item'>
                                <Icons.Shield className='about-component__icons icon_accent' />

                                <div className='about-component__article-adv__item__text'>
                                    <h4>Лицензия и страхование</h4>
                                    <p>Полный пакет лицензий и комплексное страхование ответственности</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-achievements-plates">
                    <div>
                        <Icons.ShieldAlt className='home-achievements__icons icon_white' />
                        <h3>15+</h3>
                        <span>Лет</span>
                    </div>
                    <div>
                        <Icons.ShieldAlt className='home-achievements__icons icon_white' />
                        <h3>15+</h3>
                        <span>Лет</span>
                    </div>
                    <div>
                        <Icons.ShieldAlt className='home-achievements__icons icon_white' />
                        <h3>15+</h3>
                        <span>Лет</span>
                    </div>
                    <div>
                        <Icons.ShieldAlt className='home-achievements__icons icon_white' />
                        <h3>15+</h3>
                        <span>Лет</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent