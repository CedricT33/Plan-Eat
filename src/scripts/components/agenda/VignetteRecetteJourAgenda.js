import { touchStart, touchEnd } from "../../services/SwipeService";
import { base64toBlob } from "../../services/Util";
import { supprimerRecetteAgenda } from "../../services/AgendaService";

export default function VignetteRecetteJourAgenda({recette, dateComplete, setRecettesDuJour}) {

    const affichageCalories = recette.calories.valeur + " " + recette.calories.unite + " / 100 gr";
    const affichagePrix = recette.prix_moyen.valeur + " " + recette.prix_moyen.unite;
    const photoBase64 = recette?.photo;
    const photoBlob = photoBase64 ? base64toBlob(photoBase64) : null;
    const photoRecette = photoBlob ? <img alt="" src={URL.createObjectURL(photoBlob)}></img> : null;

    const identifiant = dateComplete.date.split(" ")[0] + "_" + dateComplete.date.split(" ")[1] + "_" + recette.key;

    return (
        <li id={identifiant} className="vignette-recette"
            onTouchStart={e => touchStart(e)}
            onTouchEnd={e => touchEnd(e, identifiant)}>

            <div className="icone recette suppr"
                    onClick={e => supprimerRecetteAgenda(identifiant, dateComplete, setRecettesDuJour)}></div>

            <div className="image-recette">
                {photoRecette}
            </div>

            <div className="container-infos">
                <div className="titre-recette">{recette.titre}</div>
                <div className="prix-cal">
                    <div className="calories">{affichageCalories}</div>
                    <div className="prix">{affichagePrix}</div>
                </div>
            </div>
        </li>
    )
}
