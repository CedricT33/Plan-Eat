import { Link } from "react-router-dom";
import { routesConstantes } from "../constants/AppConstantes";
import { base64toBlob } from "../services/Util";
import { calculerCaloriesParPersonne } from "../services/RecetteUtil";

export default function VignetteRecette({ recette }) {

    const photoBase64 = recette?.photo;
    const photoBlob = photoBase64 ? base64toBlob(photoBase64) : null;
    const photoRecette = photoBlob ? <img alt="" src={URL.createObjectURL(photoBlob)}></img> : null;
    const caloriesParPersonne = calculerCaloriesParPersonne(recette.calories.valeur, recette?.personnes?.valeur);

    return (
        <li key={recette.key} className="vignette">
            <Link to={routesConstantes.DETAIL_RECETTE} state={{recette: recette}}>
                <div className="badge-temps">
                    <div className="icone temps"></div>
                    <div className="duree">{recette.temps_preparation.valeur + " " + recette.temps_preparation.unite}</div>
                </div>
                <div className="photo">
                    {photoRecette}
                </div>
                <div className="infos">
                    <div>
                        <div className="titre">{recette.titre}</div>
                        <div className="calories">{caloriesParPersonne + " " + recette.calories.unite + " / pers"}</div>
                    </div>
                    <div>
                        <div className="info-personnes">
                            <div className="icone personnes"></div>
                            <div>{recette?.personnes?.valeur}</div>
                        </div>
                        <div className="prix">{recette.prix_moyen.valeur + " " + recette.prix_moyen.unite}</div>
                    </div>
                </div>
            </Link>
        </li>
    );
}