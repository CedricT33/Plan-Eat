import { useEffect, useState } from "react";
import SelecteurMois from "./agenda/SelecteurMois";
import { anneeActiveOngletMois, moisActif } from "../services/AgendaService";
import SemaineAgendaMois from "./agenda/SemaineAgendaMois";
import { recupererNombresJoursParSemainesDansMois, recupererNumeroSemaine } from "../services/DateUtil";
import { recupererDonneesAvecType } from "../services/StorageService";

export default function AgendaOngletMois() {

    const [numeroMois, setNumeroMois] = useState(moisActif);
    const [numeroAnnee, setNumeroAnnee] = useState(anneeActiveOngletMois);
    const [numeroPremiereSemaine, setNumeroPremiereSemaine] = useState();
    const [agenda, setAgenda] = useState(recupererDonneesAvecType("agenda"));
    const nombresJoursParSemaine = recupererNombresJoursParSemainesDansMois(numeroAnnee, numeroMois);

    let premierJourChaqueSemaine = [1];
    for (let i = 0; i < (nombresJoursParSemaine.length - 1 ); i++) {
        premierJourChaqueSemaine.push(nombresJoursParSemaine[i] + premierJourChaqueSemaine[i]); 
    }

    const semainesAgendaMois = nombresJoursParSemaine.map((joursSemaine, i) => {
        if (joursSemaine !== 0) {
            if (numeroPremiereSemaine === (52 || 53) && i !== 0) {
                return <SemaineAgendaMois
                key={i}
                numeroSemaine={i}
                nombreJoursDansSemaine={joursSemaine}
                premierJour={premierJourChaqueSemaine[i]}
                numeroMois={numeroMois}
                annee={numeroAnnee}
                agenda={agenda}/>
            }
            return <SemaineAgendaMois
                key={i}
                numeroSemaine={numeroPremiereSemaine + i}
                nombreJoursDansSemaine={joursSemaine}
                premierJour={premierJourChaqueSemaine[i]}
                numeroMois={numeroMois}
                annee={numeroAnnee}
                agenda={agenda}/>
        }
        return null;
    })

    useEffect(() => {
        setNumeroPremiereSemaine(recupererNumeroSemaine(new Date(numeroAnnee, numeroMois, 1)));
        setAgenda(recupererDonneesAvecType("agenda"));
    }, [numeroMois])
    

    return (
        <div className="swipe agenda-mois">
            <div className="header-agenda">
                <SelecteurMois
                    mois={numeroMois}
                    setMois={setNumeroMois}
                    annee={numeroAnnee}
                    setAnnee={setNumeroAnnee} />
            </div>

            <div className="container-mois">
                {semainesAgendaMois}
            </div>
        </div>
    )
}
