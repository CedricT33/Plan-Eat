import { Link } from "react-router-dom";
import { routesConstants } from "../constants/AppConstantes";

export default function VignetteRecette({ recette }) {

    return (
        <li key={recette.key} className="vignette">
            <Link to={routesConstants.DETAIL_RECETTE} state={{recette: recette}}>
                <div className="badge-temps">
                    <div className="icone temps"></div>
                    <div className="duree">{recette.temps_preparation.valeur + " " + recette.temps_preparation.unite}</div>
                </div>
                <div className="photo"></div>
                <div className="infos">
                    <div>
                        <div className="titre">{recette.titre}</div>
                        <div className="calories">{recette.calories.valeur + " " + recette.calories.unite +" / pers"}</div>
                    </div>
                    <div>
                        <div className="info-personnes">
                            <div className="icone personnes"></div>
                            <div>{recette.personnes.valeur}</div>
                        </div>
                        <div className="prix">{recette.prix_moyen.valeur + " " + recette.prix_moyen.unite}</div>
                    </div>
                </div>
            </Link>
        </li>
    );
}