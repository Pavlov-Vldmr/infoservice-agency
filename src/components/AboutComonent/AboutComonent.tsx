
import type { ComponentType } from "react";
import ReactCountUp from "react-countup";

import guardian from '../../assets/images/security.jpg'
import { Icons } from '../Icons'
import AnimatedContent from "../ReactBits/AnimatedContent/AnimatedContent";
import FadeContent from "../ReactBits/FadeContent/FadeContent";

import './AboutComonent.scss'


function AboutComponent() {
    const CountUp = (ReactCountUp as { default?: ComponentType<unknown> }).default || ReactCountUp;
    const FadeContentDuraton: number = 2000
    const AnimContentDuraton: number = 1.4

    return (
        <div className='about-component'>
            <div className="container about-component__container p-10 m_p-4 m_pt-20">
                <div className='about-component__top'>
                    <div className='about-component__guardian mt-8 m_mt-0'>
                        <img src={guardian} alt="" />
                    </div>
                    <div className='about-component__article'>
                        <h2 className='mb-4'>О компании ООО "ИнфоСервис"</h2>

                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            duration={AnimContentDuraton}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                        >
                            <p>С 1997г. более 1000 объектов на территории Сахалинской области охраняется с помощью физической охраны и технических средств.</p>

                        </AnimatedContent>
                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            duration={AnimContentDuraton}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                        >
                            <p>Компания оказывает полный спектр охранных услуг круглосуточно, включая физическую и вооруженную охрану объектов, мониторинг с помощью технических средств, а также сопровождение грузов при транспортировке. Штат насчитывает 184 лицензированных сотрудника, предприятие имеет разрешение на хранение и использование огнестрельного оружия до 2027 года и действующую лицензию на охранную деятельность до 2029 года.</p>

                        </AnimatedContent>
                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            duration={AnimContentDuraton}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                        >
                            <p>Предприятие работает на рынке Сахалинской области 28 лет, обслуживая более 1000 клиентов в крупных населенных пунктах региона (Южно-Сахалинск, Корсаков, Холмск, Ноглики и др.). За все время существования у компании отсутствуют задолженности перед бюджетами всех уровней и фондами, а также неисполненные обязательства перед заказчиками.</p>

                        </AnimatedContent>

                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            duration={AnimContentDuraton}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                        >
                            <p className='some__text text_muted mt-4'>Наша приверженность качеству и удовлетворенности клиентов сделала нас предпочтительным выбором для владельцев недвижимости, застройщиков и управляющих компаний по всему региону.</p>

                        </AnimatedContent>

                        <div className='about-component__article-adv mt-8'>
                            <FadeContent blur={true} duration={FadeContentDuraton} easing="ease-out" initialOpacity={0}>
                                <div className='about-component__article-adv__item'>
                                    <Icons.Shield className='about-component__icons icon_accent' />
                                    <div className='about-component__article-adv__item__text'>
                                        <h4>Надёжность и стаж</h4>
                                        <p>28 лет работы, 1000+ клиентов, отсутствие нарушений по всем проверкам.</p>
                                    </div>
                                </div>
                            </FadeContent>
                            <FadeContent blur={true} duration={FadeContentDuraton} easing="ease-out" initialOpacity={0}>
                                <div className='about-component__article-adv__item'>
                                    <Icons.Cube className='about-component__icons icon_accent' />
                                    <div className='about-component__article-adv__item__text'>
                                        <h4>Оперативность и вооружение</h4>
                                        <p>Круглосуточный мониторинг + 7 мобильных экипажей с оружием и навыками спасателей.</p>
                                    </div>
                                </div>
                            </FadeContent>
                            <FadeContent blur={true} duration={FadeContentDuraton} easing="ease-out" initialOpacity={0}>
                                <div className='about-component__article-adv__item'>
                                    <Icons.Chart className='about-component__icons icon_accent' />
                                    <div className='about-component__article-adv__item__text'>
                                        <h4>Собственная техника и оружие</h4>
                                        <p>Видеонаблюдение, ПЦН, разрешение на огнестрельное оружие до 2027 г.</p>
                                    </div>
                                </div>
                            </FadeContent>
                            <FadeContent blur={true} duration={FadeContentDuraton} easing="ease-out" initialOpacity={0}>
                                <div className='about-component__article-adv__item'>
                                    <Icons.Tech className='about-component__icons icon_accent' />

                                    <div className='about-component__article-adv__item__text'>
                                        <h4>Прозрачность и контроль
                                        </h4>
                                        <p>Проверка персонала, ежедневные инструктажи, отчёты по запросу с полной статистикой.</p>
                                    </div>
                                </div>
                            </FadeContent>
                        </div>
                    </div>
                </div>
                <div className="home-achievements-plates m_mt-8">
                    <div>
                        <Icons.Award className='home-achievements__icons icon_white' />
                        <h3><CountUp end={28} duration={4} suffix="+" enableScrollSpy={true}
                            scrollSpyOnce={true} /></h3>
                        <span>Лет</span>
                    </div>
                    <div>
                        <Icons.City className='home-achievements__icons icon_white' />
                        <h3><CountUp end={15} duration={4} suffix="+" enableScrollSpy={true}
                            scrollSpyOnce={true} /></h3>
                        <span>Городов</span>
                    </div>
                    <div>
                        <Icons.Guardian className='home-achievements__icons icon_white' />
                        <h3><CountUp end={184} duration={4} suffix="+" enableScrollSpy={true}
                            scrollSpyOnce={true} /></h3>
                        <span>Охранника</span>
                    </div>
                    <div>
                        <Icons.Client className='home-achievements__icons icon_white' />
                        <h3><CountUp end={1000} duration={4} suffix="+" enableScrollSpy={true}
                            scrollSpyOnce={true} /></h3>
                        <span>Клиентов</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent