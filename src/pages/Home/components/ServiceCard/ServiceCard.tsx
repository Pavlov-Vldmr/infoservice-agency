import "./ServiceCard.scss";
import { Icons } from "@/components/Icons";

function ServiceCard(props: { title: string; text: string }) {
  return (
    <>
      <div className="home-services__items__item">
        <Icons.ShieldAlt className="item__icons icon_accent" />
        <h3>{props.title}</h3>
        <p className="text_muted">{props.text}</p>
      </div>
    </>
  );
}

export default ServiceCard;
