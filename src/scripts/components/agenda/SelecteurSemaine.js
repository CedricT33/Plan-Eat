import { useLocation } from "react-router-dom";
import { recupererNombreSemaines } from "../../services/DateUtil";
import { recupererAgendaSemaine } from "../../services/AgendaService";
import { modifierAnneeActiveOngletSemaine, modifierSemaineActive } from "../../services/AgendaService";
import { routesConstantes } from "../../constants/AppConstantes";

export default function SelecteurSemaine({semaine, setSemaine, annee, setAnnee, setAgendaSemaine}) {

    const { pathname } = useLocation();

    function modifierSemaine(semaine) {
        setSemaine(semaine);
        if (pathname === routesConstantes.AGENDA) {
            modifierSemaineActive(semaine);
        }
    }

    function modifierAnnee(annee) {
        setAnnee(annee);
        if (pathname === routesConstantes.AGENDA) {
            modifierAnneeActiveOngletSemaine(annee);
        }
    }

    function onClickBackButton(e) {
        const numeroSemaineMaxAnneePrecedente = recupererNombreSemaines(annee - 1);
        if (semaine === 1) {
            modifierSemaine(numeroSemaineMaxAnneePrecedente);
            modifierAnnee(annee - 1);
        }
        else {
            modifierSemaine(semaine - 1);
        }
        setAgendaSemaine(recupererAgendaSemaine(annee, semaine));
        e.preventDefault();
    }

    function onClickNextButton(e) {
        const numeroSemaineMax = recupererNombreSemaines(annee);
        if (semaine === numeroSemaineMax) {
            modifierSemaine(1);
            modifierAnnee(annee + 1);
        }
        else {
            modifierSemaine(semaine + 1);
        }
        setAgendaSemaine(recupererAgendaSemaine(annee, semaine));
        e.preventDefault();
    }

    return (
        <div className="container-selection-semaine">
            <button onClick={(e) => onClickBackButton(e)}><div className="icone back"></div></button>
            <h2>{`Semaine ${semaine}`}</h2>
            <button onClick={(e) => onClickNextButton(e)}><div className="icone next"></div></button>
        </div>
    )
}