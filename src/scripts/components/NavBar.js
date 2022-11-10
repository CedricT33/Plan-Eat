import { NavLink } from "react-router-dom";
import { routesConstants } from "../constants/AppConstantes";
import { BoutonRecette, BoutonIngredient } from "./BoutonsNavBar";

export default function NavBar({pathname}) {

    const retournerBoutonCentral = () => {
        switch (pathname) {
            case routesConstants.INGREDIENTS:
                return <BoutonIngredient />        
            default:
                return <BoutonRecette />;
        }
    }

    const boutonCentral = retournerBoutonCentral();
    
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
                {boutonCentral}
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