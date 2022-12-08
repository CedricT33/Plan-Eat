import { useEffect, useState } from "react";
import SelecteurSemaine from "./agenda/SelecteurSemaine";
import VignetteJourAgenda from "./agenda/VignetteJourAgenda";
import { recupererDatesPourVignetteJourAgenda } from "../services/DateUtil";
import { recupererAgendaSemaine } from "../services/AgendaService";
import { anneeActiveOngletSemaine, semaineActive } from "../services/AgendaService";

export default function AgendaOngletSemaine() {

    const [numeroSemaine, setNumeroSemaine] = useState(semaineActive);
    const [numeroAnnee, setNumeroAnnee] = useState(anneeActiveOngletSemaine);
    const [agendaSemaine, setAgendaSemaine] = useState(recupererAgendaSemaine(numeroAnnee, numeroSemaine));
    const datesSemaine = recupererDatesPourVignetteJourAgenda(numeroSemaine, numeroAnnee);

    const vignettesJourAgenda = Object.keys(datesSemaine).map((date, i) => {
        if (numeroSemaine === (52 || 53) && datesSemaine[date].includes("janvier")) {
            return <VignetteJourAgenda
                    key={i}
                    jour={date}
                    date={datesSemaine[date]}
                    annee={numeroAnnee + 1}
                    semaine={numeroSemaine}
                    agendaSemaine={recupererAgendaSemaine(numeroAnnee + 1, numeroSemaine)} />
        }
        return <VignetteJourAgenda
                    key={i}
                    jour={date}
                    date={datesSemaine[date]}
                    annee={numeroAnnee}
                    semaine={numeroSemaine}
                    agendaSemaine={agendaSemaine} />
    });

    useEffect(() => {
        setAgendaSemaine(recupererAgendaSemaine(numeroAnnee, numeroSemaine));
    }, [numeroSemaine, numeroAnnee])

    return (
        <div className="swipe agenda">
            <div className="header-agenda">
                <SelecteurSemaine
                    semaine={numeroSemaine}
                    setSemaine={setNumeroSemaine}
                    annee={numeroAnnee}
                    setAnnee={setNumeroAnnee}
                    setAgendaSemaine={setAgendaSemaine} />
            </div>
            <div className="container-dates">
                {vignettesJourAgenda}
            </div>
        </div>
    )
}
