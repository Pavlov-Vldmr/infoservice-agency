
import './Footer.scss'
import logo from '../../assets/images/logo-full-light.svg';
import { Link } from 'react-router-dom';


function Footer() {


    return (
        <>
            <footer className='py-12 m_p-4'>
                <div className="top mb-4">
                    <div className="container top__container ">
                        <div className="logo m_mt-4">
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
                        <nav>
                            <h4 className='mb-4'>Наши услуги</h4>
                            <ul>
                                <li><Link to="/infoservice-agency/services/Ohrana-zhilih-kompl">Охрана жилых комплексов</Link></li>
                                <li><Link to="/">Видеонаблюдение</Link></li>
                                <li><Link to="/">Контроль доступа</Link></li>
                                <li><Link to="/">Пультовая охрана</Link></li>
                                <li><Link to="/">Патрулирование</Link></li>
                            </ul>
                        </nav>
                        <div className='footer__contacts'>
                            <h4 className='mb-4'>Контакты</h4>
                            <ul>
                                <li>+7 (495) 123-45-67</li>
                                <li>info@infoservice-охрана.рф</li>
                                <li>г. Москва, ул. Охранная, д. 123</li>
                                <li>Деловой центр, 3 этаж</li>
                                <li>24/7 Круглосуточно</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="copyright">
                    <div className="container copyright-container">
                        <span>© 2026 ООО "ИнфоСервис". Все права защищены. Лицензия № 123456. Застрахованная ответственность.</span>
                    </div>
                </div>
            </footer >

        </>
    )
}

export default Footer