import Tabs from "../components/Tabs";
import AgendaOngletSemaine from "../components/AgendaOngletSemaine";
import AgendaOngletMois from "../components/AgendaOngletMois";
import { ongletAgendaActif, modifierOngletAgendaActif} from "../services/AgendaService";

export default function Agenda() {

    const ongletSemaineActif = ongletAgendaActif === "Semaine";
    const ongletMoisActif = ongletAgendaActif === "Mois";

    function onClickTab(e) {
        modifierOngletAgendaActif(e.title);
    }

    return (
        <div className="agenda-container">
            <Tabs>
                <div title="Semaine" actif={ongletSemaineActif} onClick={e => onClickTab(e)}>
                    <AgendaOngletSemaine />
                </div>
                <div title="Mois" actif={ongletMoisActif} onClick={e => onClickTab(e)}>
                    <AgendaOngletMois />
                </div>
            </Tabs>
        </div>
    );
}