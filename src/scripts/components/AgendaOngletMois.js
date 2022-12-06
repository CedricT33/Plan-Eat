import { useState } from "react";
import SelecteurMois from "./agenda/SelecteurMois";

export default function AgendaOngletMois() {

    const dateAujourdhui = new Date();
    const [mois, setMois] = useState(dateAujourdhui.getMonth());
    const [numeroAnnee, setNumeroAnnee] = useState(new Date().getFullYear());

    return (
        <div className="header-agenda">
            <SelecteurMois
                mois={mois}
                setMois={setMois}
                annee={numeroAnnee}
                setAnnee={setNumeroAnnee} />
        </div>
    )
}
