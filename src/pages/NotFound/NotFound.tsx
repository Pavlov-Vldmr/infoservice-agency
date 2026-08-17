import { NavLink } from "react-router-dom";
import "./NotFound.scss";
function NotFound() {
  return (
    <>
      <div className="not-found">
        <p className="not-found__title">404</p>
        <span className="not-found__desc">Упс! Что-то пошло не так.</span>
        <NavLink className={"not-found__link"} to="/infoservice-agency">
          на главную
        </NavLink>
      </div>
    </>
  );
}

export default NotFound;
