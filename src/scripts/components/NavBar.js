import { NavLink } from "react-router-dom";
import { routesConstantes } from "../constants/AppConstantes";
import { BoutonRecette, BoutonIngredient, BoutonChoixCourses, BoutonAjoutProduit } from "./BoutonsNavBar";
import { proposerInstallationApp } from "../../serviceWorkerRegistration";

export default function NavBar({pathname}) {

    const declancherInstallationApplication = () => {
        proposerInstallationApp();
    }

    const construireBoutonCentral = () => {
        switch (pathname) {
            case routesConstantes.INGREDIENTS:
                return <BoutonIngredient />
            case routesConstantes.COURSES:
                return <BoutonChoixCourses/>
            case routesConstantes.CHOIX_COURSES:
                return <BoutonAjoutProduit />      
            default:
                return <BoutonRecette />
        }
    }

    const boutonCentral = construireBoutonCentral();
    
    return (
        <nav>
            <ul>
                <li className="dashboard">
                    <NavLink to={routesConstantes.DASHBOARD}>
                        <div className="icone dashboard"></div>
                    </NavLink>
                </li>
                <li className="ingredients" onClick={declancherInstallationApplication}>
                    <NavLink to={routesConstantes.INGREDIENTS}>
                        <div className="icone ingredients"></div>
                    </NavLink>
                </li>
                {boutonCentral}
                <li className="agenda">
                    <NavLink to={routesConstantes.AGENDA}>
                        <div className="icone agenda"></div>
                    </NavLink>
                </li>
                <li className="courses">
                    <NavLink to={routesConstantes.COURSES}>
                        <div className="icone courses"></div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}