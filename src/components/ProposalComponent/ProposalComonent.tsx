
import MainActButton from '../Buttons/MainActButton/MainActButton'
import './ProposalComonent.scss'


function ProposalComonent() {


    return (
        <>
            <div className="container proposal__container  p-10 m_p-4">
                <h2 className="text_center text_white mb-6 m_mt-4">Хотите, чтобы ваш объект был под надежной охраной?</h2>
                <p className="text_center text_white mb-10 m_mb-8 m_px-8">Закажите услугу онлайн или свяжитесь с нами для обсуждения условий</p>
                <div className="proposal__buttons">
                    <MainActButton variant='white' title="Заказать онлайн"></MainActButton>
                    <MainActButton variant="primary" title="Наши услуги" bordered ></MainActButton>
                </div>
            </div>

        </>
    )
}

export default ProposalComonent