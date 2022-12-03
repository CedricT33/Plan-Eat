import { recupererNombreSemaines } from "../../services/DateUtil";

export default function SelecteurSemaine({semaine, setSemaine, annee, setAnnee}) {

    function onClickBackButton(e) {
        const numeroSemaineMaxAnneePrecedente = recupererNombreSemaines(annee - 1);
        if (semaine === 1) {
            setSemaine(numeroSemaineMaxAnneePrecedente);
            setAnnee(annee - 1);
        }
        else {
            setSemaine(semaine - 1);
        }
        e.preventDefault();
    }

    function onClickNextButton(e) {
        const numeroSemaineMax = recupererNombreSemaines(annee);
        if (semaine === numeroSemaineMax) {
            setSemaine(1);
            setAnnee(annee + 1)
        }
        else {
            setSemaine(semaine + 1);
        }
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