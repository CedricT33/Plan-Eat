import { NavLink, useNavigate } from "react-router-dom";
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

export function BoutonChoixCourses() {
    const navigate = useNavigate();
    function onClickChoixCourses() {
        const semaine = document.querySelector(".courses-container")?.getAttribute("semaine");
        const annee = document.querySelector(".courses-container")?.getAttribute("annee");
        navigate(routesConstantes.CHOIX_COURSES, {state: {semaine: semaine, annee: annee}});
    }
    return (
        <li className="ingredient">
            <button to={routesConstantes.CHOIX_COURSES} onClick={onClickChoixCourses}>
                <div className="icone ajout"></div>
            </button>
        </li>
    );
}

export function BoutonAjoutProduit() {
    return (
        <li className="ingredient">
            <NavLink to={routesConstantes.AJOUT_PRODUIT}>
                <div className="icone ajout"></div>
            </NavLink>
        </li>
    );
}