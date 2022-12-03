import ListeIngredients from "./ListeIngredients";

export default function DetailOngletRecette({ recette }) {

    const listeEtapes = recette?.etapes?.map((etape, i) => {
        return <li key={i}><p>{etape}</p></li>
    })

    return (
        <div className="swipe recette">
            <h2>Ingredients</h2>
            <div className="ingredients">
                <ul>
                    <ListeIngredients recette={recette}/>
                </ul>
            </div>
            <h2>Etapes</h2>
            <div className="etapes">
                <ul>
                    {listeEtapes}
                </ul>
            </div>
            <footer>Recette créée/modifiée le {recette.date}</footer>
        </div>
    );
}