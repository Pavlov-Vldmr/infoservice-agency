import "./Header.scss";

import { NavLink } from "react-router-dom";

import MainActButton from "../Buttons/MainActButton/MainActButton";
import logo from "../../assets/images/logo-full.svg";

import HamburgerComponent from "./components/HamburgerComponent/HumburgerComponent";
import NavLinksComponent from "./components/NavLinksComponent/NavLinksComponent";
import PhoneComponent from "@/features/model/PhoneComponent";
import { useCompany } from "@/contexts/CompanyInfoContext";
// import { CitySelector } from "@/features/CitySelector";

function Header() {
  const handleScroll = () => {
    const element = document.getElementById("callBackForm");
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
  return (
    <>
      <header className="fixed">
        <div className="top">
          <div className="container top__container px-8 m_px-0">
            <PhoneComponent
              phone={`${companyInfo?.phoneMain}`}
              className="text_white top_phone"
            />
            <div className="top_mail">infoservice_2016@mail.ru</div>
            {/* <CitySelector /> */}
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
              <MainActButton
                to="/infoservice-agency"
                onClick={handleScroll}
                variant="primary"
                bordered
                title="Позвоните мне"
              ></MainActButton>
            </div>
            <HamburgerComponent />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
