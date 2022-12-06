import Tabs from "../components/Tabs";
import AgendaOngletSemaine from "../components/AgendaOngletSemaine";
import AgendaOngletMois from "../components/AgendaOngletMois";

export default function Agenda() {

    return (
        <div className="agenda-container">
            <Tabs>
                <div title="Semaine" actif>
                    <AgendaOngletSemaine />
                </div>
                <div title="Mois">
                    <AgendaOngletMois />
                </div>
            </Tabs>
        </div>
    );
}