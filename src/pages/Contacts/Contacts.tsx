import ContactsInfo from "../../components/ContactsInfo/ContactsInfo"
import PageTitle from "../../components/PageTitle/PageTitle"
import FeedbackForm from "../../features/FeedbackForm/FeedbackForm"
import './Contacts.scss'

function Contacts() {


    return (
        <>
            <PageTitle title="Контакты" subTitle="Свяжитесь с нами любым удобным способом" />
            <div className="contacts">
                <div className="container contacts__container">

                    <div className="contacts__content">
                        <ContactsInfo />
                        <FeedbackForm />
                    </div>
                </div>
            </div>
            <div className="map">
                <div className="container map__container">
                    <h2 className="text_primary">Карта проезда</h2>
                </div>
            </div>
        </>
    )
}

export default Contacts
