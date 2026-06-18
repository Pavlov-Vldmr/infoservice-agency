import { NavLink } from "react-router-dom"

import './Header.scss'

import MainActButton from '../../components/Buttons/MainActButton/MainActButton'
import logo from '../../assets/images/logo-full.svg';
import HamburgerComponent from "./components/HumburgerComponent";

function Header() {


    return (
        <>
            <header className="fixed">
                <div className="top">
                    <div className="container top__container">
                        <div className="top_phone">+7 (495) 123-45-67</div>
                        <div className="top_mail">info@infoservice-охрана.рф</div>
                        <span className="top_guard">Круглосуточная служба безопасности</span>
                    </div>
                </div>

                <div className="bottom">
                    <div className="container bottom__container">
                        <div className="logo">
                            <img src={logo} alt="Логотип Инфосервис" />
                        </div>
                        <nav className={`nav__links`}>
                            <ul>
                                <li> <NavLink to="/infoservice-agency">Главная</NavLink></li>
                                <li> <NavLink to="/infoservice-agency/about">О компании</NavLink></li>
                                <li> <NavLink to="/infoservice-agency/services">Услуги</NavLink></li>
                                <li> <NavLink to="/infoservice-agency/objects">Объекты</NavLink></li>
                                <li> <NavLink to="/infoservice-agency/contacts">Контакты</NavLink></li>
                            </ul>
                        </nav>

                        <div className="bottom__button">
                            <MainActButton variant=" primary" title="Заказать онлайн"></MainActButton>
                        </div>
                        <HamburgerComponent />
                    </div>
                </div>

            </header>

        </>
    )
}

export default Header