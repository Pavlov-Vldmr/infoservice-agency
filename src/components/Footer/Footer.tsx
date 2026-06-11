
import './Footer.scss'
import logo from '../../assets/images/logo-full-light.svg';
import { Link } from 'react-router-dom';


function Footer() {


    return (
        <>
            <footer>
                <div className="top">
                    <div className="container top-container">
                        <div className="logo">
                            <img src={logo} alt="Логотип Инфосервис" />
                            <p>Профессиональные решения по охране недвижимости, которым можно доверять.</p>
                        </div>
                        <nav>
                            <h4>Навигация</h4>
                            <ul>
                                <li> <Link to="/">Главная</Link></li>
                                <li> <Link to="/About">О компании</Link></li>
                                <li> <Link to="/Services">Услуги</Link></li>
                                <li> <Link to="/Objects">Объъекты</Link></li>
                                <li> <Link to="/Contacts">Контакты</Link></li>
                            </ul>
                        </nav>
                        <nav>
                            <h4>Наши услуги</h4>
                            <ul>
                                <li><Link to="/">Физическая охрана</Link></li>
                                <li><Link to="/">Видеонаблюдение</Link></li>
                                <li><Link to="/">Контроль доступа</Link></li>
                                <li><Link to="/">Пультовая охрана</Link></li>
                                <li><Link to="/">Патрулирование</Link></li>
                            </ul>
                        </nav>
                        <div className='contacts'>
                            <h4>Контакты</h4>
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