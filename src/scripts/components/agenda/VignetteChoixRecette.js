import { base64toBlob } from "../../services/Util";
import { useNavigate } from "react-router-dom";
import { ajouterRecetteDansAgenda } from "../../services/AgendaService";

export default function VignetteChoixRecette({recette, dateComplete}) {

    const navigate = useNavigate();

    const affichageCalories = recette.calories.valeur + " " + recette.calories.unite + " / 100 gr";
    const affichagePrix = recette.prix_moyen.valeur + " " + recette.prix_moyen.unite;
    const photoBase64 = recette?.photo;
    const photoBlob = photoBase64 ? base64toBlob(photoBase64) : null;
    const photoRecette = photoBlob ? <img alt="" src={URL.createObjectURL(photoBlob)}></img> : null;

    function onClickRecette(indexRecette, date) {
        ajouterRecetteDansAgenda(date, indexRecette);
        navigate(-1);
    }

    return (
        <li id={recette.key} className="vignette-recette" onClick={() => onClickRecette(recette.key, dateComplete)}>

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
