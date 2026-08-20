
import "./ServiceCard.scss";

function ServiceCard(props: {
  title: string;
  text: string;
  link?: string;
  price: number;
  imgURL?: string;
}) {
  return (
    <>
      <div className="service-card">
        {/* <Link to={`/infoservice-agency/services/${props.link}`} className="service-card"  > */}
        <div className="service-card__img">
          <img src={props.imgURL}>
            {/* <Icons.Camera className="service-card__img__icon p-2" /> */}
          </img>
        </div>

        <div className="service-card__content p-8">
          <h3 className="text_primary mb-2">{props.title}</h3>
          <p className="text text_muted mb-4">{props.text}</p>
          {/* <span className="service-card_link">Подробнее</span> */}
          <span className="service-card_price">{props.price} руб.</span>
        </div>
        {/* </Link> */}
      </div>
    </>
  );
}

export default ServiceCard;
