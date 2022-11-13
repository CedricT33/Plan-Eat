export default function ListeIngredients({ recette }) {

    function mettreAuPlurielSiBesoin(ingredient) {
        if (ingredient.unite_quantite === null
            && parseInt(ingredient.quantite) > 1
            && ingredient.produit.slice(-1) !== "s") {
                ingredient.produit += "s";
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