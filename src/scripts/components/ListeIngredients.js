import { motsInvariables } from "../constants/DonneesConstantes";

export default function ListeIngredients({ recette }) {

    function mettreAuPlurielSiBesoin(ingredient) {
        if (ingredient.unite_quantite === null
            && parseInt(ingredient.quantite) > 1
            && ingredient.produit.slice(-1) !== "s"
            && ingredient.produit.slice(-1) !== "x") {
                if (ingredient.produit === "chou") {
                    ingredient.produit += "x";
                }
                else {
                    ingredient.produit += "s";
                }
        }
        else if (ingredient.unite_quantite === null
            && parseInt(ingredient.quantite) < 2
            && (ingredient.produit.slice(-1) === "s" || ingredient.produit.slice(-1) === "x")){
                if (!motsInvariables.includes(ingredient.produit)) {
                    ingredient.produit = ingredient.produit.slice(0, -1);
                }
        }
        return ingredient;
    }

    const listeIngredients = recette?.ingredients?.map(ingredient => {
        ingredient = mettreAuPlurielSiBesoin(ingredient);
        return <li key={ingredient.key}>{ingredient.produit} <span>{ingredient.quantite} {ingredient.unite_quantite}</span></li>
    })

    return (
        <>
        {listeIngredients}
        </>
    );
}