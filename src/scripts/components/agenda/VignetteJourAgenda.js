import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { recupererDateAujourdhuiFormateePourVignetteJourAgenda } from "../../services/DateUtil";
import { ajouterRecetteDansAgenda, recupererAgendaDuJour } from "../../services/AgendaService";
import VignetteRecetteJourAgenda from "./VignetteRecetteJourAgenda";
import { routesConstantes } from "../../constants/AppConstantes";

export default function VignetteJourAgenda({jour, date, semaine, annee, agendaSemaine}) {

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const indexRecette = parseInt(document.querySelector(".detail-container")?.getAttribute("index"));
    const dateAujourdhui = recupererDateAujourdhuiFormateePourVignetteJourAgenda();
    const numeroJour = parseInt(date.split(" ")[0]);
    const agendaDuJour = recupererAgendaDuJour(agendaSemaine, numeroJour);

    const [recettesDuJour, setRecettesDuJour] = useState(agendaDuJour?.recettes);

    const dateComplete = { jour: jour, date: date, annee: annee, semaine: semaine};
    const recettes = recettesDuJour?.map((recette, i) => {
        return <VignetteRecetteJourAgenda
                key={i}
                recette={recette}
                dateComplete={dateComplete}
                setRecettesDuJour={setRecettesDuJour}/>
    })

    function onClickAjouterRecetteAgenda() {
        if (pathname === routesConstantes.DETAIL_RECETTE) {
            ajouterRecetteDansAgenda(dateComplete, indexRecette, setRecettesDuJour);
        }
        else {
            navigate(routesConstantes.CHOIX_PLAT, {state: dateComplete})
        }
    }

    const pastilleInfoAujourdhui = dateAujourdhui === (date + " " + annee)
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

