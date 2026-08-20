
import extraCompData from "@/assets/ServicesData/companyInfo.json"
import { useCity } from "@/contexts/CityContext"
import { useCompany } from "@/contexts/CompanyInfoContext"
import PhoneComponent from '@/features/model/PhoneComponent';

import { Icons } from '../Icons'

import './ContactsInfo.scss'

function ContactsInfo() {

    const { companyInfo } = useCompany();
    const { city: cityC } = useCity();


    return (
        <>

            <>
                <div id="contactsForm" className="contacts__block p-0">
                    <div className="contacts__block__items">
                        <div className='contacts__block__item'>
                            <Icons.Phone className="contacts__icon icon_accent" width={20} hanging={20} />
                            <div className='item__info'>
                                <h4>Телефон</h4>
                                <span className='text_muted'><PhoneComponent phone={`${companyInfo?.phoneMain || extraCompData.phoneMain}`} /></span>
                                {/* <span className="text_accent">Служба охраны 24/7</span> */}
                            </div>
                        </div>
                        <div className='contacts__block__item'>
                            <Icons.Map className="contacts__icon icon_accent" width={20} hanging={20} />
                            <div className='item__info'>
                                <h4>Адрес</h4>
                                <span className='text_muted'>{companyInfo?.city[cityC]?.address || extraCompData.city.yuS.address}</span>
                            </div>
                        </div>
                        <div className='contacts__block__item'>
                            <Icons.ShieldAlt className="contacts__icon icon_accent" width={20} hanging={20} />
                            <div className='item__info'>
                                <h4>{companyInfo?.personal?.phisical?.department || extraCompData.personal.phisical.department}</h4>
                                <span className='text_muted'>{companyInfo?.personal?.phisical?.job || extraCompData.personal.phisical.job} {companyInfo?.personal?.phisical?.name || extraCompData.personal.phisical.name}</span>
                                <span className='text_muted'><PhoneComponent phone={`${companyInfo?.phoneMain || extraCompData.phoneMain}`} /> доб {companyInfo?.personal?.phisical?.phoneExt || extraCompData.personal.phisical.phoneExt}</span>
                                <span className='text_muted'>{companyInfo?.personal?.phisical?.jobTime || extraCompData.personal.phisical.jobTime} перерыв {companyInfo?.personal?.phisical?.jobBreak || extraCompData.personal.phisical.jobBreak}</span>
                            </div>
                        </div>
                        <div className='contacts__block__item'>
                            <Icons.Tech className="contacts__icon icon_accent" width={20} hanging={20} />
                            <div className='item__info'>
                                <h4>{companyInfo?.personal?.technical?.department || extraCompData.personal.technical.department}</h4>
                                <span className='text_muted'>{companyInfo?.personal?.technical?.job || extraCompData.personal.technical.job} {companyInfo?.personal?.technical?.name || extraCompData.personal.technical.name}</span>
                                <span className='text_muted'><PhoneComponent phone={`${companyInfo?.phoneMain || extraCompData.phoneMain}`} /> доб {companyInfo?.personal?.technical?.phoneExt || extraCompData.personal.technical.phoneExt}</span>
                                <span className='text_muted'>{companyInfo?.personal?.technical?.jobTime || extraCompData.personal.technical.jobTime} перерыв {companyInfo?.personal?.technical?.jobBreak || extraCompData.personal.technical.jobBreak}</span>
                            </div>
                        </div>

                    </div>
                    <div className="contacts__block__emergency">
                        <h4 className='mb-2'>Экстренная связь</h4>
                        <p>Для экстренных случаев и вызова группы быстрого реагирования звоните круглосуточно</p>
                        <span className="phone py-4"><PhoneComponent className='text_white' phone={`${companyInfo?.phoneEmergency || extraCompData.phoneEmergency}`} /></span>
                        <span >Круглосуточная диспетчерская служба</span>
                    </div>
                </div>



            </>


        </>
    )
}

export default ContactsInfo