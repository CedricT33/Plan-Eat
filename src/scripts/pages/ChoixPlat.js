import {  useLocation } from "react-router-dom";
import { useState } from "react";
import { mettrePremiereLettreEnMajuscule } from "../services/Util";
import { recupererDonneesAvecType } from "../services/StorageService";
import { dataConstantes } from "../constants/AppConstantes";
import VignetteChoixRecette from "../components/agenda/VignetteChoixRecette";
import InputRecherche from "../components/formulaire/atomes/InputRecherche";

export default function ChoixPlat() {

    const [rechercheValue, setRechercheValue] = useState("");
    const dateComplete = useLocation().state;
    const dateAffichee = mettrePremiereLettreEnMajuscule(dateComplete.jour) + " " + dateComplete.date;
    const [listeRecettes] = useState(recupererDonneesAvecType(dataConstantes.CATEGORIES.RECETTES));

    const listeRecettesFiltree = listeRecettes.filter(recette => {
        return recette.titre.includes(rechercheValue);
    })

    const listeVignettesRecettes = listeRecettesFiltree.map(recette => {
        return <VignetteChoixRecette key={recette.key} recette={recette} dateComplete={dateComplete} />
    })

    const affichagePasDeRecette = listeRecettes.length === 0
        ? <div className="no-recette rouge">Il n'y a pas encore de recette...</div>
        : null;

    const affichagePasDeRecetteFiltrees = listeRecettesFiltree.length === 0
        ? <div className="no-recette">Aucune recette ne correspond à votre recherche...</div>
        : null;

    return (
        <div className="choix-plat-container">
            <h2>{dateAffichee}</h2>
            <InputRecherche setRechercheValue={setRechercheValue} placeholder="recherche de plat..."/>
            {affichagePasDeRecetteFiltrees}
            {affichagePasDeRecette}
            <ul>
                {listeVignettesRecettes}
            </ul>
        </div>        
    );
}