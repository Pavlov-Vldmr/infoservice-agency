
import extraCompData from "@/assets/ServicesData/companyInfo.json"
import { useCity } from "@/contexts/CityContext"
import { useCompany } from "@/contexts/CompanyInfoContext"
import PhoneComponent from '@/components/PhoneComponent/PhoneComponent';

import { Icons } from '../Icons'
import AnimatedContent from "../ReactBits/AnimatedContent/AnimatedContent";

import './ContactsInfoComponent.scss'
import BusinessHours from "../BusinessHoursComponent/BusinessHoursComponent";
import FadeContent from "../ReactBits/FadeContent/FadeContent";
import ContactsInfoPlates from "../ContactsInfoPlates/ContactsInfoPlates";

function ContactsInfoComponent(props: { className?: string }) {

    const { companyInfo } = useCompany();
    const { city: cityC } = useCity();

    const AnimContentDuraton: number = 1.2

    return (
        <>

            <>
                <div id="contactsForm" className={`${props.className} contacts__block p-0`}>
                    <div className="contacts__block__items">

                        <ContactsInfoPlates />




                    </div>

                    <FadeContent blur={true} delay={.3} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div className="contacts__block__emergency m_mb-10 mt-10 bg_gradient-circle-sm">
                            <h4 className='mb-2'>Экстренная связь</h4>
                            <p>Для экстренных случаев и вызова группы быстрого реагирования звоните круглосуточно</p>
                            <span className="phone py-4"><PhoneComponent className='text_white' phone={`${companyInfo?.phoneEmergency || extraCompData.phoneEmergency}`} /></span>
                            <span >Круглосуточная диспетчерская служба</span>
                        </div>
                    </FadeContent>

                </div>
            </>
        </>
    )
}

export default ContactsInfoComponent