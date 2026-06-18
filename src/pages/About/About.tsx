import AboutComponent from "@/components/AboutComonent/AboutComonent"
import PageTitle from "../../components/PageTitle/PageTitle"
import './About.scss'

function About() {


    return (
        <>
            <PageTitle title="О компании ИнфоСервис" subTitle="Профессиональная охрана недвижимости с 2010 года" />
            <section className="about-info py-20">
                <AboutComponent />
            </section>
            <section className="about-sertificate py-20">
                <div className="container about-sertificate__container p-8">
                    <div className="about-sertificate__title">
                        <h2 className=" mb-4">Лицензии и сертификаты</h2>
                        <p className="text_muted py-4">ООО "ИнфоСервис" имеет все необходимые лицензии для осуществления частной охранной деятельности. Наша компания полностью застрахована, что гарантирует безопасность ваших объектов.</p>
                    </div>
                    <div className="about-sertificate__list">
                        <div className="about-sertificate__list__item">
                            <p>Лицензия на охранную деятельность</p>
                            <p>Свидетельство о государственной регистрации</p>
                        </div>
                        <div className="about-sertificate__list__item">
                            <p >Лицензия на охранную деятельность</p>
                            <p>Свидетельство о государственной регистрации</p>
                        </div>
                        <div className="about-sertificate__list__item">
                            <p>Лицензия на охранную деятельность</p>
                            <p>Свидетельство о государственной регистрации</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
