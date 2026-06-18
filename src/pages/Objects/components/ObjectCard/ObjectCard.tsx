import "./ObjectCard.scss"

function ObjectCard() {


    return (
        <>
            <div className="object-card">
                <div className="object-card__img p-4">
                    <span className="text_white p-2">Жилой комплекс</span>
                </div>
                <div className="object-card__content p-8 m_p-4">
                    <h3 className="text_primary mb-2 mt-4 m_mt-2">ЖК "Золотые Купола"</h3>
                    <p className="text text_muted mb-4 m_mb-8">Круглосуточная охрана жилого комплекса премиум-класса. Контроль территории, парковок и входных групп.</p>
                    <div className="object-card__content__info">
                        <div className="info-value">
                            <span className="text_muted">Площадь:</span>
                            <span className="text_primary">8 000 м²</span>
                        </div>
                        <div className="info-value">
                            <span className="text_muted">Охранников:</span>
                            <span className="text_primary">6 человек</span>
                        </div>
                        <div className="info-value">
                            <span className="text_muted">Охраняем с:</span>
                            <span className="text_primary">2020 года</span>
                        </div>

                    </div>
                </div>
            </div>




        </>
    )
}

export default ObjectCard
