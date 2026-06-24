// import { Link } from "react-router-dom"
import data from '../../assets/ServicesData/generatedData.json'
import PageTitle from "../../components/PageTitle/PageTitle"
import ServiceCard from "./components/ServiceCard/ServiceCard"
import './Services.scss'

function Services() {
    return (
        <>
            <PageTitle title="Наши услуги" subTitle="Комплексные решения по обеспечению безопасности вашей недвижимости" />

            <section className="services">
                <div className="container services__container  p-10 m_p-4">
                    {data.map(item => (
                        <>
                            <ServiceCard title={item.title} about={item.about} link={item.link} />
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Services
