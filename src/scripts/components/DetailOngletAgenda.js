import { useState } from "react";
import SelecteurSemaine from "./agenda/SelecteurSemaine";
import { recupererNumeroSemaine, recupererDatesPourVignetteJourAgenda } from "../services/DateUtil";
import VignetteJourAgenda from "./agenda/VignetteJourAgenda";

export default function DetailOngletAgenda() {

    const dateAujourdhui = new Date();
    const [numeroSemaine, setNumeroSemaine] = useState(recupererNumeroSemaine(dateAujourdhui));
    const [numeroAnnee, setNumeroAnnee] = useState(new Date().getFullYear());

    const datesSemaine = recupererDatesPourVignetteJourAgenda(numeroSemaine, numeroAnnee);

    const vignettesJourAgenda = Object.keys(datesSemaine).map((date, i) => {
        return <VignetteJourAgenda key={i} jour={date} date={datesSemaine[date]} />
    })

    return (
        <div className="swipe agenda">
            <div className="header-agenda">
                <SelecteurSemaine
                    semaine={numeroSemaine}
                    setSemaine={setNumeroSemaine}
                    annee={numeroAnnee}
                    setAnnee={setNumeroAnnee}/>
            </div>
            {vignettesJourAgenda}
        </div>
    );
}