export default function DetailOngletRecette({ recette }) {

    const listeIngredients = recette?.ingredients?.map(ingredient => {
        return <li key={ingredient.key}>{ingredient.produit} <span>{ingredient.quantite} {ingredient.unite_quantite}</span></li>
    })

    const listeEtapes = recette?.etapes?.map((etape, i) => {
        return <li key={i}><p>{etape}</p></li>
    })

    return (
        <div className="swipe">
            <h2>Ingredients</h2>
            <div className="ingredients">
                <ul>
                    {listeIngredients}
                </ul>
            </div>
            <h2>Etapes</h2>
            <div className="etapes">
                <ul>
                    {listeEtapes}
                </ul>
            </div>
        </div>
    );
}