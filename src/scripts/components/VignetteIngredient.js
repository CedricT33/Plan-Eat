import { Link } from "react-router-dom";
import { supprimerLocalStorage, recupererDonneesAvecType } from "../services/StorageService";
import { routesConstantes, dataConstantes } from "../constants/AppConstantes";
import { touchStart, touchEnd } from "../services/SwipeService";
import { mettrePremiereLettreEnMajuscule } from "../services/Util";

export default function VignetteIngredient({ ingredient, setIngredients }) {

    function supprimerIngredient(key) {
        // TODO POPIN
        supprimerLocalStorage({ ingredients: {key: key} });
        setIngredients(recupererDonneesAvecType(dataConstantes.CATEGORIES.INGREDIENTS));
    }

    const nomIngredientAvecMajuscule = mettrePremiereLettreEnMajuscule(ingredient.produit);
    const affichageCalories = ingredient.calories.valeur + " " + ingredient.calories.unite + " / 100 gr";
    const affichagePrix = ingredient.prix_moyen.valeur + " " + ingredient.prix_moyen.unite + " / Kg";

    return (
        <li key={ingredient.key} id={ingredient.key} className="vignette"
            onTouchStart={e => touchStart(e)}
            onTouchEnd={e => touchEnd(e,ingredient.key)}>

            <div className="icone ingredients suppr" onClick={e => supprimerIngredient(ingredient.key)}></div>

            <Link to={routesConstantes.INGREDIENT_MODIF} state={{ingredient: ingredient}}>
                <div className="infos">
                    <div>
                        <div className={`icone ingredient ${ingredient.icone}`}></div>
                        <div className="titre">{nomIngredientAvecMajuscule}</div>
                        <div className="calories">{affichageCalories}</div>
                    </div>
                    <div>
                        <div className="prix">{affichagePrix}</div>
                    </div>
                </div>
            </Link>
        </li>
    );
}