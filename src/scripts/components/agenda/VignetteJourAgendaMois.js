import { Link } from "react-router-dom";
import { tronquerChaineDeCaracteres, mettrePremiereLettreEnMajuscule } from "../../services/Util";
import { routesConstantes } from "../../constants/AppConstantes";
import { recupererDateAujourdhuiFormateePourVignetteJourAgenda } from "../../services/DateUtil";

export default function VignetteJourAgendaMois({jourSemaine, dateComplete, recettes}) {

    const dateAujourdhui = recupererDateAujourdhuiFormateePourVignetteJourAgenda();

    const listeRecettes = recettes?.map((recette, i) => {
        if (i === 2) {
            return <li key={i}>...</li>;
        }
        if (i > 2) {
            return null;
        }
        const titreRecetteFormated = mettrePremiereLettreEnMajuscule(tronquerChaineDeCaracteres(recette.titre, 10));
        return <li key={i}>{titreRecetteFormated}</li>
    })

    const iconeAjouter = recettes === undefined ? <div className="icone-pomme-ajout">+</div> : null;

    const classeAujourdhui = dateAujourdhui === (dateComplete.date + " " + dateComplete.annee)
        ? "aujourdhui" : "";

    return (
        
        <Link className={`container-vignette ${classeAujourdhui}`} to={routesConstantes.CHOIX_PLAT} state={dateComplete}>
            <h4>{jourSemaine.titre}</h4>
            {iconeAjouter}
            <ul>
                {listeRecettes}
            </ul>
        </Link>
    )
}
