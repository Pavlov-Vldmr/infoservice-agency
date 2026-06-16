import { Link } from "react-router-dom"
import { Icons } from "@/components/Icons"

import './ServiceCard.scss'
function ServiceCard(props: { title: string, about: string, link: string }) {
    return (
        <>
            <div className="service-card">
                {/* <div className="service-card__container"> */}
                <div className="service-card__img">
                    {/* <Icon name="service" size={40} /> */}
                </div>
                <div className="service-card__content">
                    <h3 className="text_primary">{props.title}</h3>
                    <p className="text text_muted">{props.about}</p>
                    <Link to={`/Services/${props.link}`} className="service-card_link">Подробнее</Link>
                    <Icons.Camera />
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default ServiceCard
