
import { useEffect, useState, type ComponentType } from "react";
import ReactCountUp from "react-countup";

import guardian from '../../assets/images/security.jpg'
import { Icons } from '../Icons'
import AnimatedContent from "../ReactBits/AnimatedContent/AnimatedContent";
import FadeContent from "../ReactBits/FadeContent/FadeContent";

import './AboutComponent.scss'
import MainActButton from "../Buttons/MainActButton/MainActButton";
import DriftWall from "../ReactBits/DriftWall/DriftWall";


function AboutComponent(props: { className?: string }) {

    const items = [
        { image: 'https://picsum.photos/id/617/600/400', title: 'Peaks', href: 'https://example.com/one' },
        { image: 'https://picsum.photos/id/668/600/400', title: 'Falls', href: 'https://example.com/fs' },
        { image: 'https://picsum.photos/id/983/600/400', title: 'Pup', href: 'https://example.com/two' },
        { image: 'https://picsum.photos/id/1033/600/400', title: 'Falls', href: 'https://example.com/three' },
    ];
    const CountUp = (ReactCountUp as { default?: ComponentType<unknown> }).default || ReactCountUp;
    const FadeContentDuraton: number = 2000
    const AnimContentDuraton: number = 1.4

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Функция для проверки ширины экрана
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // 768px — стандартный порог для мобильных
        };

        // Проверяем при монтировании компонента
        handleResize();

        // Вешаем слушатель на изменение размера окна
        window.addEventListener('resize', handleResize);

        // Очищаем слушатель при размонтировании
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    // const animDelay: number = .1
    // const animDistance: number = 50
    // const animDelayDesctop: number = .2
    // const animDuration = isMobile ? .4 : .8;

    return (
        <div className={`${props.className} about-component`}>
            <div className="container about-component__container px-10 m_p-4">
                <div className='about-component__top'>
                    <div className='about-component__driftwall mt-8 m_mt-0'>
                        {/* <img src={guardian} alt="" /> */}
                        <div className="about-component__driftwall-plate">

                            <div className="about-component__driftwall-plate-icon">
                                <Icons.Shield className='about-component__icons icon_gold' />
                            </div>

                            <div className='about-component__driftwall-plate__text'>
                                <h4>Гос. лицензия</h4>
                                <p>действует с 2010 года</p>
                            </div>

                        </div>
                        <DriftWall
                            items={items}
                            columns={isMobile ? 1 : 2}
                            tileWidth={280}
                            tileHeight={214}
                            gap={18}
                            tilt={isMobile ? 0 : 14}
                            turn={isMobile ? 0 : -10}
                            perspective={1550}
                            depth={120}
                            speed={isMobile ? 10 : 4}
                            direction="down"
                            variance={.3}
                            parallax={isMobile ? 0 : 0.6}
                            lift={isMobile ? 0 : 32}
                            fade={.2}
                            dim={1}
                            overlayColor=""
                            radius={8}
                            roll={0}
                            pauseOnHover={isMobile ? false : false}
                            grayscale={false}
                        />
                        <div className="about-component__driftwall-plate-year">
                            <div className='about-component__driftwall-plate-year__text'>
                                <h4>16+</h4>
                                <p>лет на рынке охраны</p>
                            </div>

                        </div>

                    </div>
                    <div className='about-component__article'>
                        <h2 className='mb-8'>О компании ООО "ИнфоСервис"</h2>

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
                            <p className='some__text text_muted mt-4 '>Наша приверженность качеству и удовлетворенности клиентов сделала нас предпочтительным выбором для владельцев недвижимости, застройщиков и управляющих компаний по всему региону.</p>

                        </AnimatedContent>


                    </div>


                </div>
                <div className='about-component__article-adv mt-8'>
                    <FadeContent blur={true} duration={FadeContentDuraton} easing="ease-out" initialOpacity={0}>
                        <div className='about-component__article-adv__item'>
                            <div className="about-component__article-adv__item-icon">
                                <Icons.Shield className='about-component__icons icon_accent' />
                            </div>

                            <div className='about-component__article-adv__item__text'>
                                <h4>Надёжность и стаж</h4>
                                <p>28 лет работы, 1000+ клиентов, отсутствие нарушений по всем проверкам.</p>
                            </div>
                        </div>
                    </FadeContent>
                    <FadeContent blur={true} duration={FadeContentDuraton} easing="ease-out" initialOpacity={0}>
                        <div className='about-component__article-adv__item'>
                            <div className="about-component__article-adv__item-icon">
                                <Icons.Cube className='about-component__icons icon_accent' />
                            </div>

                            <div className='about-component__article-adv__item__text'>
                                <h4>Оперативность и вооружение</h4>
                                <p>Круглосуточный мониторинг + 7 мобильных экипажей с оружием и навыками спасателей.</p>
                            </div>
                        </div>
                    </FadeContent>
                    <FadeContent blur={true} duration={FadeContentDuraton} easing="ease-out" initialOpacity={0}>
                        <div className='about-component__article-adv__item'>
                            <div className="about-component__article-adv__item-icon">
                                <Icons.Chart className='about-component__icons icon_accent' />
                            </div>

                            <div className='about-component__article-adv__item__text'>
                                <h4>Собственная техника и оружие</h4>
                                <p>Видеонаблюдение, ПЦН, разрешение на огнестрельное оружие до 2027 г.</p>
                            </div>
                        </div>
                    </FadeContent>
                    <FadeContent blur={true} duration={FadeContentDuraton} easing="ease-out" initialOpacity={0}>
                        <div className='about-component__article-adv__item'>
                            <div className="about-component__article-adv__item-icon">
                                <Icons.Tech className='about-component__icons icon_accent' />
                            </div>


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
    )
}

export default AboutComponent