
import MainActButton from "@/components/Buttons/MainActButton/MainActButton";
import "./ServicesCard.scss";

function ServicesCard(props: {
  title: string;
  text?: string;
  link?: string;
  price: string;
  imgURL?: string;
}) {
  return (
    <>
      <div className="service-card">
        {/* <Link to={`/services/${props.link}`} className="service-card"  > */}
        <div className="service-card__img">
          <img src={props.imgURL}>
            {/* <Icons.Camera className="service-card__img__icon p-2" /> */}
          </img>
        </div>

        <div className="service-card__content p-8">
          <div className="service-card__content__info">
            <h3 className="text_primary m_mt-4 pb-8">{props.title}</h3>
            {/* <p className="text text_muted mt-8 mb-10 m_mb-0 m_mt-4">{props.text}</p> */}
          </div>
          <div className="service-card__content__price m_mt-10 m_pb-4 m_pt-8">
            <div className="service-card__content__price-text pt-8 m_pt-2">
              <span className="service-card_subtitle text_muted">Стоимость</span>
              <span className="service-card_price pt-2">{props.price} руб.</span>
            </div>
            <div className="service-card__content__price-order">
              <MainActButton to="" title="Заказать" variant="primary"

                bordered
                type='mobile' />
            </div>

          </div>

        </div>
        {/* </Link> */}
      </div>
    </>
  );
}

export default ServicesCard;
