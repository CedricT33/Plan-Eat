import { useState } from "react";
import SelecteurSemaine from "./agenda/SelecteurSemaine";
import { recupererNumeroSemaine,
    recupererDateJoursPrecedents,
    recupererDatesPourVignetteJourAgenda } from "../services/DateUtil";
import VignetteJourAgenda from "./agenda/VignetteJourAgenda";

export default function DetailOngletAgenda() {

    const dateAujourdhui = new Date();
    const [numeroSemaine, setNumeroSemaine] = useState(recupererNumeroSemaine(dateAujourdhui));
    const annee = 2022;
    const datesSemaine = recupererDatesPourVignetteJourAgenda(numeroSemaine, annee);

    const vignettesJourAgenda = Object.keys(datesSemaine).map((date, i) => {
        return <VignetteJourAgenda key={i} jour={date} date={datesSemaine[date]} />
    })

    return (
        <div className="swipe agenda">
            <SelecteurSemaine semaine={numeroSemaine} setSemaine={setNumeroSemaine} />
            {vignettesJourAgenda}
        </div>
    );
}