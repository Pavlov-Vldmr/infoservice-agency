import { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Hamburger from "hamburger-react"

import extraCompData from "@/assets/ServicesData/companyInfo.json"
import MainActButton from "@/components/Buttons/MainActButton/MainActButton"
import { useCompany } from "@/contexts/CompanyInfoContext"
import PhoneComponent from "@/features/model/PhoneComponent"

import NavLinksComponent from "../NavLinksComponent/NavLinksComponent"

import './HumburgerComponent.scss'

function HamburgerComponent() {

    const setHeight = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    window.addEventListener('resize', setHeight);
    setHeight();
    const [open, setOpen] = useState(false)
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
    }, [location]);

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
    }, [open]);


    const { companyInfo } = useCompany();
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
                <div className={`hamburger__nav ${open ? '_active' : ''}`}>
                    <nav className={`hamburger__nav__links`}>
                        <NavLinksComponent />
                    </nav>
                    <div className="hamburger__nav__buttons p-4">
                        {/* <MainActButton to="/infoservice-agency/calculator" variant=" primary" title="Заказать онлайн"></MainActButton> */}
                        <MainActButton to="/infoservice-agency/contacts" variant="white" bordered title="Позвоните нам"></MainActButton>
                    </div>
                    <div className="hamburger__nav__phone mt-6">
                        <PhoneComponent
                            phone={`${companyInfo?.phoneMain || extraCompData.phoneMain}`}
                            className="phone p-2"
                        />
                        <a href={`mailto:${companyInfo?.mailMain || extraCompData.mailMain}`} className="mail p-2">
                            {companyInfo?.mailMain || extraCompData.mailMain}
                        </a>
                    </div>

                    <div className="hamburger__nav__footer">
                        <span className="text_muted">© 2026 {companyInfo?.companyName || extraCompData.companyName}</span>
                    </div>
                </div>
                {/* // } */}
            </div>


        </>
    )
}

export default HamburgerComponent