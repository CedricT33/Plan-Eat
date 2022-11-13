import { useLocation } from "react-router-dom";
import InfoBulleRecette from "../components/InfoBulleRecette";
import Tabs from "../components/Tabs";
import DetailOngletRecette from "../components/DetailOngletRecette";
import DetailOngletAgenda from "../components/DetailOngletAgenda";

export default function DetailRecette() {

    const params = useLocation();
    const recette = params.state.recette;

    return (
        <div className="detail-container" index={recette.key}>
            <div className="photo-container"></div>
            <h1 className="titre">{recette.titre.toUpperCase()}</h1>
            <div className="badge-saison">
                <div className={`icone ${recette.saison}`}></div>
            </div>
            <div className="info-recette-container">
                <InfoBulleRecette type="temps" params={recette.temps_preparation} />
                <InfoBulleRecette type="personnes" params={recette.personnes} />
                <InfoBulleRecette type="argent" params={recette.prix_moyen} />
                <InfoBulleRecette type="calories" params={recette.calories} />
            </div>
            <Tabs>
                <div title="Recette" actif>
                    <DetailOngletRecette recette={recette}/>
                </div>
                <div title="Agenda">
                    <DetailOngletAgenda />
                </div>
            </Tabs>
        </div>
    );
}