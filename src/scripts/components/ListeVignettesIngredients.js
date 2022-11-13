import VignetteIngredient from "../components/VignetteIngredient";
import { rayons } from "../constants/DonneesConstantes";
import { mettrePremiereLettreEnMajuscule } from "../services/Util";

export default function ListeVignettesIngredients({classes, ingredients, setIngredients}) {

    let listeVignettesCategories = rayons.map((rayon, i) => {

        const rayonAvecMajuscule = mettrePremiereLettreEnMajuscule(rayon);

        const ingredientsCategorie = ingredients.filter(ingredient => {
            return ingredient.rayon === rayon;
        })

        const listeIngredientsCategorie = ingredientsCategorie.map((ingredient, i) => {
            return <VignetteIngredient key={ingredient.key} ingredient={ingredient} setIngredients={setIngredients} />
        })

        if (ingredientsCategorie.length === 0) {
            return null;
        }

        return (
            <li key={i}>
                <h1>{rayonAvecMajuscule}</h1>
                <ul>{listeIngredientsCategorie}</ul>
            </li>
        );
    })

    return (
        <div id="vignettes-ingredients" className={classes}>
            <ul>
                {listeVignettesCategories}
            </ul>
        </div>
    );
}