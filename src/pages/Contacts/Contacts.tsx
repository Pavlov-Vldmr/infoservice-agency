import ErrorBoundary from "@/components/common/ErrorBoundary"
import ContactsInfo from "../../components/ContactsInfo/ContactsInfo"
import PageTitle from "../../components/PageTitle/PageTitle"
import FeedbackForm from "../../features/FeedbackForm/FeedbackForm"
import './Contacts.scss'
import YandexMap from "@/services/yandexMap"
import { useLocation } from "react-router-dom"
import { useEffect, useRef } from "react"
import { useCompany } from "@/contexts/CompanyInfoContext"
import { useCity } from "@/contexts/CityContext"

// const API_TOKEN = import.meta.env.VITE_API_TOKEN;

function Contacts() {

    const location = useLocation();
    const { companyInfo } = useCompany();
    const { city: cityC } = useCity();
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
    // const key = city as keyof typeof companyInfo.city;

    // console.log(companyInfo?.city[city])
    // if (companyInfo?.city && city in companyInfo?.city) {
    //     // TypeScript теперь знает, что city — валидный ключ
    //     const key = city as keyof typeof companyInfo.city;
    //     console.log(companyInfo?.city[key].name);
    // } else {
    //     // console.log('Такой город не найден');
    // }

    //  interface Iitems {
    //     address: string;
    //     id: number;
    //     name: string;
    //     phone: string;
    //     url: string;
    //     workTime: string;
    // }
    // const [items, setItems] = useState<Iitems[]>([]);
    // useEffect(() => {
    //     if (!city) return;

    //     const url = `http://localhost:1337/api/company-info?populate[city][populate]=*`;

    //     fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Bearer ${API_TOKEN}`,
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //         .then(res => {
    //             if (!res.ok) throw new Error(`Ошибка сети: ${res.status}`);
    //             return res.json();
    //         })
    //         .then(response => {
    //             const cityData = response.data?.city?.[city] || [];
    //             const formattedData = cityData ? (Array.isArray(cityData) ? cityData : [cityData]) : [];
    //             setItems(formattedData);
    //         })
    //         .catch(err => console.error("Ошибка при фильтрации данных:", err));

    // }, [city]);
    // console.log(cityC)
    return (
        <>
            <PageTitle title="Контакты" subTitle="Свяжитесь с нами любым удобным способом " />
            <div className="contacts">
                <div className="container contacts__container">
                    <div className="contacts__content" ref={targetRef}>
                        {/* <a href="" className="test text_primary">{items?.[0]?.name}</a> */}
                        {/* <a href="" className="test text_primary">{items?.[0]?.address}</a> */}
                        {/*  */}
                        <a href="" className="test text_primary">{companyInfo?.city[cityC].name}</a>
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
