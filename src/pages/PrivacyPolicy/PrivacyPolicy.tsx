
import { NavLink } from "react-router-dom"
import "./PrivacyPolicy.scss"


function PrivacyPolicy() {


    return (
        <>
            <div className="not-found">
                <p className="not-found__title">Политика</p>
                <span className="not-found__desc">Политика текст</span>
                <NavLink className={"not-found__link"} to="/infoservice-agency">на главную</NavLink>
            </div>

        </>
    )
}

export default PrivacyPolicy
