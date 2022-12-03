import { recupererDateAujourdhuiFormateePourVignetteJourAgenda } from "../../services/DateUtil"

export default function VignetteJourAgenda({jour, date}) {

    const dateAjourdhui = recupererDateAujourdhuiFormateePourVignetteJourAgenda();

    const infoAujourdhui = dateAjourdhui === date
        ? <div className="aujourdhui">{`(aujourd'hui)`}</div>
        : null;

    return (
        <div className="container-jour">
            <div>
                <div>
                    <h3>{jour} <span>{date}</span></h3>
                    {infoAujourdhui}
                </div>
                <button className="ajouter">+</button>
            </div>

            <ul>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

