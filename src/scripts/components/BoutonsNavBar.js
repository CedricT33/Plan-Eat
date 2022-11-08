import { NavLink } from "react-router-dom";
import { routesConstants } from "../constants/PagesConstants";

export function BoutonRecette() {
    return (
        <li className="recette">
            <NavLink to={routesConstants.RECETTE}>
                <div className="icone recette">
                    <i></i>
                </div>
            </NavLink>
        </li>
    );
}

export function BoutonIngredient() {
    return (
        <li className="ingredient">
            <NavLink to={routesConstants.INGREDIENT}>
                <div className="plus ingredient">+</div>
            </NavLink>
        </li>
    );
}