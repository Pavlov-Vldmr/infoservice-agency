// import { Link } from "react-router-dom"
import data from '../../assets/ServicesData/generatedData.json'
import PageTitle from "../../components/PageTitle/PageTitle"
import ServiceCard from "./components/ServiceCard/ServiceCard"
import './Services.scss'

// const navigate = useNavigate();

// const handleBlockClick = (event: React.MouseEvent<HTMLDivElement>) => {
//     console.log('Блок был нажат!', event.currentTarget);
//     navigate(`/Services/${props.link}`);
// };


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
