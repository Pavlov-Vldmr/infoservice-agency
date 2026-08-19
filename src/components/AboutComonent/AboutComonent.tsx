
import guardian from '../../assets/images/security.jpg'
import { Icons } from '../Icons'

import './AboutComonent.scss'


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
                        <p>С 1997г. более 1000 объектов на территории Сахалинской области охраняется с помощью физической охраны и технических средств.</p>
                        <p>Компания оказывает полный спектр охранных услуг круглосуточно, включая физическую и вооруженную охрану объектов, мониторинг с помощью технических средств, а также сопровождение грузов при транспортировке. Штат насчитывает 184 лицензированных сотрудника, предприятие имеет разрешение на хранение и использование огнестрельного оружия до 2027 года и действующую лицензию на охранную деятельность до 2029 года.</p>
                        <p>Предприятие работает на рынке Сахалинской области 28 лет, обслуживая более 1000 клиентов в крупных населенных пунктах региона (Южно-Сахалинск, Корсаков, Холмск, Ноглики и др.). За все время существования у компании отсутствуют задолженности перед бюджетами всех уровней и фондами, а также неисполненные обязательства перед заказчиками.</p>

                        <p className='some__text text_muted mt-4'>Наша приверженность качеству и удовлетворенности клиентов сделала нас предпочтительным выбором для владельцев недвижимости, застройщиков и управляющих компаний по всему региону.</p>
                        <div className='about-component__article-adv mt-8'>
                            <div className='about-component__article-adv__item'>
                                <Icons.Shield className='about-component__icons icon_accent' />

                                <div className='about-component__article-adv__item__text'>
                                    <h4>Надёжность и стаж</h4>
                                    <p>28 лет работы, 1000+ клиентов, отсутствие нарушений по всем проверкам.</p>
                                </div>
                            </div>
                            <div className='about-component__article-adv__item'>
                                <Icons.Cube className='about-component__icons icon_accent' />

                                <div className='about-component__article-adv__item__text'>
                                    <h4>Оперативность и вооружение</h4>
                                    <p>Круглосуточный мониторинг + 7 мобильных экипажей с оружием и навыками спасателей.</p>
                                </div>
                            </div>
                            <div className='about-component__article-adv__item'>
                                <Icons.Chart className='about-component__icons icon_accent' />

                                <div className='about-component__article-adv__item__text'>
                                    <h4>Собственная техника и оружие</h4>
                                    <p>Видеонаблюдение, ПЦН, разрешение на огнестрельное оружие до 2027 г.</p>
                                </div>
                            </div>
                            <div className='about-component__article-adv__item'>
                                <Icons.Tech className='about-component__icons icon_accent' />

                                <div className='about-component__article-adv__item__text'>
                                    <h4>Прозрачность и контроль
                                    </h4>
                                    <p>Проверка персонала, ежедневные инструктажи, отчёты по запросу с полной статистикой.</p>
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