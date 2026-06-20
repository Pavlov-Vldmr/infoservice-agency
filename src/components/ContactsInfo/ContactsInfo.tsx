
import './ContactsInfo.scss'
import data from '../../assets/ServicesData/companyInfo.json'
import { Icons } from '../Icons'


function ContactsInfo() {


    return (
        <>
            {data.map(item => (
                <>
                    <div className="contacts__block p-0">
                        <div className="contacts__block__items">
                            <div className='contacts__block__item'>
                                <Icons.Clock className="contacts__icon icon_accent" width={20} hanging={20} />
                                <div className='item__info'>
                                    <h4>Phone</h4>
                                    <span className='text_muted'>{item.phone.main}</span>
                                    <span className='text_muted'>{item.phone.add}</span>

                                </div>
                            </div>
                            <div className='contacts__block__item'>
                                <Icons.Clock className="contacts__icon icon_accent" width={20} hanging={20} />
                                <div className='item__info'>
                                    <h4>Phone</h4>
                                    <span className='text_muted'>{item.mail.main}</span>
                                    <span className='text_muted'>{item.mail.support}</span>
                                    <span className="text_accent">Круглосуточная линия</span>
                                </div>
                            </div>
                            <div className='contacts__block__item'>
                                <Icons.Clock className="contacts__icon icon_accent" width={20} hanging={20} />
                                <div className='item__info'>
                                    <h4>Phone</h4>
                                    <span className='text_muted'>{item['ofice-location']}</span>
                                </div>
                            </div>
                            <div className='contacts__block__item'>
                                <Icons.Clock className="contacts__icon icon_accent" width={20} hanging={20} />
                                <div className='item__info'>
                                    <h4>Phone</h4>
                                    <span className='text_muted'>{item['work-time']}</span>
                                    <span className="text_accent">Служба охраны 24/7</span>

                                </div>
                            </div>
                        </div>
                        <div className="contacts__block__emergency">
                            <h4 className='mb-2'>Экстренная связь</h4>
                            <p>Для экстренных случаев и вызова группы быстрого реагирования звоните круглосуточно</p>
                            <span className="phone py-4">{item.phone.emergency}</span>
                            <span >Круглосуточная диспетчерская служба</span>
                        </div>
                    </div>

                </>
            ))}

        </>
    )
}

export default ContactsInfo