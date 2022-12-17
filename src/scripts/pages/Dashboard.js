import { useEffect, useState } from "react";
import { recupererDonneesAvecType } from "../services/StorageService";
import { dataConstantes } from "../constants/AppConstantes";
import { filtres } from "../constants/DonneesConstantes";
import VignetteRecette from "../components/VignetteRecette";
import VignetteFiltre from "../components/dashboard/VignetteFiltre";
import { genererRecettesFiltred } from "../services/DashboardService";

export default function Dashboard() {

    const listeRecettes = recupererDonneesAvecType(dataConstantes.CATEGORIES.RECETTES)?.reverse();

    const [recettes, setRecettes] = useState(listeRecettes);
    const [filtresActifs, setFiltresActifs] = useState([]);

    const classesPresentation = listeRecettes?.length === 0 ? "show" : null;
    const classesVignettes = listeRecettes?.length === 0 ? null : "show";

    const listeFiltres = filtres.map((filtre, i) => {
        return <VignetteFiltre
                    key={i}
                    filtre={filtre}
                    filtresActifs={filtresActifs}
                    setFiltresActifs={setFiltresActifs} />
    })

    const listeVignettes = recettes?.map(recette => {
        return <VignetteRecette key={recette.key} recette={recette} />
    })

    const messageNoFiltre = recettes?.length === 0 && listeRecettes?.length > 0 ? <div className="no-recette">Aucune recette trouvée</div> : null;

    useEffect(() => {
       genererRecettesFiltred(filtresActifs, listeRecettes, setRecettes);
    }, [filtresActifs])

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

            {messageNoFiltre}

            <div id="vignettes-dashboard" className={classesVignettes}>
                <ul>
                    {listeVignettes}
                </ul>
            </div>
        </div>
    );
}