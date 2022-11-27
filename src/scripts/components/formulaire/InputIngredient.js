import { useEffect, useState } from "react";
import { recupererDonneesAvecType } from "../../services/StorageService";
import { dataConstantes } from "../../constants/AppConstantes";
import { unites } from "../../constants/DonneesConstantes";
import InputPerso from "./atomes/InputPerso";
import SelectPerso from "./atomes/SelectPerso";

export default function InputIngredient({id, ingredient}) {

    const [nomIngredientSelected, setNomIngredientSelected] = useState();
    const [ingredientsFormated, setIngredientsFormated] = useState();
    const [uniteIngredientSelected, setUniteIngredientSelected] = useState();
    let listeIngredients = [];

    function recupererIngredients() {
        listeIngredients = recupererDonneesAvecType(dataConstantes.CATEGORIES.INGREDIENTS);
        const listeNomIngredients = listeIngredients?.map(ingredient => {
            return {nom: ingredient.produit, icone: ingredient.icone, key: ingredient.key};
        })
        setIngredientsFormated(listeNomIngredients);
    }

    function miseAJourUnite(ingredientSelect) {
        const ingredientSelected = listeIngredients.find(ingredient => {
            return ingredient?.key === ingredientSelect?.key;
        })
        let uniteQuantiteIngredient = ingredientSelected?.unite_quantite.valeur;
        let uniteQuantiteIngredientRaccourci = unites.find(unite => {
            return unite.nom === uniteQuantiteIngredient;
        })?.raccourci;

        setUniteIngredientSelected(uniteQuantiteIngredientRaccourci);
    }

    function onClickCroix(elmt) {
        const elementIngredient = elmt.parentNode;
        elementIngredient.remove();
    }

    function initialiserChamps() {
        if (ingredient) {
            const elmtSelectIngredient = document.getElementById("saisieIngredient" + id + "_input");
            const elmtInputQuantite = document.getElementById("saisieQuantiteIngredient" + id + "_input");

            elmtSelectIngredient.value = ingredient.produit;
            elmtSelectIngredient.attributes.clef.value = ingredient.key;
            elmtInputQuantite.value = ingredient.quantite;
            elmtInputQuantite.attributes.clef.value = ingredient.key;
        }
    }

    useEffect(() => {
        recupererIngredients();
        miseAJourUnite(nomIngredientSelected);
    }, [nomIngredientSelected])

    useEffect(() => {
        initialiserChamps();
    }, [ingredient])

    return (
        <div className="ajout_ingredient_item">
            <SelectPerso
                liste={ingredientsFormated}
                id={`saisieIngredient${id}`}
                placeholder="Ingrédient"
                name="ingredient"
                required
                setItem={setNomIngredientSelected}/>
            
            <InputPerso
                id={`saisieQuantiteIngredient${id}`}
                placeholder="Quantité"
                name="quantite"
                max="7"
                type="Number"
                required/>

            <div>{uniteIngredientSelected}</div>
            <div className="icone croix" onClick={e => onClickCroix(e.target)}></div>
        </div>
    );
}