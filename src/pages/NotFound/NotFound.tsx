import { NavLink } from "react-router-dom"
import "./NotFound.scss"
function NotFound() {


    return (
        <>
            <div className="not_found">
                <span>404</span>
                <NavLink to="/infoservice-agency">Главная</NavLink>

            </div>


        </>
    )
}

export default NotFound
