import { Link } from "react-router-dom"
import { Icons } from "@/components/Icons"

import './ServiceCard.scss'

function ServiceCard(props: { title: string, about: string, link: string }) {
    return (
        <>
            <Link to={`/infoservice-agency/services/${props.link}`} className="service-card"  >
                <div className="service-card__img">
                    <Icons.Camera className="service-card__img__icon p-2" />
                </div>
                <div className="service-card__content p-8">
                    <h3 className="text_primary mb-2">{props.title}</h3>
                    <p className="text text_muted mb-4">{props.about}</p>
                    <span className="service-card_link">Подробнее</span>
                </div>
            </Link>
        </>
    )
}

export default ServiceCard
