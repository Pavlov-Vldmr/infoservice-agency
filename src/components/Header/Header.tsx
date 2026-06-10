import { NavLink } from "react-router-dom"

import './Header.scss'

import MainActButton from '../../components/Buttons/MainActButton/MainActButton'
import logo from '../../assets/images/logo-full.svg';

function Header() {


    return (
        <>
            <header>
                <div className="top">
                    <div className="container top-container">
                        <div className="phone">+7 (495) 123-45-67</div>
                        <div className="mail">info@infoservice-охрана.рф</div>
                        <span>Круглосуточная служба безопасности</span>
                    </div>

                </div>
                <div className="bottom">
                    <div className="container bottom-container">
                        <div className="logo">
                            <img src={logo} alt="Логотип Инфосервис" />
                        </div>
                        <nav>
                            <ul>
                                <li> <NavLink to="/">Главная</NavLink></li>
                                <li> <NavLink to="/About">О компании</NavLink></li>
                                <li> <NavLink to="/Services">Услуги</NavLink></li>
                                <li> <NavLink to="/Objects">Объъекты</NavLink></li>
                                <li> <NavLink to="/Contacts">Контакты</NavLink></li>
                            </ul>
                        </nav>
                        <MainActButton variant=" primary" title="Заказать онлайн"></MainActButton>
                    </div>
                </div>

            </header>

        </>
    )
}

export default Header