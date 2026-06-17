import Hamburger from "hamburger-react"
import { useEffect, useRef, useState } from "react"
import './HumburgerComponent.scss'
import { NavLink, useLocation } from "react-router-dom"
import MainActButton from "@/components/Buttons/MainActButton/MainActButton"

function HamburgerComponent() {
    const [open, setOpen] = useState(false)
    // const menuRef = useRef(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    useEffect(() => {
        setOpen(false);
    }, [location]); // Срабатывает каждый раз, когда меняется URL

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (open && menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]); // Зависит от состояния open для экономии ресурсов
    return (
        <>
            <div ref={menuRef} className="hamburger">
                <Hamburger
                    color="#1e3a8a"
                    direction="right"
                    toggled={open}
                    toggle={setOpen}
                    rounded
                    hideOutline={false}
                />
                {/* {open && */}
                <div className={`hamburger__nav ${open ? '_active' : ''}`}>
                    <nav className={`hamburger__nav__links`}>
                        <ul>
                            <li> <NavLink to="/infoservice-agency">Главная</NavLink></li>
                            <li> <NavLink to="/infoservice-agency/about">О компании</NavLink></li>
                            <li> <NavLink to="/infoservice-agency/services">Услуги</NavLink></li>
                            <li> <NavLink to="/infoservice-agency/objects">Объъекты</NavLink></li>
                            <li> <NavLink to="/infoservice-agency/contacts">Контакты</NavLink></li>
                        </ul>
                    </nav>
                    <div className="hamburger__nav__buttons p-4">
                        <MainActButton variant=" primary" title="Заказать онлайн"></MainActButton>
                        <MainActButton variant=" primary" title="Заказать онлайн"></MainActButton>

                    </div>
                    <div className="hamburger__nav__phone mt-6">
                        <a href="tel:1234455566" className="phone p-2">1234455544</a>
                        <a href="mail:12344@asdf.ru" className="mail p-2">12344@asdf.ru</a>

                    </div>

                    <div className="hamburger__nav__footer">
                    </div>
                </div>
                {/* // } */}
            </div>


        </>
    )
}

export default HamburgerComponent