import ErrorBoundary from "@/components/common/ErrorBoundary"
import ContactsInfo from "../../components/ContactsInfo/ContactsInfo"
import PageTitle from "../../components/PageTitle/PageTitle"
import FeedbackForm from "../../features/FeedbackForm/FeedbackForm"
import './Contacts.scss'
import YandexMap from "@/services/yandexMap"
import { useLocation } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { fetchCompanyInfo } from '@/services/api'

function Contacts() {

    const location = useLocation();
    const targetRef = useRef(null);

    useEffect(() => {
        // Проверяем, перешли ли мы с нужным флагом
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


    interface CompanyInfo {
        id: number;
        documentId: string;
        companyId: string;
        phoneMain: string;
        phoneAdd: string;
        mailMain: string;
        mailSupport: string;
        location: string;
        workTime: string;
    }

    const [datas, setDatas] = useState<CompanyInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadCompanyInfo = async () => {
            try {
                const data = await fetchCompanyInfo();
                setDatas(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load data');
            } finally {
                setLoading(false);
            }
        };

        loadCompanyInfo();
    }, []);
    console.log('str')
    console.log(datas)


    // if (loading) return <div>Loading data...</div>;
    // if (error) return <div>Error: {error}</div>;
    return (
        <>
            <PageTitle title="Контакты" subTitle="Свяжитесь с нами любым удобным способом " />
            <div className="contacts">
                <div className="container contacts__container">
                    <div className="contacts__content" ref={targetRef}>
                        <a href="" className="test text_primary">123{datas?.phoneMain}</a>
                        <ContactsInfo />
                        <FeedbackForm />
                    </div>
                </div>
            </div>
            <div className="contacts__map pb-8 px-4 m_px-4">

                <div className="container contacts__map__container ">
                    <h2 className="text_primary px-8 pt-8 m_px-4">Карта проезда</h2>

                    <div className="map__element p-8 m_p-4">
                        <ErrorBoundary fallback={<div>Ошибка при загрузке карты или компонента!</div>}>
                            <YandexMap />
                        </ErrorBoundary>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts
