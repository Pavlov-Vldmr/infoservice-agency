import Hamburger from "hamburger-react"
import { useEffect, useRef, useState } from "react"
import './HumburgerComponent.scss'
import { NavLink } from "react-router-dom"

function HamburgerComponent() {
    const [open, setOpen] = useState(false)
    const menuRef = useRef(null);

    useEffect(() => {
        // Функция проверки клика
        const handleClickOutside = (event) => {
            // Если меню открыто, клик был не по меню и не по кнопке
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !event.target.closest('.hamburger')
            ) {
                setOpen(false);
            }
        };

        // Добавляем слушатель при монтировании
        document.addEventListener('mousedown', handleClickOutside);

        // Очищаем слушатель при размонтировании
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <>
            <div className="hamburger">
                <Hamburger
                    color="#1e3a8a"
                    direction="right"
                    toggled={open}
                    toggle={setOpen}
                    rounded
                    hideOutline={false}
                // onClick={() => setOpen(!open)}
                />
                {open &&
                    <div ref={menuRef} className="hamburger__nav">

                        <nav className={`hamburger__nav__links`}>
                            <ul>
                                <li> <NavLink to="/infoservice-agency">Главная</NavLink></li>
                                <li> <NavLink to="/About">О компании</NavLink></li>
                                <li> <NavLink to="/Services">Услуги</NavLink></li>
                                <li> <NavLink to="/Objects">Объъекты</NavLink></li>
                                <li> <NavLink to="/Contacts">Контакты</NavLink></li>
                            </ul>
                        </nav>

                    </div>

                }
            </div>


        </>
    )
}

export default HamburgerComponent