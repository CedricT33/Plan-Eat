import { useEffect, useState } from "react";
import { recupererDonneesAvecType } from "../services/StorageService";
import { dataConstantes } from "../constants/AppConstantes";
import { filtres } from "../constants/DonneesConstantes";
import VignetteRecette from "../components/VignetteRecette";

export default function Dashboard() {

    const [recettes, setRecettes] = useState();

    const classesPresentation = recettes?.length === 0 ? "show" : null;
    const classesVignettes = recettes?.length === 0 ? null : "show";

    const listeFiltres = filtres.map((filtre, i) => {
        return <li key={i}><div className={`icone filtre ${filtre}`}></div></li>
    })

    const listeVignettes = recettes?.map(recette => {
        return <VignetteRecette key={recette.key} recette={recette} />
    })

    function recupererRecettes() {
        const listeRecettes = recupererDonneesAvecType(dataConstantes.CATEGORIES.RECETTES);
        const listeRecettesOrdonnees = listeRecettes?.reverse();
        setRecettes(listeRecettesOrdonnees);
    }

    useEffect(() => {
        recupererRecettes();
    }, [])

    return (
        <div className="dashboard-container">
            <div id="presentation-dashboard" className={classesPresentation}>
                <div className="logo"></div>
                <div className="bienvenue">Bienvenue dans Plan' Eat !</div>
                <div className="ingredients">Pour commencer veuillez ajouter des ingrédients...</div>
                <div className="recette">...puis vous pourrez ajouter votre première recette !</div>
            </div>

            <div id="filtres-dashboard" className={classesVignettes}>
                <ul>
                    {listeFiltres}
                </ul>
            </div>

            <div id="vignettes-dashboard" className={classesVignettes}>
                <ul>
                    {listeVignettes}
                </ul>
            </div>
        </div>
    );
}