import license from '@/assets/ServicesData/license.txt'
import AboutComponent from "@/components/AboutComonent/AboutComonent"

import PageTitle from "../../components/PageTitle/PageTitle"

import './About.scss'
import PhoneCallbackComponent from '@/components/PhoneCallbackComponent/PhoneCallbackComponent'
import CardNav from '@/components/ReactBits/CardNav/CardNav'
import bgImg from '@/assets/images/bg/about.avif'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import CompanyTimeline from './components/CompanyTimeline/CompanyTimeline'
import AnimatedContent from '@/components/ReactBits/AnimatedContent/AnimatedContent'
import MainActButton from '@/components/Buttons/MainActButton/MainActButton'
import { useState } from 'react'


const items = [
    {
        label: "About",
        textColor: "#fff",
        links: [
            { label: "Company", ariaLabel: "About Company", href: '/' },
        ],
        imageUrl: "/infoservice-agency/assets/images/estimates/1.png"
    },
    {
        label: "Projects",
        textColor: "#fff",
        links: [
            { label: "Featured", ariaLabel: "Featured Projects", href: '/' },
        ],
        imageUrl: "/infoservice-agency/assets/images/estimates/2.png"
    },
    {
        label: "Contact",
        textColor: "#fff",
        links: [
            { label: "Email", ariaLabel: "Email us", href: '/' },
        ],
        imageUrl: "/infoservice-agency/assets/images/estimates/3.png"
    },
    {
        label: "Contact2",
        textColor: "#fff",
        links: [
            { label: "Email", ariaLabel: "Email us", href: '/' },
        ],
        imageUrl: "/infoservice-agency/assets/images/estimates/4.png"
    },
    {
        label: "Contact3",
        textColor: "#fff",
        links: [
            { label: "Email", ariaLabel: "Email us", href: '/' },
        ],
        imageUrl: "/infoservice-agency/assets/images/estimates/5.png"
    }
];



function About() {

    const [isMobile, setIsMobile] = useState(false);


    const animDelay: number = .1
    const animDistance: number = 50
    const animDelayDesctop: number = .2
    const animDuration = isMobile ? .4 : .8;
    return (
        <>
            <PageTitle plate='О компании' bgImg={bgImg} title="Безопасность — наша профессия" subTitle="ЧОП «Инфосервис» более 16 лет обеспечивает охрану объектов Сахалинской области" />

            <section className="about-info pt-20 py-20 m_py-0">
                <AboutComponent />
            </section>

            <section className='about-btns m_px-4 m_py-10 pb-10'>
                <div className="container about-btns__container">
                    <AnimatedContent direction="horizontal"
                        reverse
                        distance={animDistance}
                        duration={animDuration}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={isMobile ? animDelay * 2 : animDelayDesctop * 2}>
                        <MainActButton
                            to="/infoservice-agency/services"
                            variant="primary"
                            title="Наши услуги"
                            bordered
                            type='mobile'
                        ></MainActButton>
                    </AnimatedContent>
                    <AnimatedContent direction="horizontal"
                        reverse
                        distance={animDistance / 2}
                        duration={animDuration}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={isMobile ? animDelay * 3 : animDelayDesctop * 3}>
                        <MainActButton
                            to="/infoservice-agency/contacts"
                            variant="gold"
                            title="Связаться с нами"
                            bordered
                            type='mobile'

                        ></MainActButton>
                    </AnimatedContent>
                </div>


            </section>

            <section className="about-timeline px-8 m_px-4 pb-10  bg_gradient-circle ">
                <div className="container about-timeline__container">
                    <SectionTitle
                        plate={"История"}
                        plateColor='text_gold'
                        title={"Наш путь"}
                        pColor='text_white-8'
                        text={"Ключевые этапы развития компании с момента основания"}
                        hColor='text_white'
                    />
                    < CompanyTimeline />

                </div>
            </section>


            <section className='  bg_white m_p-4 pt-10 m_mt-10'>
                <div className="container">
                    <CardNav
                        logoAlt="Благодарственные письма"
                        items={items}
                        baseColor="#7fdcf900"
                        menuColor="#f6f2f2"
                        buttonBgColor="#111"
                        buttonTextColor="#fff"
                        ease="power3.out"
                        theme="color" logo={''}
                    />
                </div>
            </section>

            <section className="about-sertificate py-10 ">
                <div className="container about-sertificate__container p-8 m_p-4">
                    <div className="about-sertificate__title mb-12">
                        <h2 className="text_primary mb-4 m_mt-4">Лицензии и сертификаты</h2>
                        <p className="text_muted py-4">ООО "ИнфоСервис" имеет все необходимые лицензии для осуществления частной охранной деятельности. Наша компания полностью застрахована, что гарантирует безопасность ваших объектов.</p>
                    </div>
                    <div className="about-sertificate__list ">
                        <div className="about-sertificate__list__item">
                            <a href={license} download={'license.txt'}>Лицензия на охранную деятельность</a>
                            <p>Свидетельство о государственной регистрации</p>
                        </div>
                        <div className="about-sertificate__list__item">
                            <a href={license} download={'license.txt'}>Лицензия на охранную деятельность</a>
                            <p>Свидетельство о государственной регистрации</p>
                        </div>
                        <div className="about-sertificate__list__item">
                            <a href={license} download={'license.txt'}>Лицензия на охранную деятельность</a>
                            <p>Свидетельство о государственной регистрации</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pb-10 m_px-4 m_pt-4 bg_white'>
                <div className="container">
                    <PhoneCallbackComponent className='about-pcb border_radius ' />
                </div>
            </section>


        </>
    )
}

export default About
