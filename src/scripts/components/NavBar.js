import { NavLink } from "react-router-dom";
import { routesConstants } from "../constants/PagesConstants";

export default function NavBar() {
    
    return (
        <nav>
            <ul>
                <li className="dashboard">
                    <NavLink to={routesConstants.DASHBOARD}>
                        <div className="icone dashboard"></div>
                    </NavLink>
                </li>
                <li className="ingredients">
                    <NavLink to={routesConstants.INGREDIENTS}>
                        <div className="icone ingredients"></div>
                    </NavLink>
                </li>
                <li className="recette">
                    <NavLink to={routesConstants.RECETTE}>
                        <div className="icone recette">
                            <i></i>
                        </div>
                    </NavLink>
                </li>
                <li className="agenda">
                    <NavLink to={routesConstants.AGENDA}>
                        <div className="icone agenda"></div>
                    </NavLink>
                </li>
                <li className="courses">
                    <NavLink to={routesConstants.COURSES}>
                        <div className="icone courses"></div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}