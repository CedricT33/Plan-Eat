import { mettrePremiereLettreEnMajuscule } from "../../services/Util";
import { nomsMois } from "../../services/DateUtil";

export default function SelecteurMois({mois, setMois, annee, setAnnee}) {

    const moisFormated = mettrePremiereLettreEnMajuscule(nomsMois[mois]);

    function onClickBackButton(e) {
        if (mois === 0) {
            setMois(11);
            setAnnee(annee - 1);
        }
        else {
            setMois(mois - 1);
        }
        e.preventDefault();
    }

    function onClickNextButton(e) {
        if (mois === 11) {
            setMois(0);
            setAnnee(annee + 1)
        }
        else {
            setMois(mois + 1);
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