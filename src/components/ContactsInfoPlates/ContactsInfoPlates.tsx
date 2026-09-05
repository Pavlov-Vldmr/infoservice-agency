

import './ContactsInfoPlates.scss'
import BusinessHours from "../BusinessHoursComponent/BusinessHoursComponent";
import { useCity } from '@/contexts/CityContext';
import { useCompany } from '@/contexts/CompanyInfoContext';
import { Icons } from '../Icons';
import PhoneComponent from '../PhoneComponent/PhoneComponent';
import AnimatedContent from '../ReactBits/AnimatedContent/AnimatedContent';
import extraCompData from "@/assets/ServicesData/companyInfo.json"


function ContactsInfoPlates(props: { className?: string }) {
    const { companyInfo } = useCompany();
    const { city: cityC } = useCity();

    const AnimContentDuraton: number = 1.2;

    const mainPhone = companyInfo?.phoneMain || extraCompData.phoneMain;


    const platesData = [
        {
            id: 'phone',
            icon: <Icons.Phone className="contacts__icon icon_accent" width={20} height={20} />,
            title: 'Телефон',
            content: (
                <span className='text_muted'>
                    <PhoneComponent className="phone" phone={`${mainPhone}`} />
                </span>
            )
        },
        {
            id: 'address',
            icon: <Icons.Map className="contacts__icon icon_accent" width={20} height={20} />,
            title: 'Адрес',
            content: (
                <span className='text_muted'>
                    {companyInfo?.city[cityC]?.address || extraCompData.city.yuS.address}
                </span>
            )
        },
        {
            id: 'physical',
            icon: <Icons.ShieldAlt className="contacts__icon icon_accent" width={20} height={20} />,
            title: companyInfo?.personal?.phisical?.department || extraCompData.personal.phisical.department,
            content: (
                <span className='text_muted'>
                    <PhoneComponent className="phone" phone={`${mainPhone}`} /> доб -{' '}
                    <span className="text_black">
                        {companyInfo?.personal?.phisical?.phoneExt || extraCompData.personal.phisical.phoneExt}
                    </span>
                </span>
            )
        },
        {
            id: 'technical',
            icon: <Icons.Tech className="contacts__icon icon_accent" width={20} height={20} />,
            title: companyInfo?.personal?.technical?.department || extraCompData.personal.technical.department,
            content: (
                <span className='text_muted'>
                    <PhoneComponent className="phone" phone={`${mainPhone}`} /> доб -{' '}
                    <span className="text_black">
                        {companyInfo?.personal?.technical?.phoneExt || extraCompData.personal.technical.phoneExt}
                    </span>
                </span>
            )
        },
        {
            id: 'hours',
            icon: <Icons.ClockAlt className="contacts__icon icon_accent" width={'100%'} height={20} />,
            title: 'Время работы',
            content: <BusinessHours />
        }
    ];

    return (
        <div className={`${props.className} contacts__plates p-0`}>
            <div className="contacts__plates__items">
                {platesData.map((plate) => (
                    <AnimatedContent
                        key={plate.id}
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        duration={AnimContentDuraton}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={0}
                    >
                        <div className='contacts__plates__item'>
                            <div className="contacts__plates__item-icon-container">
                                {plate.icon}
                            </div>
                            <div className='item__info'>
                                <h4>{plate.title}</h4>
                                {plate.content}
                            </div>
                        </div>
                    </AnimatedContent>
                ))}
            </div>
        </div>
    );
}

export default ContactsInfoPlates;
