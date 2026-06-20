import { NavLink } from "react-router-dom"
import './NavLinksComponent.scss'

function NavLinksComponent() {



    return (
        <>
            <ul className={"nav-links__component"}>
                <li> <NavLink to="/infoservice-agency">Главная</NavLink></li>
                <li> <NavLink to="/infoservice-agency/about">О компании</NavLink></li>
                <li> <NavLink to="/infoservice-agency/services">Услуги</NavLink></li>
                <li> <NavLink to="/infoservice-agency/objects">Объекты</NavLink></li>
                <li> <NavLink to="/infoservice-agency/contacts">Контакты</NavLink></li>
            </ul>
        </>
    )
}

export default NavLinksComponent