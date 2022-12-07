import {  useLocation } from "react-router-dom";
import { useState } from "react";
import { mettrePremiereLettreEnMajuscule } from "../services/Util";
import { recupererDonneesAvecType } from "../services/StorageService";
import { dataConstantes } from "../constants/AppConstantes";
import VignetteChoixRecette from "../components/agenda/VignetteChoixRecette";

export default function ChoixPlat() {

    const dateComplete = useLocation().state;
    const dateAffichee = mettrePremiereLettreEnMajuscule(dateComplete.jour) + " " + dateComplete.date;

    const [listeRecettes] = useState(recupererDonneesAvecType(dataConstantes.CATEGORIES.RECETTES));

    const listeVignettesRecettes = listeRecettes.map(recette => {
        return <VignetteChoixRecette key={recette.key} recette={recette} dateComplete={dateComplete} />
    })

    return (
        <div className="choix-plat-container">
            <h2>{dateAffichee}</h2>
            {/* <div>Composant recherche</div> */}
            <br/>
            <ul>
                {listeVignettesRecettes}
            </ul>
        </div>        
    );
}