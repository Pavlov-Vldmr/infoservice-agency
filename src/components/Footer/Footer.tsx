
import './Footer.scss'
import logo from '../../assets/images/logo-full-light.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import PhoneComponent from '@/features/model/PhoneComponent';

import { useCompany } from "@/contexts/CompanyInfoContext"
import { useCity } from "@/contexts/CityContext"


function Footer() {

    const { companyInfo } = useCompany();
    const { city: cityC } = useCity();

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogoClick = (): void => {
        if (location.pathname === '/infoservice-agency/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/infoservice-agency/');
            window.scrollTo(0, 0);
        }
    };

    return (
        <>
            <footer className='py-12 m_p-4'>
                <div className="top mb-4">
                    <div className="container top__container ">
                        <div onClick={handleLogoClick} style={{ cursor: 'pointer' }} className="logo m_mt-4">
                            <img className='logo__img' src={logo} alt="Логотип Инфосервис" />
                            <p className='mt-4'>Профессиональные решения по охране недвижимости, которым можно доверять.</p>
                        </div>
                        <nav>
                            <h4 className='mb-4'>Навигация</h4>
                            <ul>
                                <li> <Link to="/infoservice-agency/">Главная</Link></li>
                                <li> <Link to="/infoservice-agency/about">О компании</Link></li>
                                <li> <Link to="/infoservice-agency/services">Услуги</Link></li>
                                <li> <Link to="/infoservice-agency/objects">Объъекты</Link></li>
                                <li> <Link to="/infoservice-agency/contacts">Контакты</Link></li>
                            </ul>
                        </nav>
                        {/* <nav>
                            <h4 className='mb-4'>Наши услуги</h4>
                            <ul>
                                <li><Link to="/infoservice-agency/services/Ohrana-zhilih-kompl">Охрана жилых комплексов</Link></li>
                                <li><Link to="/">Видеонаблюдение</Link></li>
                                <li><Link to="/">Контроль доступа</Link></li>
                                <li><Link to="/">Пультовая охрана</Link></li>
                                <li><Link to="/">Патрулирование</Link></li>
                            </ul>
                        </nav> */}
                        <div className='footer__contacts'>
                            <h4 className='mb-4'>Контакты</h4>
                            <ul>
                                <li><PhoneComponent className='text_white-8' phone={`${companyInfo?.city[cityC].phone}`} />
                                </li>
                                <li><a href={`mailto:${companyInfo?.mailMain}`} className="top_mail text_white-8">
                                    {companyInfo?.mailMain}
                                </a></li>
                                <li>{companyInfo?.city[cityC].address}</li>
                                <li>{companyInfo?.city[cityC].workTime}</li>

                            </ul>
                        </div>
                    </div>
                </div>


                <div className="copyright">
                    <div className="container copyright-container">
                        <span>{companyInfo?.license}</span>
                    </div>
                </div>
            </footer >

        </>
    )
}

export default Footer