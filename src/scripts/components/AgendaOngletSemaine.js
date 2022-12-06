import { useEffect, useState } from "react";
import SelecteurSemaine from "./agenda/SelecteurSemaine";
import VignetteJourAgenda from "./agenda/VignetteJourAgenda";
import { recupererNumeroSemaine, recupererDatesPourVignetteJourAgenda } from "../services/DateUtil";
import { recupererAgendaSemaine } from "../services/AgendaService";

export default function AgendaOngletSemaine() {

    const dateAujourdhui = new Date();
    const [numeroSemaine, setNumeroSemaine] = useState(recupererNumeroSemaine(dateAujourdhui));
    const [numeroAnnee, setNumeroAnnee] = useState(new Date().getFullYear());
    const [agendaSemaine, setAgendaSemaine] = useState(recupererAgendaSemaine(numeroAnnee, numeroSemaine));

    const datesSemaine = recupererDatesPourVignetteJourAgenda(numeroSemaine, numeroAnnee);

    const vignettesJourAgenda = Object.keys(datesSemaine).map((date, i) => {
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
                    setAnnee={setNumeroAnnee} />
            </div>
            <div className="container-dates">
                {vignettesJourAgenda}
            </div>
        </div>
    )
}
