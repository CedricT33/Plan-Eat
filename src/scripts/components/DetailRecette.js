import InfoBulleRecette from "./InfoBulleRecette";
import Tabs from "./Tabs";
import DetailOngletRecette from "./DetailOngletRecette";
import DetailOngletAgenda from "./DetailOngletAgenda";
import { bouchon } from "../constants/Bouchon";

export default function DetailRecette() {

    const recette = bouchon.recettes[0];

    return (
        <div className="detail-container">
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