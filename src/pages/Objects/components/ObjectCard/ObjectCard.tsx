import "./ObjectCard.scss"

function ObjectCard(props: { title?: string, text?: string, imgURL?: string, imgTitle?: string, square?: string, guardians?: string, since?: string }) {
    console.log("url " + props.imgURL);

    return (
        <>
            <div className="object-card">
                <span className="pseudo p-1 text_center">{props.imgTitle}</span>

                <img src={props.imgURL} className="object-card__img " style={{ '--pseudo-text': `${props.imgTitle}` } as React.CSSProperties}>
                </img>

                <div className="object-card__content p-8 m_p-4">
                    <h3 className="text_primary mb-2 mt-4 m_mt-2">{props.title}</h3>
                    <p className="text text_muted mb-4 m_mb-8">{props.text}</p>
                    <div className="object-card__content__info">
                        {props.square && (
                            <div className="info-value">
                                <span className="text_muted">Площадь:</span>
                                <span className="text_primary">{props.square + 'm2'}</span>
                            </div>
                        )}
                        {props.guardians && (
                            <div className="info-value">
                                <span className="text_muted">Охранников:</span>
                                <span className="text_primary">{props.guardians}</span>
                            </div>
                        )}
                        {props.since && (
                            <div className="info-value">
                                <span className="text_muted">Охраняем с:</span>
                                <span className="text_primary">{props.since}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>




        </>
    )
}

export default ObjectCard
