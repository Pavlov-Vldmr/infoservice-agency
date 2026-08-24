import CountUp from "react-countup";
import type { ComponentType, ReactNode } from 'react';

import ReactCountUp from "react-countup";

import "./ObjectCard.scss";
import { Icons } from "@/components/Icons";

function ObjectCard(props: {
  title?: string;
  text?: string;
  imgURL?: string;
  imgTitle?: string;
  square?: string;
  guardians?: string;
  since?: string;
}) {
  console.log("url " + props.imgURL);
  const CountUp = (ReactCountUp as { default?: ComponentType<unknown> }).default || ReactCountUp;


  const sq = Number(props.square)

  return (
    <>
      <div className="object-card">
        <span className="pseudo p-1 text_center">                        <Icons.Reputation className="icon_white" height={20} width={20} />
          {props.imgTitle}</span>

        <img
          src={props.imgURL}
          className="object-card__img "
          style={
            { "--pseudo-text": `${props.imgTitle}` } as React.CSSProperties
          }
        ></img>

        <div className="object-card__content p-8 m_p-4">
          <h3 className="text_primary mb-2 mt-4 m_mt-2">{props.title}</h3>
          <p className="text text_muted mb-4 m_mb-8 pt-4">{props.text}</p>
          <div className="object-card__content__info">
            {props.square && (
              <div className="info-value">
                <span className="text_muted info-value__title">площадь</span>
                <CountUp className="text_primary info-value__value" end={Number(props.square)} duration={4} />
                {/* <span className="text_primary info-value__value">{props.square}</span> */}
              </div>
            )}
            {props.guardians && (
              <div className="info-value">
                <span className="text_muted info-value__title">охранников</span>
                <CountUp className="text_primary info-value__value" end={Number(props.guardians)} duration={4} />
                {/* <span className="text_primary info-value__value">{props.guardians}</span> */}
              </div>
            )}
            {props.since && (
              <div className="info-value">
                <span className="text_muted info-value__title">охраняем с</span>
                <CountUp className="text_primary info-value__value" end={Number(props.since)} duration={4} separator="" />
                {/* <span className="text_primary info-value__value ">{props.since}</span> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ObjectCard;
