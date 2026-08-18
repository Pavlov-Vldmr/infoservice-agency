
import './ContactsInfo.scss'
import data from '../../assets/ServicesData/companyInfo.json'
import { Icons } from '../Icons'

import PhoneComponent from '@/features/model/PhoneComponent';

import { useCompany } from "@/contexts/CompanyInfoContext"
import { useCity } from "@/contexts/CityContext"

function ContactsInfo() {

    const { companyInfo } = useCompany();
    const { city: cityC } = useCity();

    console.log('companyInfo тех', companyInfo?.personal?.technical?.department)
    console.log('companyInfo', companyInfo)
    return (
        <>
            {data.map(item => (
                <>
                    <div className="contacts__block p-0">
                        <div className="contacts__block__items">
                            <div className='contacts__block__item'>
                                <Icons.Phone className="contacts__icon icon_accent" width={20} hanging={20} />
                                <div className='item__info'>
                                    <h4>Телефон</h4>
                                    <span className='text_muted'><PhoneComponent phone={`${companyInfo?.phoneMain}`} /></span>
                                    {/* <span className="text_accent">Служба охраны 24/7</span> */}


                                </div>
                            </div>
                            <div className='contacts__block__item'>
                                <Icons.Map className="contacts__icon icon_accent" width={20} hanging={20} />
                                <div className='item__info'>
                                    <h4>Адрес</h4>
                                    <span className='text_muted'>{companyInfo?.city[cityC]?.address}</span>
                                </div>
                            </div>
                            <div className='contacts__block__item'>
                                <Icons.ShieldAlt className="contacts__icon icon_accent" width={20} hanging={20} />
                                <div className='item__info'>
                                    <h4>{companyInfo?.personal?.phisical?.department}</h4>
                                    <span className='text_muted'>{companyInfo?.personal?.phisical?.job} {companyInfo?.personal?.phisical?.name}</span>
                                    <span className='text_muted'><PhoneComponent phone={`${companyInfo?.phoneMain}`} /> доб {companyInfo?.personal?.phisical?.phoneExt}</span>
                                    <span className='text_muted'>{companyInfo?.personal?.phisical?.jobTime} перерыв {companyInfo?.personal?.phisical?.jobBreak}</span>
                                </div>
                            </div>
                            <div className='contacts__block__item'>
                                <Icons.Tech className="contacts__icon icon_accent" width={20} hanging={20} />
                                <div className='item__info'>
                                    <h4>{companyInfo?.personal?.technical?.department}</h4>
                                    <span className='text_muted'>{companyInfo?.personal?.technical?.job} {companyInfo?.personal?.technical?.name}</span>
                                    <span className='text_muted'><PhoneComponent phone={`${companyInfo?.phoneMain}`} /> доб {companyInfo?.personal?.technical?.phoneExt}</span>
                                    <span className='text_muted'>{companyInfo?.personal?.technical?.jobTime} перерыв {companyInfo?.personal?.technical?.jobBreak}</span>
                                </div>
                            </div>

                        </div>
                        <div className="contacts__block__emergency">
                            <h4 className='mb-2'>Экстренная связь</h4>
                            <p>Для экстренных случаев и вызова группы быстрого реагирования звоните круглосуточно</p>
                            <span className="phone py-4"><PhoneComponent className='text_white' phone={`${companyInfo?.phoneEmergency}`} /></span>
                            <span >Круглосуточная диспетчерская служба</span>
                        </div>
                    </div>



                </>
            ))
            }

        </>
    )
}

export default ContactsInfo