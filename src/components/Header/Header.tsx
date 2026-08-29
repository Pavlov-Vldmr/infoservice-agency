
import extraCompData from "@/assets/ServicesData/companyInfo.json"


import { matchPath, NavLink, useLocation } from "react-router-dom";

import MainActButton from "../Buttons/MainActButton/MainActButton";

import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Header.scss";
import logoSmall from "@/assets/images/logo.png"
import { useCompany } from "@/contexts/CompanyInfoContext";
import PhoneComponent from "@/features/model/PhoneComponent";
import AnimatedContent from "../ReactBits/AnimatedContent/AnimatedContent";
// import NavLinksComponent from "./components/NavLinksComponent/NavLinksComponent";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  logo?: React.ReactNode;
  items?: NavItem[];
  scrollThreshold?: number;
}

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Главная", href: "/infoservice-agency" },
  { label: "О нас", href: "/about" },
  { label: "Услуги", href: "/services" },
  { label: "Объекты", href: "/objects" },
  { label: "Контакты", href: "/contacts" },
  // { label: "CMP", href: "/components" },
];


const Header: React.FC<HeaderProps> = ({
  logo = logoSmall,
  items = DEFAULT_ITEMS,
  scrollThreshold = 40,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollLockY = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > scrollThreshold);
        tickingRef.current = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollThreshold]);

  useEffect(() => {
    if (menuOpen) {
      scrollLockY.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollLockY.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollLockY.current);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [menuOpen]);

  // Close menu on Escape, close on resize past mobile breakpoint
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const handleScroll = () => {
    // const element = document.getElementById("callBackForm");
    const element = document.getElementById("contactsForm");
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offset = 140;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  interface ButtonProps {
    text: string;
    to: string;
  }


  const getButtonProps = (): ButtonProps | null => {
    const path = location.pathname;

    if (path === '/infoservice-agency') {
      return { text: 'Позвоните нам', to: '#homePhoneCallBack' };
    }

    if (matchPath({ path: '/*' }, path)) {
      return { text: 'Позвоните нам', to: '/contacts' };
    }

    return null;
  };


  const buttonProps = getButtonProps();

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const { companyInfo } = useCompany();

  const [isMobile, setIsMobile] = useState(false);


  const animDelay: number = .1
  const animDistance: number = 10
  const animDelayDesctop: number = .1
  const animDuration = isMobile ? .3 : .1;


  return (
    <header
      className={[
        "site-header ",
        scrolled ? "site-header--solid" : "site-header--transparent",
        menuOpen ? "site-header--menu-open" : "",
      ].join(" ").trim()}
    >
      <div className="site-header__inner container">
        <a href="/infoservice-agency" className="site-header__logo" onClick={closeMenu}>
          <img src={logoSmall} alt="logo" height={50} width={"auto"} />
          {/* {logo} */}
          <div className="site-header__logo__text">
            <span className="site-header__logo__text__t">группа компаний</span>
            <span className="site-header__logo__text__m">инфосервис</span>
            <span className="site-header__logo__text__b">частное охранное предприятие</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="site-header__nav" aria-label="Основная навигация">
          {items.map((item, i) => (


            // <AnimatedContent direction="horizontal"
            //   reverse
            //   distance={animDistance}
            //   duration={animDuration}
            //   ease="power3.out"
            //   initialOpacity={0}
            //   animateOpacity
            //   scale={1}
            //   threshold={0.1}
            //   delay={isMobile ? animDelay * i : animDelayDesctop * i}>
            <NavLink key={item.href} to={item.href} className="site-header__link" end>
              {item.label}
            </NavLink>
            // {/* </AnimatedContent> */ }


          ))}
        </nav>
        <div className="site-header__callBack">

          {buttonProps && (
            <MainActButton
              to={buttonProps.to}
              onClick={handleScroll}
              variant="primary"
              bordered
              title={buttonProps.text}
            />
          )}
        </div>


        {/* Hamburger button */}
        <button
          type="button"
          className={`hamburger ${menuOpen ? "hamburger--active" : ""}`}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Fullscreen mobile dropdown */}
      <nav
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        aria-label="Мобильная навигация"
        aria-hidden={!menuOpen}
      >
        <ul className="mobile-menu__list">
          {items.map((item, i) => (
            <li
              key={item.href}
              className="mobile-menu__item"
              style={{ transitionDelay: menuOpen ? `${80 + i * 60}ms` : "0ms" }}
            >
              {/* 
              <AnimatedContent direction="horizontal"
                reverse
                distance={animDistance}
                duration={animDuration}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={isMobile ? animDelay * i : animDelayDesctop * i}> */}
              <NavLink key={item.href} to={item.href} onClick={closeMenu} className="mobile-menu__items" end>
                {item.label}
              </NavLink>
              {/* </AnimatedContent> */}


            </li>
          ))}

        </ul>

        <div className="p-4 m_pt-10 mobile-menu__btn-callback">
          {/* <MainActButton to="/calculator" variant=" primary" title="Заказать онлайн"></MainActButton> */}
          <MainActButton to="/contacts" variant="primary" type="mobile" bordered title="Позвоните нам"></MainActButton>
        </div>

        <div className=" mobile-menu__contacts px-4 mt-6">
          <PhoneComponent
            phone={`${companyInfo?.phoneMain || extraCompData.phoneMain}`}
            className="phone p-2"
          />
          <a href={`mailto:${companyInfo?.mailMain || extraCompData.mailMain}`} className="mail p-2">
            {companyInfo?.mailMain || extraCompData.mailMain}
          </a>
        </div>

        <div className="mobile-menu__bottom">
          <span className="text_muted">© 2026 {companyInfo?.companyName || extraCompData.companyName}</span>
        </div>
      </nav>

    </header>
  );
};

export default Header;