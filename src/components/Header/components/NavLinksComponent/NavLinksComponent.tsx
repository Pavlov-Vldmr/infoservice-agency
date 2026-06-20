import { NavLink } from "react-router-dom"
import './NavLinksComponent.scss'

function NavLinksComponent() {



    return (
        <>
            <ul className={"nav-links__component"}>
                <li> <NavLink to="/infoservice-agency" end>Главная</NavLink></li>
                <li> <NavLink to="/infoservice-agency/about" end>О компании</NavLink></li>
                <li> <NavLink to="/infoservice-agency/services" end>Услуги</NavLink></li>
                <li> <NavLink to="/infoservice-agency/objects" end>Объекты</NavLink></li>
                <li> <NavLink to="/infoservice-agency/contacts" end>Контакты</NavLink></li>
            </ul>
        </>
    )
}

export default NavLinksComponent