import { useEffect, useState } from "react";
import { recupererDateAujourdhuiFormateePourVignetteJourAgenda } from "../../services/DateUtil";
import { ajouterRecetteDansAgenda, recupererAgendaDuJour } from "../../services/AgendaService";
import VignetteRecetteJourAgenda from "./VignetteRecetteJourAgenda";

export default function VignetteJourAgenda({jour, date, semaine, annee, agendaSemaine}) {

    const indexRecette = parseInt(document.querySelector(".detail-container")?.getAttribute("index"));
    const dateAjourdhui = recupererDateAujourdhuiFormateePourVignetteJourAgenda();
    const numeroJour = parseInt(date.split(" ")[0]);
    const mois = date.split(" ")[1];
    const agendaDuJour = recupererAgendaDuJour(agendaSemaine, numeroJour, mois);

    const [recettesDuJour, setRecettesDuJour] = useState(agendaDuJour?.recettes);

    const dateComplete = { jour: jour, date: date, annee: annee, semaine: semaine };
    const recettes = recettesDuJour?.map((recette, i) => {
        return <VignetteRecetteJourAgenda
                key={i}
                recette={recette}
                dateComplete={dateComplete}
                setRecettesDuJour={setRecettesDuJour}/>
    })

    function onClickAjouterRecetteAgenda() {
        ajouterRecetteDansAgenda(dateComplete, indexRecette, setRecettesDuJour);
    }

    const pastilleInfoAujourdhui = dateAjourdhui === date
        ? <div className="aujourdhui">{`(aujourd'hui)`}</div>
        : null;

    useEffect(() => {
        setRecettesDuJour(agendaDuJour?.recettes);
    }, [agendaSemaine])

    return (
        <div className="container-jour">
            <div>
                <div>
                    <h3>{jour} <span>{date}</span></h3>
                    {pastilleInfoAujourdhui}
                </div>
                <button className="ajouter" onClick={onClickAjouterRecetteAgenda}>+</button>
            </div>

            <ul>
                {recettes}
            </ul>
        </div>
    )
}

