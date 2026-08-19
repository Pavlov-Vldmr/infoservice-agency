import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

import ErrorBoundary from "@/components/common/ErrorBoundary"
import PhoneCallbackComponent from "@/components/PhoneCallbackComponent/PhoneCallbackComponent"
import YandexMap from "@/services/yandexMap"

import ContactsInfo from "../../components/ContactsInfo/ContactsInfo"
import PageTitle from "../../components/PageTitle/PageTitle"

import './Contacts.scss'

function Contacts() {

    const location = useLocation();
    // const { companyInfo } = useCompany();
    // const { city: cityC } = useCity();
    const targetRef = useRef(null);

    useEffect(() => {
        if (location.state?.scrollToSection && targetRef.current) {
            const element = document.getElementById('callBackForm');
            console.log(element)
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offset = 100;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }, [location]);

    return (
        <>
            <PageTitle title="Контакты" subTitle="Свяжитесь с нами любым удобным способом " />
            <section className="contacts">
                <div className="container contacts__container  p-10 m_p-4">
                    <div className="contacts__content m_py-8" ref={targetRef}>
                        {/* <a href="" className="test text_primary">{companyInfo?.city[cityC].name}</a> */}
                        <ContactsInfo />
                        <div className="contacts__map pb-8  ">
                            <div className="container contacts__map__container ">
                                <h2 className="text_primary px-8 pt-8 ">Карта проезда</h2>
                                <div className="map__element p-8 ">
                                    <ErrorBoundary fallback={<div>Ошибка при загрузке карты или компонента!</div>}>
                                        <YandexMap />
                                    </ErrorBoundary>
                                </div>
                            </div>
                            <PhoneCallbackComponent />
                        </div>
                        {/* <FeedbackForm /> */}
                    </div>


                </div>
            </section>


        </>
    )
}

export default Contacts
