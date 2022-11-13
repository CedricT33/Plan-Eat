import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SelectMenu from "../components/SelectMenu";
import InputMenu from "../components/InputMenu";
import { icones, rayons, unites } from "../constants/DonneesConstantes";
import { onClickOKFormulaire } from "../services/FormulaireService";

export default function Ingredient() {

    const params = useLocation();
    const ingredient = params?.state?.ingredient;
    

    function initialiserChamps() {
        const elmtProduit = document.getElementById("saisieIngredient_input");
        const elmtIcone = document.getElementById("saisieIcone_input");
        const elmtRayon = document.getElementById("saisieRayon_input");
        const elmtUnite = document.getElementById("saisieUnite_input");
        const elmtCalories = document.getElementById("saisieCalories_input");
        const elmtPrix = document.getElementById("saisiePrix_input");

        if (ingredient) {
            elmtProduit.value = ingredient.produit;
            elmtRayon.value = ingredient.rayon;
            elmtUnite.value = ingredient.unite_quantite;
            elmtIcone.value = ingredient.icone;
            elmtCalories.value = ingredient.calories.valeur;
            elmtPrix.value = ingredient.prix_moyen.valeur;
        }
    }

    useEffect(() => {
        initialiserChamps();
    });

    return (
        <div className="ingredient-container">
            <form id="formulaire-ingredient">
                <input id="formulaire-ingredient-index" />

                <InputMenu 
                    id="saisieIngredient"
                    type={"text"}
                    label={"Ingrédient"}
                    name={"produit"}
                    placeholder={"Nom de l'ingrédient"}
                    maxLength={"30"}
                    required/>

                <SelectMenu
                    id={"saisieIcone"}
                    liste={icones}
                    label={"Icône"}
                    name={"icone"}
                    placeholder={"Exemple: poulet"}
                    required/>

                <SelectMenu
                    id={"saisieRayon"}
                    liste={rayons}
                    label={"Rayon"}
                    name={"rayon"}
                    placeholder={"Exemple: viandes et poissons"}
                    required/>

                <SelectMenu
                    id={"saisieUnite"}
                    liste={unites}
                    label={"Unité"}
                    name={"unite_quantite"}
                    placeholder={"Exemple: gramme"}
                    required/>

                <InputMenu 
                    id="saisieCalories"
                    type={"number"}
                    label={"Calories"}
                    name={"calories"}
                    placeholder={"0000"}
                    max={"4"}>
                    <div>Kcal / pers / 100 gr</div>
                </InputMenu>

                <InputMenu 
                    id="saisiePrix"
                    type={"number"}
                    label={"Prix moyen"}
                    name={"prix_moyen"}
                    placeholder={"00.00"}
                    max={"5"}>
                    <div>€ / Kg</div>
                </InputMenu>
            </form>

            <div id="error-form" className="hide"></div>

            <div className="validation-container">
                <button
                    className="bouton"
                    onClick={e => onClickOKFormulaire("ingredients", ingredient?.key)}>
                    ENREGISTRER
                </button>
            </div>
        </div>
    );
}