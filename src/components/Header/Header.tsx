import { matchPath, NavLink, useLocation } from "react-router-dom";

import extraCompData from "@/assets/ServicesData/companyInfo.json"
import { useCompany } from "@/contexts/CompanyInfoContext";
import PhoneComponent from "@/features/model/PhoneComponent";

import logo from "../../assets/images/logo-full.svg";
import MainActButton from "../Buttons/MainActButton/MainActButton";
import HamburgerComponent from "./components/HamburgerComponent/HumburgerComponent";
import NavLinksComponent from "./components/NavLinksComponent/NavLinksComponent";

import "./Header.scss";
// import { CitySelector } from "@/features/CitySelector";

interface ButtonProps {
  text: string;
  to: string;
}

function Header() {
  const location = useLocation();

  const getButtonProps = (): ButtonProps | null => {
    const path = location.pathname;

    if (path === '/infoservice-agency') {
      return { text: 'Позвоните нам', to: '/infoservice-agency' };
    }

    if (matchPath({ path: '/infoservice-agency/*' }, path)) {
      return { text: 'Позвоните нам', to: '/infoservice-agency/contacts' };
    }

    return null;
  };


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

  const { companyInfo } = useCompany();
  const buttonProps = getButtonProps();

  return (
    <>
      <header className="fixed">
        <div className="top">
          <div className="container top__container px-8 m_px-0">
            <PhoneComponent
              phone={`${companyInfo?.phoneMain || extraCompData.phoneMain}`}
              className="text_white top_phone"
            />
            <a href={`mailto:${companyInfo?.mailMain || extraCompData.mailMain}`} className="top_mail text_white">
              {companyInfo?.mailMain || extraCompData.mailMain}
            </a>
            {/* <CitySelector /> */}
            <span>Круглосуточная служба безопасности</span>
          </div>
        </div>

        <div className="bottom">
          <div className="container bottom__container px-8 m_px-0">
            <NavLink to="/infoservice-agency" end>
              <div className="logo">
                <img src={logo} alt="Логотип Инфосервис" />
              </div>
            </NavLink>
            <nav className={`nav__links`}>
              <NavLinksComponent />
            </nav>

            <div className="bottom__buttons">
              {buttonProps && (
                <MainActButton
                  to={buttonProps.to}
                  onClick={handleScroll}
                  variant="primary"
                  bordered
                  title={buttonProps.text}
                />
              )}


              {/* <MainActButton
                to="/infoservice-agency"
                onClick={handleScroll}
                variant="primary"
                bordered
                title="Позвоните нам"
              ></MainActButton> */}
            </div>
            <HamburgerComponent />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
