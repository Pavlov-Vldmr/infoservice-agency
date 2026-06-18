import ContactsInfo from "../../components/ContactsInfo/ContactsInfo"
import PageTitle from "../../components/PageTitle/PageTitle"
import FeedbackForm from "../../features/FeedbackForm/FeedbackForm"
import './Contacts.scss'
import YandexMap from "@/services/yandexMap"

function Contacts() {


    return (
        <>
            <PageTitle title="Контакты" subTitle="Свяжитесь с нами любым удобным способом " />
            <div className="contacts">
                <div className="container contacts__container">

                    <div className="contacts__content">
                        <ContactsInfo />
                        <FeedbackForm />
                    </div>
                </div>
            </div>
            <div className="contacts__map pb-8 m_px-4">

                <div className="container contacts__map__container">
                    <h2 className="text_primary px-8 pt-8 m_px-4">Карта проезда</h2>

                    <div className="map__element p-8 m_p-4">
                        <YandexMap />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts
