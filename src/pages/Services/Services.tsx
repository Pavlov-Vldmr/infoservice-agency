import { Link } from "react-router-dom"
import data from '../../assets/ServicesData/generatedData.json'
import PageTitle from "../../components/PageTitle/PageTitle"
import ServiceCard from "./components/ServiceCard/ServiceCard"
import './Services.scss'

function Services() {
    return (
        <>
            <PageTitle title="Наши услуги" subTitle="Комплексные решения по обеспечению безопасности вашей недвижимости" />

            <div className="services">
                <div className="container services__container">
                    {data.map(item => (
                        <>
                            {/* <div style={
                        {
                            border: '1px solid white',
                            width: '500px',
                            margin: '20px'
                        }
                    }>
                        <Link key={item._id} to={`/Services/${item.link}`}>
                            {item.title}
                        </Link>
                        <p>{item.about}</p>
                    </div> */}

                            <ServiceCard key={item._id} title={item.title} about={item.about} link={item.link} />


                        </>
                    ))}
                </div>
            </div>


        </>
    )
}

export default Services
