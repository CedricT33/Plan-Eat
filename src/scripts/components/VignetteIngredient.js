import { Link } from "react-router-dom";
import { routesConstants } from "../constants/AppConstantes";
import { touchStart, touchEnd } from "../services/SwipeService";

export default function VignetteIngredient({ ingredient }) {

    function supprimerIngredient(key) {
        console.log("suppression ingredient avec la key : ", key);
    }

    return (
        <li key={ingredient.key} id={ingredient.key} className="vignette"
            onTouchStart={e => touchStart(e)}
            onTouchEnd={e => touchEnd(e,ingredient.key)}>

            <div className="icone ingredients suppr" onClick={e => supprimerIngredient(ingredient.key)}></div>

            <Link to={routesConstants.INGREDIENT}>
                <div className="infos">
                    <div>
                        <div className={`icone ingredient ${ingredient.icone}`}></div>
                        <div className="titre">{ingredient.produit}</div>
                        <div className="calories">{ingredient.calories.valeur + " "
                            + ingredient.calories.unite + " / pers / 100 gr"}</div>
                    </div>
                    <div>
                        <div className="prix">{ingredient.prix_moyen.valeur + " "
                            + ingredient.prix_moyen.unite + " / Kg"}</div>
                    </div>
                </div>
            </Link>
        </li>
    );
}