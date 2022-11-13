import { useEffect, useState } from "react";
import { recupererDonneesAvecType } from "../services/StorageService";
import ListeVignettesIngredients from "../components/ListeVignettesIngredients";

export default function Ingredients() {

    const [ingredients, setIngredients] = useState();

    const classesPresentation = ingredients?.length === 0 ? "show" : null;
    const classesVignettes = ingredients?.length === 0 ? null : "show";

    function recupererIngredients() {   
        setIngredients(recupererDonneesAvecType("ingredients"));
    }

    useEffect(() => {
        recupererIngredients();
    }, [])

    return (
        <div className="ingredients-container">
            <div id="presentation-ingredients" className={classesPresentation}>
                <div className="illustration-ingredients"></div>
                <div className="explications">
                    Cliquez sur le + pour ajouter les ingrédients nécessaires à votre recette...
                </div>
            </div>
            
            <ListeVignettesIngredients
                classes={classesVignettes}
                ingredients={ingredients}
                setIngredients={setIngredients} />
        </div>
    );
}