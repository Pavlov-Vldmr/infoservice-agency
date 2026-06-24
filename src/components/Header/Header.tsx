import './Header.scss'

import MainActButton from '../Buttons/MainActButton/MainActButton'
import logo from '../../assets/images/logo-full.svg';

import HamburgerComponent from "./components/HamburgerComponent/HumburgerComponent";
import NavLinksComponent from "./components/NavLinksComponent/NavLinksComponent";
import PhoneComponent from '@/features/model/PhoneComponent';
import { useCompany } from "@/contexts/CompanyInfoContext"

function Header() {

    const handleScroll = () => {
        const element = document.getElementById('callBackForm');
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offset = 140;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const { companyInfo } = useCompany();
    return (
        <>
            <header className="fixed">
                <div className="top">
                    <div className="container top__container px-8 m_px-0">
                        <PhoneComponent phone={`${companyInfo?.phoneMain}`} className='text_white top_phone' />
                        <div className="top_mail">info@infoservice-охрана.рф</div>
                        <span className="top_guard">Круглосуточная служба безопасности</span>
                    </div>
                </div>

                <div className="bottom">
                    <div className="container bottom__container px-8 m_px-0">
                        <div className="logo">
                            <img src={logo} alt="Логотип Инфосервис" />

                        </div>
                        <nav className={`nav__links`}>
                            <NavLinksComponent />
                        </nav>

                        <div className="bottom__buttons">
                            <MainActButton onClick={handleScroll} variant="primary" bordered title="Позвоните мне"></MainActButton>
                        </div>
                        <HamburgerComponent />
                    </div>
                </div>

            </header>

        </>
    )
}

export default Header