import MainActButton from "@/components/Buttons/MainActButton/MainActButton"
import PageTitle from "../../components/PageTitle/PageTitle"
import ObjectCard from "./components/ObjectCard/ObjectCard"

import './Objects.scss'


function Objects() {


    return (
        <>
            <PageTitle title="Наши объекты" subTitle="Примеры охраняемых объектов и реализованных проектов" />
            <section className="objects">
                <div className="container objects__container p-10 m_p-4">
                    {/* <div className="objects__items"> */}
                    <ObjectCard />
                    <ObjectCard />
                    <ObjectCard />
                    <ObjectCard />
                    <ObjectCard />

                    {/* </div> */}
                </div>
            </section>
            <section className="objects-proposal pb-8 px-8 m_px-4">
                <div className="container objects-proposal__container  p-10 m_p-4">
                    <h2 className="text_center text_white mb-6 m_mt-4">Хотите, чтобы ваш объект был под надежной охраной?</h2>
                    <p className="text_center text_white mb-10 m_mb-8 m_px-8">Закажите услугу онлайн или свяжитесь с нами для обсуждения условий</p>
                    <div className="objects-proposal__buttons">
                        <MainActButton variant='white' title="Заказать онлайн"></MainActButton>
                        <MainActButton variant="primary" title="Наши услуги" bordered ></MainActButton>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Objects
