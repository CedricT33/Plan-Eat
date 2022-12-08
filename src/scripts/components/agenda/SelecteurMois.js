import { mettrePremiereLettreEnMajuscule } from "../../services/Util";
import { nomsMois } from "../../services/DateUtil";
import { modifierAnneeActiveOngletMois, modifierMoisActif } from "../../services/AgendaService";

export default function SelecteurMois({mois, setMois, annee, setAnnee}) {

    const moisFormated = mettrePremiereLettreEnMajuscule(nomsMois[mois]);

    function modifierMois(mois) {
        setMois(mois);
        modifierMoisActif(mois);
    }

    function modifierAnnee(annee) {
        setAnnee(annee);
        modifierAnneeActiveOngletMois(annee);
    }

    function onClickBackButton(e) {
        if (mois === 0) {
            modifierMois(11);
            modifierAnnee(annee - 1);
        }
        else {
            modifierMois(mois - 1);
        }
        e.preventDefault();
    }

    function onClickNextButton(e) {
        if (mois === 11) {
            modifierMois(0);
            modifierAnnee(annee + 1)
        }
        else {
            modifierMois(mois + 1);
        }
        e.preventDefault();
    }

    return (
        <div className="container-selection-semaine">
            <button onClick={(e) => onClickBackButton(e)}><div className="icone back"></div></button>
            <h2>{`${moisFormated}`}</h2>
            <button onClick={(e) => onClickNextButton(e)}><div className="icone next"></div></button>
        </div>
    )
}