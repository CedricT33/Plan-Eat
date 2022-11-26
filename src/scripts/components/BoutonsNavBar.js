import { NavLink } from "react-router-dom";
import { routesConstantes } from "../constants/AppConstantes";

export function BoutonRecette() {
    return (
        <li className="recette">
            <NavLink to={routesConstantes.RECETTE}>
                <div className="icone recette"></div>
            </NavLink>
        </li>
    );
}

export function BoutonIngredient() {
    return (
        <li className="ingredient">
            <NavLink to={routesConstantes.INGREDIENT}>
                <div className="icone ajout"></div>
            </NavLink>
        </li>
    );
}