import { filtres } from "../constants/Filtres";
import { bouchon } from "../constants/Bouchon";
import VignetteRecette from "./VignetteRecette";

export default function Dashboard() {

    const listeFiltres = filtres.map((filtre, i) => {
        return <li key={i}><div className={`icone filtre ${filtre}`}></div></li>
    })

    const listeVignettes = bouchon.map(recette => {
        return <VignetteRecette recette={recette} />
    })

    return (
        <div className="dashboard-container">
            <div id="presentation-dashboard" className="">
                <div className="logo"></div>
                <div className="bienvenue">Bienvenue dans Plan' Eat !</div>
                <div className="ingredients">Pour commencer veuillez ajouter des ingrédients...</div>
                <div className="recette">...puis vous pourrez ajouter votre première recette !</div>
            </div>

            <div id="filtres-dashboard" className="show">
                <ul>
                    {listeFiltres}
                </ul>
            </div>

            <div id="vignettes-dashboard" className="show">
                <ul>
                    {listeVignettes}
                </ul>
            </div>
        </div>
    );
}