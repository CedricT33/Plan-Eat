import { nomsJours, formaterJourPourVignetteAgendaMois, nomsMois } from "../../services/DateUtil";
import { recupererAgendaSemaine, recupererAgendaDuJour } from "../../services/AgendaService";
import VignetteJourAgendaMois from "./VignetteJourAgendaMois";

export default function SemaineAgendaMois({numeroSemaine,
                                nombreJoursDansSemaine, premierJour, numeroMois, annee, agenda}) {

    const joursSemaine = [];

    const agendaSemaine = recupererAgendaSemaine(annee, numeroSemaine, agenda);

    if (premierJour === 1) {
        for (let i = 1; i <= nombreJoursDansSemaine; i++) {
            const jourSemaine = nomsJours[(7 - nombreJoursDansSemaine) + i - 1];
            const dateComplete = {
                jour: jourSemaine,
                date: i + " " + nomsMois[numeroMois],
                annee: annee,
                semaine: numeroSemaine
            };
            const jour = {
                titre: formaterJourPourVignetteAgendaMois(jourSemaine) + " " + i,
                dateComplete: dateComplete,
                recettes: recupererAgendaDuJour(agendaSemaine, i)?.recettes
            };
            joursSemaine.push(jour);
        }
    }
    else {
        for (let i = 1; i <= nombreJoursDansSemaine; i++) {
            const jourSemaine = nomsJours[i - 1];
            const dateComplete = {
                jour: jourSemaine,
                date: (premierJour + i - 1) + " " + nomsMois[numeroMois],
                annee: annee,
                semaine: numeroSemaine
            };
            const jour = {
                titre: formaterJourPourVignetteAgendaMois(jourSemaine) + " " + (premierJour + i - 1),
                dateComplete: dateComplete,
                recettes: recupererAgendaDuJour(agendaSemaine, (premierJour + i - 1))?.recettes
            };
            joursSemaine.push(jour);
        }
    }

    const vignettesJourAgendaMois = joursSemaine.map((jourSemaine, i) => {
        return <VignetteJourAgendaMois
            key={i}
            jourSemaine={jourSemaine}
            recettes={jourSemaine.recettes}
            dateComplete={jourSemaine.dateComplete} />
    })

    return (
        <div className="container-semaine">
            <h3>{`Semaine ${numeroSemaine}`}</h3>
            <ul>
                {vignettesJourAgendaMois}
            </ul>
        </div>
    )
}
