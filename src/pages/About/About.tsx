import license from '@/assets/ServicesData/license.txt'
import AboutComponent from "@/components/AboutComonent/AboutComonent"

import PageTitle from "../../components/PageTitle/PageTitle"

import './About.scss'
import PhoneCallbackComponent from '@/components/PhoneCallbackComponent/PhoneCallbackComponent'
import CardNav from '@/components/ReactBits/CardNav/CardNav'

const items = [
    {
        label: "About",
        textColor: "#fff",
        links: [
            { label: "Company", ariaLabel: "About Company", href: '/' },
        ],
        imageUrl: "/infoservice-agency/src/assets/images/estimates/1.png"
    },
    {
        label: "Projects",
        textColor: "#fff",
        links: [
            { label: "Featured", ariaLabel: "Featured Projects", href: '/' },
        ],
        imageUrl: "/infoservice-agency/src/assets/images/estimates/2.png"
    },
    {
        label: "Contact",
        textColor: "#fff",
        links: [
            { label: "Email", ariaLabel: "Email us", href: '/' },
        ],
        imageUrl: "/infoservice-agency/src/assets/images/estimates/3.png"
    },
    {
        label: "Contact2",
        textColor: "#fff",
        links: [
            { label: "Email", ariaLabel: "Email us", href: '/' },
        ],
        imageUrl: "/infoservice-agency/src/assets/images/estimates/4.png"
    },
    {
        label: "Contact3",
        textColor: "#fff",
        links: [
            { label: "Email", ariaLabel: "Email us", href: '/' },
        ],
        imageUrl: "/infoservice-agency/src/assets/images/estimates/5.png"
    }
];

function About() {


    return (
        <>
            <PageTitle title="О компании ИнфоСервис" subTitle="Профессиональная охрана недвижимости с 2010 года" />


            <section className=' py-20 bg_white m_p-4'>
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

            <section className="about-info pt-20 m_py-0">
                <AboutComponent />
            </section>





            <section className=' m_px-4 m_pt-8 bg_white'>
                <div className="container">
                    <PhoneCallbackComponent className='' />
                </div>
            </section>


            <section className="about-sertificate py-10">
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





        </>
    )
}

export default About
