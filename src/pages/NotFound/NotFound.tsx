import { NavLink } from "react-router-dom";

import "./NotFound.scss";
import PageTitle from "@/components/PageTitle/PageTitle";
function NotFound() {
  return (
    <>
      <PageTitle plate="УПС" title="Упс! Что-то пошло не так." />



      <div className="not-found py-4">
        <p className="not-found__title">404</p>
        <span className="not-found__desc"></span>
        <NavLink className={"not-found__link"} to="/">
          на главную
        </NavLink>
      </div>
    </>
  );
}

export default NotFound;
