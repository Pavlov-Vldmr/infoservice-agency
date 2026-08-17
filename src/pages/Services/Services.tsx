import { useFetch } from "@/hooks/useFetch";
import { fetchCompanyServices } from "@/services/services";
import { getStrapiMediaUrl } from "@/services/strapiClient";
import PageTitle from "../../components/PageTitle/PageTitle"
import ServiceCard from "./components/ServiceCard/ServiceCard"
import './Services.scss'

function Services() {

    const { data: services, loading, error } = useFetch(fetchCompanyServices);

    if (loading) return <div>Загрузка сервисов...</div>;
    if (error) return <div>Ошибка: {error}</div>;
    if (services.length === 0) return <div>Сервисы не найдены</div>;

    console.log(services[0].img)

    return (
        <>
            <PageTitle title="Наши услуги" subTitle="Комплексные решения по обеспечению безопасности вашей недвижимости" />

            <section className="services">
                <div className="container services__container  p-10 m_p-4">
                    {services.map(item => (
                        <>

                            <ServiceCard
                                key={item.documentId || item.id}
                                title={item.title}
                                text={item.text}
                                link={item.link}
                                price={item.price}
                                imgURL={getStrapiMediaUrl(item.img?.url)}
                            />
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Services
