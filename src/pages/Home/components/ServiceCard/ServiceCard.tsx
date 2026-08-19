import type { ReactNode } from "react";

import "./ServiceCard.scss";

function ServiceCard(props: { title: string; text: string; icon: ReactNode }) {
  return (
    <>
      <div className="home-services__items__item">
        {props.icon && (
          <div className="item__icon">
            {props.icon}  </div>
        )}
        <h3>{props.title}</h3>
        <p className="text_muted">{props.text}</p>

      </div>
    </>
  );
}

export default ServiceCard;
