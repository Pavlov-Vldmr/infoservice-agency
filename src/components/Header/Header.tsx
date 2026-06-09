import { Link } from "react-router-dom"

function Header() {


    return (
        <>
            <ul style={{ display: 'inline-flex ', gap: '30px' }}>
                <li> <Link to="/">Главная</Link></li>
                <li> <Link to="/About">О компании</Link></li>
                <li> <Link to="/Services">Услуги</Link></li>
                <li> <Link to="/Objects">Объъекты</Link></li>
                <li> <Link to="/Contacts">Контакты</Link></li>

            </ul>
        </>
    )
}

export default Header
